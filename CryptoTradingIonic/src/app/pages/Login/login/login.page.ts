import { ToastService } from './../../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

interface LoginForm {
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup<LoginForm>;
  errorMessage: string = '';
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private navCtrl: NavController
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('ramonfigueroa@valdusoft.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('12345678', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {}

  async login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(
        (response) => {
          if (response) {
            this.navCtrl.navigateRoot('/tabs'); // Redirigir al home después del login exitoso
          }
          throw this.toastService.showError('Credenciales inválidas');
        },
        (error) => {
          this.toastService.showError(
            error.message || 'Credenciales inválidas'
          );
        }
      );
    }
  }
}

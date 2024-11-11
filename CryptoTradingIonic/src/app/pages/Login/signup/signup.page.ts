import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

interface registerForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  registerForm!: FormGroup<registerForm>;
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private navCtrl: NavController
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('Ramon Figuera', [Validators.required]),
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

  async register() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      this.authService.register(email, password).subscribe(
        async (success) => {
          if (success) {
            await this.toastService.showSuccess('Registro exitoso');
            this.navCtrl.navigateRoot('/login');
          } else {
            await this.toastService.showError('Error al registrar');
          }
        },
        async (error) => {
          await this.toastService.showError('Error al registrar');
        }
      );
    } else {
      await this.toastService.showError(
        'Completa todos los campos correctamente'
      );
    }
  }
}

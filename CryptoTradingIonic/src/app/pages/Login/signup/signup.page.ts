import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() {
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

  ngOnInit() { }

  async register() {

  }
}

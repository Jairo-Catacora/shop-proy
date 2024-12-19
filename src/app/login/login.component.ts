import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  form = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form.value);

    console.log('Email: ', this.email);
    console.log(' Password: ', this.password);
  }
}

import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  NgForm,
  FormGroup,
  Validators,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth',
  standalone: true,
  styleUrl: './auth.component.sass',
  templateUrl: './auth.component.html',
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class AuthComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  public form!: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public login() {
    if (this.form.invalid)
      return Object.values(this.form.controls).forEach((c) =>
        c.markAsTouched()
      );

    const isAllowedUser = this._authService.login(this.form.getRawValue());

    if (!isAllowedUser) {
      this.loginForm.resetForm();
      return Swal.fire({
        icon: 'error',
        title: 'Error al hacer login',
        text: 'El usuario o la contraseña son incorrectos.',
      });
    }

    this._router.navigate(['/home']);
  }
}

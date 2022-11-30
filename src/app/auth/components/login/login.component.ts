import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ApiResponse } from 'src/app/shared/models/api-response.mode';
import Swal from 'sweetalert2';
import { LoginResponse } from '../../model/login.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private storage: Storage = sessionStorage;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    const payload = this.loginForm.value;
    this.authService.login(payload).subscribe({
      next: (response: ApiResponse<LoginResponse>) => {
        this.onSuccessLogin(response)
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.onErrorLogin(errorResponse)
      },
    });
  }

  private onSuccessLogin(response: ApiResponse<LoginResponse>): void {
    const { accessToken } = response.data;
        // if (accessToken) {
        this.storage.setItem('token', accessToken);
        this.route.queryParams.subscribe({
          next: (params: Params) => {
            const { next } = params;
            this.router.navigateByUrl(next).finally();
          },
        });
  }

  private onErrorLogin(errorResponse: HttpErrorResponse): void {
    if (errorResponse.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email atau Password salah!',
      });
    }
  }

  isFormValid(field: string): boolean {
    const control: AbstractControl = this.loginForm.get(
      field
    ) as AbstractControl;
    return control && control.invalid && (control.dirty || control.touched);
  }
}

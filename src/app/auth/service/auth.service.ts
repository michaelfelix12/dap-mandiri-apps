import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { ApiResponse } from "src/app/shared/models/api-response.mode";
import { Login, LoginResponse } from "../model/login.model";

@Injectable()
export class AuthService {
  private storage: Storage = sessionStorage;
  constructor(private readonly http: HttpClient) { }
  // login(payload: Login): Observable<LoginResponse | null> {
  //   return new Observable<LoginResponse | null> ((observer: Observer<LoginResponse | null>) => {
  //     try {
  //       //email: admin@gmail.com //password: password
  //       const { email, password } = payload;
  //       if (email === 'admin@gmail.com' && password === 'password') {
  //         const loginResponse: LoginResponse = { email: email, accessToken: '12345'};
  //         this.storage.setItem('token', JSON.stringify(loginResponse));
  //         observer.next(loginResponse);
  //       } else {
  //         observer.next(null);
  //       }
  //     } catch (error: any) {
  //       observer.error(error.message);
  //     }
  //   })
  // }
  baseUrl: string = '/api/v1/auth/login';

  login(payload: Login): Observable<ApiResponse<LoginResponse>> {
    try {
      return this.http.post<ApiResponse<LoginResponse>>(this.baseUrl, payload);
    } catch (error: any) {
      throw new Error(error.message);
    }

  }
}

import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private readonly route: Router) {}
  canActivate(): boolean {
    return this.authorized();
  }
  canActivateChild(): boolean {
    return this.authorized();
  }

  private authorized(): boolean {
    const authToken: boolean = (sessionStorage.getItem('token') !== null);
    if (!authToken) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Kamu belum ada akses untuk halaman ini.',
      })
      this.route.navigateByUrl('/auth/login');
    }
    return authToken;
  }

}

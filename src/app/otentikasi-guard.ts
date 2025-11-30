import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
export const otentikasiGuard: CanActivateFn = (route, state) => {
  return true;
  console.log("Otentikasi dimulai");

  var userId = inject(CookieService).get('userId');
  console.log("userId: " , userId);

  if (userId == null) {
    // Anggap belum login
    else if (userId == "undenfined" ) {
  }
     {
};

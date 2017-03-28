import { Injectable } from '@angular/core';
import { Angular2TokenService} from 'angular2-token';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private _tokenService: Angular2TokenService, private router: Router) {
    this._tokenService.init({
      registerAccountPath: '/api/auth',
      validateTokenPath: '/api/auth/validate_token',
      signInPath: '/api/auth/sign_in'
    });
  }

  signIn(params) {
    this._tokenService.signIn(params).subscribe(res => {
      this.router.navigate(['']);
    });
  }
  registerAccount(params) {
    this._tokenService.registerAccount(params);
  }

}

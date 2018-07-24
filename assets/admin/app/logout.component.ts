import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: '<logout></logout>',
  template: '',
  providers: [AuthService, HTTP_PROVIDERS]
})

export class LogoutComponent {
  constructor(private router: Router, private _authService: AuthService) {
  }
  ngOnInit() {
    this._authService.logOut();
    this.router.navigate(['']);
  }

}

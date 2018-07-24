import {Component, OnInit} from '@angular/core'
import {NgForm} from '@angular/common'
import {BannerComponent} from '../banner.component'
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthService} from '../auth.service'
import {Router, ActivatedRoute} from '@angular/router';

@Component({
	template: `
		<banner [title]="title"></banner>
		<div class="uk-grid">
			<div class="uk-width-large-5-10 uk-container-center">
			<div class="alert alert-success" *ngIf="saveSuccess">
			    <strong>Success!</strong>
			</div>
			<form class="uk-form" #f="ngForm" (ngSubmit)="onSubmit(f)" *ngIf="singleUser">
				<fieldset>
						<legend>Register Form</legend>
						<div class="uk-form-row">
						<div [hidden]="username.valid || !username.touched" class="uk-alert">
							username is required
						</div>
							<input type="text" required ngControl="username" #username="ngForm" placeholder="" [ngClass]="{ 'uk-width-1-1': true }" [(ngModel)]='singleUser.username'>
						</div>
						<div class="uk-form-row">
						<div [hidden]="email.valid || !email.touched" class="uk-alert">
							email is required
						</div>
							<input type="text" required [(ngModel)]='singleUser.email' ngControl="email" #email="ngForm" placeholder="" [ngClass]="{ 'uk-width-1-1': true }">
						</div>
						<div class="uk-form-row">
							<div [hidden]="password.valid || !password.touched" class="uk-alert">
								password is required
							</div>
							<input type="password" [(ngModel)]='singleUser.password' required ngControl="password" #password="ngForm" placeholder="" ngClass="uk-width-1-1">
						</div>
						<button class="uk-button uk-margin-top" type="submit">Register</button>
				</fieldset>
			</form>
			</div>
		</div>

	`,
	directives: [BannerComponent],
	providers: [AuthService, HTTP_PROVIDERS]
})
export class ChangeComponent {
	title: string = 'Change Account';
	sub;
	singleUser;
	saveSuccess: boolean;
	constructor(private router: Router, private _authService: AuthService, private _routeParams: ActivatedRoute) {

	}
	onSubmit(f) {
		this._authService.changeAcount({username: f.value.username, email: f.value.email, password: f.value.password})
				.subscribe(
					data => {
						if(data)
							this.saveSuccess = true;
						else
							this.saveSuccess = false;
					},
					error => {
						console.error(error);
					}
				);
	}
	ngOnInit(){
			this.sub = this._routeParams.params.subscribe(params => {			
		      let username = params['id'];		      
		      this._authService.getUserId(username)
		          .subscribe( json => {
		            this.singleUser = json.user;
		          });
		});
	}
	ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

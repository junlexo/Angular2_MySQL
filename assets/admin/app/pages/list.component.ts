import {Component, OnInit} from '@angular/core'
import {NgForm} from '@angular/common'
import {BannerComponent} from '../banner.component'
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router'
@Component({
	template: `
		<banner [title]="title"></banner>
		<div class="uk-grid">
			<div class="uk-width-large-5-10 uk-container-center">
				<div class="ItemList-wrapper">
					<table class="Table ItemList">
						<colgroup>
							<col width=26 />
						</colgroup>
						<thead>
							<tr>
								<th colspan=1></th>
								<th colspan=1>
									<button class="ItemList__sort-button th-sort th-sort--desc" title="Sort by Name">
										Username
									</button>
								</th>
								<th colspan=1>
									<button class="ItemList__sort-button th-sort th-sort--desc" title="Sort by Email">
										Email
									</button>
								</th>								
							</tr>
						</thead>
						<tbody>
							<tr *ngFor="let user of users; let i=index">
								<td class="ItemList__col--control ItemList__col--delete">
									<a (click)="removeUser(user.username)" data-placement="left" rel="tooltip" class="ItemList__control ItemList__control--delete">Xóa</a>
								</td>
								<td class="ItemList__col">
									<a routerLink='/user/{{user.username}}' class="ItemList__value ItemList__value--text ItemList__link--interior ItemList__link--padded ItemList__value--truncate">{{user.username}}</a>
								</td>
								<td class="ItemList__col">
									<span>{{user.email}}</span>
								</td>
							</tr>
						</tbody>					
					</table>
				</div>
			</div>
		</div>
	`,
	directives: [BannerComponent, ROUTER_DIRECTIVES],
	providers: [AuthService, HTTP_PROVIDERS]
})
export class UserComponent {
	title: string = 'List User';
	users = [];
	constructor(private router: Router, private _authService: AuthService ) {

	}	
	removeUser(username){		
		this._authService.removeUser(username).subscribe(json => {
				if(json.remove)
					this.loadList();
		});;
	}
	ngOnInit(){
		this.loadList();
	}
	loadList(){
		this._authService.getUser()
			.subscribe(json => {
				this.users = json.users;
		});
	}
}

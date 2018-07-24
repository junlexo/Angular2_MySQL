import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
	authenticated: boolean = false;
	constructor(private _http: Http) {

	}

	signIn(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json' });
    return this._http.post('http://localhost:3000/users/signin', body, {headers: headers})
               .map( response => {
								 if(response) {
									 this.authenticated = true;
								 }
								 return response.json();
							 })
  }
  register(user: any)
  {
  	const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json' });
    return this._http.post('http://localhost:3000/users/register', body, {headers: headers})
               .map( response => {								 
								 return response.json();
							 });
  }
  getUserId(id){
  	return this._http.get("http://localhost:3000/users/single/"+id)
				   .map(res => res.json());
  }

  getUser(){
  	return this._http.get("http://localhost:3000/users/all")
				   .map(res => res.json());
  }
  removeUser(username){
	  	return this._http.get("http://localhost:3000/users/remove/"+username)
					   .map(res => res.json());	
	}
	changeAcount(user: any){
		const body = JSON.stringify(user);
	    const headers = new Headers({'Content-Type': 'application/json' });
	    return this._http.post('http://localhost:3000/users/update', body, {headers: headers})
	               .map( response => {								 
									 return response.json();
								 });
	}
	isAuthenticated() {
    return this.authenticated || localStorage.getItem('token');
  }

	logOut() {
		localStorage.clear();
		this.authenticated = false;
	}
}

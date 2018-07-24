import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()
export class PostService {
	constructor(private _http: Http) {

	}

	getPost(id) {
		return this._http.get("http://localhost:3000/posts/single/"+id)
				   .map(res => res.json());
	}

	getPosts() {
		return this._http.get("http://localhost:3000/posts/all")
				   .map(res => res.json());
	}

	createPost(post: any) {

		var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

		const body = JSON.stringify(post);
		console.log(body);
		const headers = new Headers({'Content-Type': 'application/json' });
    return this._http.post('http://localhost:3000/posts/createpost' + '?token=' + token, body, {headers: headers})
               .map( response => response.json());
	}

}

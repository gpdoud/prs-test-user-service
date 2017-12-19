import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserService {

	list(): Promise<User[]> {
		return this.http.get("http://localhost:8080/Users/List")
			.toPromise()
			.then(resp => resp.json() as User[])
			.catch(this.handleError);
	}

	private handleError(error:any): Promise<any> {
		console.error('An error has occurred', error);
		return Promise.reject(error.message || error);
	}

  constructor(private http: Http) { }

}

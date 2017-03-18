import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {

	authToken: any;

	constructor(private http: Http) { }

	loadToken(){
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}

	getCompany(params){
		let headers = new Headers();
		this.loadToken();
		headers.append('Authorization', this.authToken);
		headers.append('Content-Type','application/json');
		return this.http.get('api/company/'+ params)
		.map(res => res.json());
	}

	getUserSameCompany(){
		let headers = new Headers();
		this.loadToken();
		headers.append('Authorization', this.authToken);
		headers.append('Content-Type','application/json');
		return this.http.get('api/users',{headers: headers})
		.map(res => res.json());
	}

}

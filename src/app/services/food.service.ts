import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FoodService {

  constructor(private http:Http) { }

    AddFood(Task){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/api/food/add', Task,{headers: headers})
    .map(res => res.json());
  }

	getFood(params){
    console.log(params)
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.get('/api/food/'+ params)
		.map(res => res.json());
	}

}

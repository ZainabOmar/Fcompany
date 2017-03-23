import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private http:Http) { }

  AddTask(Task){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/api/addTask', Task,{headers: headers})
    .map(res => res.json());
  }

	getTask(params){
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.get('/api/getTask/'+ params)
		.map(res => res.json());
	}

}

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ScheduleService {
	
 getSchedule(params){
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.get('api/schedule/'+ params)
		.map(res => res.json());
	}
  constructor(
      private http: Http
  	) { }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router';

@Component({
	selector: 'app-company',
	templateUrl: './company.component.html',
	styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

	constructor(
		private authService:AuthService,
		private router: Router
		) { }

	ngOnInit() {
	}
	logout() {
		this.authService.logout()
		this.router.navigate(['/']);
	}
}

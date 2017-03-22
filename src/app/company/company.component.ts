import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {CompanyService} from '../services/company.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-company',
	templateUrl: './company.component.html',
	styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
	user: String;
	obj : any;

	constructor(
		private authService:AuthService,
		private router: Router,
		private companyService: CompanyService
		) {}

	ngOnInit() {
		const user = localStorage.getItem('user-id')
		console.log(user)
		this.obj = {};
		this.companyService.getCompany(user).subscribe(data => {
			this.obj = data;
			console.log(this.obj)
		})
	}

	logout() {
		this.authService.logout()
		this.router.navigate(['/']);
	}
}

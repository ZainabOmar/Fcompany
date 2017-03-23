import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
	})

export class SigninComponent implements OnInit {

	username: String;
	password: String;

	constructor(
		private flashMessage:FlashMessagesService,
		private validateService: ValidateService,
		private authService:AuthService,
		private router: Router
		) { }

	ngOnInit() {}

	onSubmit(){
		const user = {
			username: this.username,
			password: this.password
		}

		// Required Fields
		// if(!this.validateService.validateSignin(user)){
		// 	this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 9000});
		// 	return false;
		// }

		//Register user
		this.authService.signin(user).subscribe(data => {
			if(data.token){
				this.flashMessage.show('Welcome ', {cssClass: 'alert-success', timeout: 3000});
				this.authService.storeUserData(data.token,data.userid,data.username);
				this.router.navigate(['/company']);
				}else {
					this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
					this.router.navigate(['/signup']);
				}
				});
	}
}

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
		console.log(user)

		// Required Fields
		if(!this.validateService.validateSignin(user)){
			this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 9000});
			return false;
		}

		//Register user
		this.authService.registerUser(user).subscribe(data => {
			console.log(data.success, "echoooooooooooo")
			if(data.success){
				console.log("hellooooooooooooooo, it is working")
				this.flashMessage.show('You are now registered ', {cssClass: 'alert-success', timeout: 3000});
				this.router.navigate(['/']);
			}
			else {
				console.log("hellooooooooooooooo, it is not working")
				this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
				this.router.navigate(['/signup']);
			}
			});
	}
}

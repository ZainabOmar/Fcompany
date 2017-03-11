import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  username: String;
  email: String;
  password: String;
  code: String;

  constructor(
    private flashMessage:FlashMessagesService,
    private validateService: ValidateService,
    private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }


  onRegisterSubmit(){
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
      code: this.code
    }
    
    console.log("echoooooooooooo")
    // Required Fields
    // if(!this.validateService.validateRegister(user)){
    //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 9000});
    //   return false;
    // }

    // // Validate Email
    // if(!this.validateService.validateEmail(user.email)){
    //   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 9000});
    //   return false;
    // }

    //Register user
    this.authService.registerUser(user).subscribe(data => {
      
        console.log(data.success, data,"btatatatatata")
      if(data.token){
        this.flashMessage.show('You are now registered ', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/company']);
      } else {
        console.log(data, "not working")
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/signup']);
      }
    });

  }

}

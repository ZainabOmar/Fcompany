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
  jobrole: String;
  Address: String;
  tele: String;
  compname:String;
  comflag= false;
  emflag= false;
  jobroles: string[] = ["CEO", "Developer", "Accountant", "HR"];
  but1flag = true;
  but2flag = true;


  constructor(
    private flashMessage:FlashMessagesService,
    private validateService: ValidateService,
    private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.jobrole = this.jobroles[0]
  }
  onChange(newValue) {
    this.jobrole =  newValue;

  }


  compflag() {
    this.comflag = !this.comflag;
    this.but2flag = !this.but2flag;

  }
  empflag() {
    this.emflag = !this.emflag;
    this.but1flag = !this.but1flag;
    
  }

  onRegisterUser(){
    const user = {
      username: this.username,
      email: this.email,
      jobrole: this.jobrole,
      password: this.password,
      code: this.code,
      UserType:"employee"

    }
    
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

      if(data.token){
        console.log(data)
        this.flashMessage.show('You are now registered ', {cssClass: 'alert-success', timeout: 3000});
        this.authService.storeUserData(data.token,data._id,data.username)
        this.router.navigate(['/company']);
        } else {
          this.flashMessage.show("User already exist!", {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/signup']);
        }
        });

  }
  
  onRegisterAdmin(){
    console.log('echo')
    const user = {
      username: this.username,
      email: this.email,
      jobrole: this.jobrole,
      password: this.password,
      UserType:"Admin"
    }
    
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

      if(data.token){
        this.flashMessage.show('You are now registered ', {cssClass: 'alert-success', timeout: 7000});
        this.authService.storeUserData(data.token,data.AdminId,data.username)
        this.router.navigate(['/creatcompany']);
        } else {
          this.flashMessage.show("User already exist!", {cssClass: 'alert-danger', timeout: 7000});
          this.router.navigate(['/signup']);
        }
        });

  }

}

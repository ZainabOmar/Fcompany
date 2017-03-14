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
    console.log(newValue);
    this.jobrole =  newValue;

    // ... do other stuff here ...
  }


  compflag() {
    console.log("in comp flag")
    this.comflag = !this.comflag;
    this.but2flag = !this.but2flag;

    console.log(this.comflag)
  }
  empflag() {
    this.emflag = !this.emflag;
    this.but1flag = !this.but1flag;
    
  }

  onRegisterUser(){
    console.log(this.jobrole)
    const user = {
      username: this.username,
      email: this.email,
      jobrole: this.jobrole,
      password: this.password,
      code: this.code,
      UserType:"employee"

    }
    
    console.log("echoooooooooooo",user)
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
        this.authService.storeUserData(data.token,data._id,data.username)
        this.router.navigate(['/company']);
        } else {
          console.log(data, "not working")
          this.flashMessage.show("User already exist!", {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/signup']);
        }
        });

  }
  
  onRegisterAdmin(){
    console.log(this.jobrole)
    const user = {
      username: this.username,
      email: this.email,
      jobrole: this.jobrole,
      password: this.password,
      UserType:"Admin"
    }
    
    console.log("echoooooooooooo",user)
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
        this.authService.storeUserData("null",data.AdminId,data.username)
        this.router.navigate(['/creatcompany']);
        } else {
          console.log(data, "not working")
          this.flashMessage.show("User already exist!", {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/signup']);
        }
        });

  }

}

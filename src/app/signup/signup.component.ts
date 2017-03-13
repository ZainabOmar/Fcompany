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
    console.log(this.comflag)
  }
  empflag() {
    this.emflag = !this.emflag;
  }

  onRegisterUser(){
console.log(this.jobrole)
    const user = {
      username: this.username,
      email: this.email,
      jobrole: this.jobrole,
      password: this.password,
      code: this.code
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
        this.router.navigate(['/company']);
      } else {
        console.log(data, "not working")
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/signup']);
      }
    });

  }
  
    onRegisterAdmin(){
console.log(this.jobrole)
    const user = {
      username: this.username,
      email: this.email,
      tele: this.tele,
      jobrole: this.jobrole,
      Address: this.Address,
      password: this.password,
      code: this.code,
      compname: this.compname



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
    this.authService.registerAdmin(user).subscribe(data => {
      
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

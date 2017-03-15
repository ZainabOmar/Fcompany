import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  selector: 'app-creatcompany',
  templateUrl: './creatcompany.component.html',
  styleUrls: ['./creatcompany.component.css']
})
export class CreatcompanyComponent implements OnInit {

 CompanyName: String;
 address: String;
 phoneNumber: String;
 code:String;
 AdminId:any;
 Adminname:any;

 constructor(
  private flashMessage:FlashMessagesService,
  private validateService: ValidateService,
  private authService:AuthService,
  private router: Router
  ) { }

 ngOnInit() {
   console.log(localStorage.getItem('user-id'))
 }



 Createcopmany(){
  const company = {
    CompanyName: this.CompanyName,
    address: this.address,
    phoneNumber: this.phoneNumber,
    code:this.code,
    AdminId:localStorage.getItem('user-id'),
    Adminname:localStorage.getItem('user-name'),

  }

  console.log("echoooooooooooo",company)
    // Required Fields
    // if(!this.validateService.validateRegister(company)){
    //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 9000});
    //   return false;
    // }

    // // Validate Email
    // if(!this.validateService.validateEmail(company.email)){
    //   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 9000});
    //   return false;
    // }

    //Register company
    this.authService.registerCompany(company).subscribe(data => {

      console.log(data.success, data,"btatatatatata")
      if(data){
        this.flashMessage.show('You are now registered ', {cssClass: 'alert-success', timeout: 4000});
        this.authService.storeUserData(data.token,data._id,data.username);
    this.router.navigate(['/company']);
     } else {
    console.log(data, "not working")
    this.flashMessage.show("company name already exist!", {cssClass: 'alert-danger', timeout: 4000});
    this.router.navigate(['/signup']);
   }
  });

  }
 } 

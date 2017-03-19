import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
    info = false;
    Title: String;
    Discription: String;
    Date: Date;
    obj:any;


  constructor(
     private flashMessage:FlashMessagesService,
     private scheduleservice : ScheduleService,
     private router: Router
    ) {}

  ngOnInit() {
   const userId = localStorage.getItem('user-id')
    this.obj = {};
    this.scheduleservice.getSchedule(userId).subscribe(data => {
      this.obj = data;
    })
  }
  
   div_hide(){
document.getElementById('aya').style.display = "none";
    if(this.Title && this.Date)
    this.info = !this.info
}

//Function To Display Popup
div_show() {

document.getElementById('aya').style.display = "block";
}

}

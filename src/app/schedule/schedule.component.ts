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
    title: String;
    description: String;
    date : Date ;
    starttime : String;
    endtime : String
    todos: any;
   
  constructor(
    private flashMessage:FlashMessagesService,
    private scheduleservice : ScheduleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.todos = [];
    this.scheduleservice.getSchedule(localStorage.getItem("user-id")).subscribe(data => {
      this.todos.push(data);
    })
  }
  
  div_hide(){
    document.getElementById('aya').style.display = "none";
    if(this.title && this.date )
    this.info = !this.info
  }

 //Function To Display Popup
  div_show() {
    document.getElementById('aya').style.display = "block";
  }

  add() {
    const todoObj = {
      title : this.title,
      description : this.description,
      date  : this.date ,
      starttime : this.starttime,
      endtime : this.endtime,
      id:localStorage.getItem("user-id")
    }
    this.todos.push(todoObj);
    this.scheduleservice.AddSchedule(todoObj).subscribe(data =>{
      if(data){
        this.flashMessage.show('task add well', {cssClass: 'alert-success', timeout: 3000});
      }})
    }
}

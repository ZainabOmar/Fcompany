import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    userId:any;
	  newTodo: string;
    todos: Object[] = [];
    Assign : String;
    task: String;
    Discription: String;
    Date: Date;
    Assigns: string [] = ["zainb", "shit", "aya", "maher" , "maker"];

  constructor(
     private flashMessage:FlashMessagesService,
     private taskservice : TaskService,
     private router: Router
    ) {}

  ngOnInit() {
    // this.todos = [];
    this.Assign = this.Assigns[0];

    this.taskservice.getTask(localStorage.getItem("user-id")).subscribe(data => {
      this.todos=data;
      console.log(this.todos)
    })
  }

  onChange(newValue) {
    this.Assign =  newValue;
  }



    deleteTodo(index) {
      this.todos.splice(index, 1);
    }

    // for hide the temblate
 div_hide(){
document.getElementById('abc').style.display = "none";
}

//Function To Display Popup
div_show() {

document.getElementById('abc').style.display = "block";
}
  addTodo() {
      const todoObj = {
        newTodo: this.newTodo,
        completed: false,
        Discription : this.Discription,
        Date : this.Date,
        Assign : this.Assign,
        userId:localStorage.getItem("user-id")
      }
      this.todos.push(todoObj);
    


this.taskservice.AddTask(todoObj).subscribe(data =>{
  if(data){
        this.flashMessage.show('task add well', {cssClass: 'alert-success', timeout: 3000});
         }})
    }



}

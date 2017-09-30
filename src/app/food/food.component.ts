import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
  userId:any;
  foods: Object[] = [];
  dishName : String;
  foodTime : String;
  type: String;

  foodTimes: string [] = ["Diner", "Lunch", "Breakfast",];

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private foodservice : FoodService,
    private router: Router
    ) {}

  ngOnInit() {
    this.foodTime = this.foodTimes[0];
    this.foodservice.getFood(localStorage.getItem("user-id")).subscribe(data => {
      this.foods = data;
    })
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/']);
  }

  onChange(newValue) {
    this.foodTime =  newValue;
  }

  addFood() {
    const FoodObj = {
      dishName: this.dishName,
      foodTime : this.foodTime,
      type : this.type,
      userId:localStorage.getItem("user-id")
    }

    this.foods.push(FoodObj);
    this.foodservice.AddFood(FoodObj).subscribe(data =>{
      if(data){
        this.flashMessage.show('task add well', {cssClass: 'alert-success', timeout: 3000});
        this.foodservice.getFood(localStorage.getItem("user-id")).subscribe(data => {
          this.foods = data;
        })
      } })
  }

  Votee(Name){
    const voteObj = {
      dishName : Name,
      userId:localStorage.getItem("user-id")
    }

    this.foodservice.addvote(voteObj).subscribe(data =>{
      if(data){
        this.flashMessage.show('you vote m***F***', {cssClass: 'alert-success', timeout: 3000});
        this.foodservice.getFood(localStorage.getItem("user-id")).subscribe(data => {
          this.foods = data;
        })
      }})
  }
}

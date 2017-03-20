import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

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

	foodTimes: string [] = ["diner", "lunche", "brachfast",];



  constructor(
  	 private flashMessage:FlashMessagesService,
     private foodservice : FoodService,
     private router: Router
     ) {}

  ngOnInit() {
    this.foodTime = this.foodTimes[0];

    this.foodservice.getFood(localStorage.getItem("user-id")).subscribe(data => {
      this.foods = data;
      console.log(this.foods)
    })
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
      	}})


    }

}

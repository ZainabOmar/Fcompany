import { Component, OnInit } from '@angular/core';
import { GamingService } from '../services/gaming.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {
  game = false;
  show = false;

  constructor(
    private flashMessage:FlashMessagesService,
    private gamingservice : GamingService,
    private router: Router

  	) { }

  ngOnInit() {
  }

  div_hide(){
    document.getElementById('aya').style.display = "none";
    this.game = !this.game
  }

 //Function To Display Popup
  div_show() {
  	document.getElementById('back').style.display = "block";
    document.getElementById('aya').style.display = "block";
    this.show = true;
  }
}

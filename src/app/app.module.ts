import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {LocationStrategy,HashLocationStrategy} from '@angular/common'

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {FlashMessagesModule} from 'angular2-flash-messages';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CompanyComponent } from './company/company.component';
import { TaskComponent } from './task/task.component';
import { CreatcompanyComponent } from './creatcompany/creatcompany.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
  ScheduleComponent,
    AppComponent,
    MainPageComponent,
    SigninComponent,
    SignupComponent,
    AboutusComponent,
    CompanyComponent,
    CreatcompanyComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {path: 'mainPage',   component: MainPageComponent},
  {path: '',   component: MainPageComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'creatcompany',   component: CreatcompanyComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'aboutus',   component: AboutusComponent},
  {path: 'company',   component: CompanyComponent},
  {path: 'task',   component: TaskComponent},
  {path: 'schedule',   component: ScheduleComponent}
  ]),
    FlashMessagesModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},ValidateService,AuthService],
  bootstrap: [AppComponent]
  })



export class AppModule { }
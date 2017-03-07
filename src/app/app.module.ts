import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {path: 'mainPage',   component: MainPageComponent},
  {path: '',   component: MainPageComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

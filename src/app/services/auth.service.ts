import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  AdminId:String;
  Adminname:String;

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/user/signup', user,{headers: headers})
    .map(res => res.json());
  }

  registerCompany(company){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/company', company,{headers: headers})
    .map(res => res.json());
  }

  signin(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/user/signin', user, {headers: headers})
    .map(res => res.json());
  }

  getCompany(params){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('api/company/'+ params)
    .map(res => res.json());
  }

  // authenticateUser(user){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
    //     .map(res => res.json());
    // }

    getUserSameCompany(){
      let headers = new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken);
      headers.append('Content-Type','application/json');
      return this.http.get('api/users',{headers: headers})
      .map(res => res.json());
    }

    storeUserData(token,id,name){
      localStorage.setItem('id_token', token);
      localStorage.setItem('user-id', id);
      localStorage.setItem('user-name', name);
      this.authToken = token;
    }

    loadToken(){
      const token = localStorage.getItem('id_token');
      this.authToken = token;
    }

    loadAdmindata(){
      const x=localStorage.getItem('user-id');
      const y=localStorage.getItem('user-name');
      this.AdminId=x;
      this.Adminname=y;
      return {AdminId:this.AdminId,Adminname:this.Adminname}
    }

    loggedIn(){
      return tokenNotExpired();
    }

    logout(){
      console.log("signing out")
      this.authToken = null;
      this.user = null;
      localStorage.clear();
    }
  }

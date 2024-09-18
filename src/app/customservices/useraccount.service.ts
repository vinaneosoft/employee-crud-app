import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// multiple logins : individual flag, provide the service individually
export class UseraccountService {
  loginFlag=false;
  constructor() { }
  login(username:string, password:string){
     // backend
     if(username==='admin' && password ==='admin123'){
        this.loginFlag=true
        // we will set cookie
     }
    return this.loginFlag;
  }
  logout(username:string){
    this.loginFlag=false;
    // we will remove cookie
  }
}

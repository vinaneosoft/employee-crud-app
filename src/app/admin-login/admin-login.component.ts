import { Component } from '@angular/core';
import { UseraccountService } from '../customservices/useraccount.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { setUser } from '../ngrx/user.actions';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  today=new Date();
  flag=false;
  errorMessage="";
  admin={
    username:'admin',
    password:'admin123'
  }
  constructor(private account:UseraccountService, private router:Router, private cookie:CookieService, private store:Store<{user:string}>){

  }
  collectData(loginForm:any){
   // console.log(loginForm);
    this.admin=loginForm.value;
    console.log(this.admin);
    // we have to test user
    this.flag=this.account.login(this.admin.username, this.admin.password)
    if(this.flag){
        window.alert("logged in successfully....")
        // expiry number of days
        this.cookie.set("user", this.admin.username, 1)
        //this.store.dispatch(setUser(this.admin.username))
        this.store.dispatch(setUser(this.cookie.get('user')))
        this.router.navigate(["home"]);
    }
    else
      this.errorMessage="Incorrect username or password";
  }
}

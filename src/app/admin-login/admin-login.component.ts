import { Component } from '@angular/core';
import { UseraccountService } from '../customservices/useraccount.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  flag=false;
  errorMessage="";
  admin={
    username:'admin',
    password:'admin123'
  }
  constructor(private account:UseraccountService, private router:Router, private cookie:CookieService){

  }
  collectData(loginForm:any){
   // console.log(loginForm);
    this.admin=loginForm.value;
    console.log(this.admin);
    // we have to test user
    this.flag=this.account.login(this.admin.username, this.admin.password)
    if(this.flag){
        window.alert("logged in successfully....")
        this.cookie.set("admin", this.admin.username)
        this.router.navigate(["home"]);
    }
    else
      this.errorMessage="Incorrect username or password";
  }
}

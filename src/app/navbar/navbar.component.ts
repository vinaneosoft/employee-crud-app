import { Component } from '@angular/core';
import { UseraccountService } from '../customservices/useraccount.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username="";
  /* changes auto detect : Angular Store */
  constructor(public account:UseraccountService, private cookie: CookieService){
    this.username=cookie.get('user');
    //console.log(this.username);
  }
  logout(){
   this.cookie.delete('user');
   this.username="";
   this.account.loginFlag=false;
   window.alert("logged out successfully.....");
  }
}

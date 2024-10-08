import { Component } from '@angular/core';
import { UseraccountService } from '../customservices/useraccount.service';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { resetUser, setUser } from '../ngrx/user.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username:Observable<string>;
  /* changes auto detect : Angular Store */
  constructor(public account:UseraccountService, private cookie: CookieService, private store:Store<{user:string}>, private router:Router){
    store.dispatch(setUser(cookie.get('user'))) ;
    this.username=store.select("user");
   // console.log("in navbar", this.username);
  }
  logout(){
    this.cookie.delete('user');
    //this.username="";
    this.store.dispatch(resetUser());
    this.account.loginFlag=false;
    window.alert("logged out successfully.....");
    this.router.navigate(['/adminlogin']);
  }
}

import { Component } from '@angular/core';
import { UseraccountService } from '../customservices/useraccount.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  /* changes auto detect : Angular Store */
  constructor(public account:UseraccountService){
  }
}

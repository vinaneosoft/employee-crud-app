import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mainHead="NEOSOFT EMPLOYEE MANAGEMENT"
// component instance gets created automatically
  constructor(/* xyz="abc" only service objects are allowed*/){
    console.log("in App component");
    
  }
}

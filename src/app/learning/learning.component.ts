import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  companyName1="Neosoft";
  companyName2="Webwerks";
  companyName=this.companyName2;
  baseLocation="Dadar";
  constructor(){
    setInterval(()=>{
      this.companyName=this.companyName1 // company
      this.companyName1=this.companyName2;
      this.companyName2=this.companyName; // we are changing model
    }, 1000);
  }

  display(){
    console.log(this.baseLocation);
  }
}

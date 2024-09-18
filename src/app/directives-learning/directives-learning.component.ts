import { Component } from '@angular/core';
import { CounterService } from '../customservices/counter.service';

@Component({
  selector: 'app-directives-learning',
  templateUrl: './directives-learning.component.html',
  styleUrl: './directives-learning.component.css',
  providers:[CounterService] // n component object : n service object : destroy
})
export class DirectivesLearningComponent {
  
  styleClasses=['bg-info', 'text-success', 'border', 'border-3','border-dark'];
  companyOffices=['Parel, mumbai','Dadar, Mumbai', 'Rabale, mumbai', 'pune', 'noida', 'Indore']
  styleClassesObject={
    'bg-info':false,
    'text-success':true,
    'border':true,
    'border-3':true,
    'border-dark':true
  }
  baseLocation="Dadar";
  offices=[
    {
      location:'Dadar, Mumbai (Headquarters)',
      address:'The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028'
    },
    {
      location:'Parel, Mumbai',
      address:'Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013'
    },
    {
      location:'Rabale, Mumbai',
      address:'Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701'
    },
    {
      location:'Pune',
      address:'IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057'
    },
    {
      location:'Noida',
      address:'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301'
    }
  ]

  counter1=0;
  constructor(private counterService:CounterService){
    console.log("...... in DirectivesLearningComponent......");
    // service object gets created only when it is required : when it is injected
    this.counter1=this.counterService.scount; // getter
    console.log(this.counter1);
  }
  increment(){
    this.counterService.incrementCounter();
    // we have to re fetch updated value
    this.counter1=this.counterService.getCounter(); // method
  }
}

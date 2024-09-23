import { Component } from '@angular/core';
import { CounterService } from '../customservices/counter.service';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../ngrx/counter.actions';
@Component({
  selector: 'app-pipes-learning',
  templateUrl: './pipes-learning.component.html',
  styleUrl: './pipes-learning.component.css'
})
export class PipesLearningComponent {
  currencyCode='INR'
  currencyCodes=[
    {
      country:'india',
      code:'INR'
    },
    {
      country:'japan',
      code:'JPY'
    },
    {
      country:'america',
      code:'USD'
    },
    {
      country:'europe',
      code:'EUR'
    }
  ]
  salaries=[7456.56789, 50000.3333,676767.56,7089898.88,56565656.5,78787878, 35677.444]
  today=new Date();
  birthDates=[new Date('5 July 2008'), new Date('4 July 2008'), new Date('12 July 2005')]

  counter3:number;
  counter3$:Observable<number>;
  constructor(private counterService : CounterService, private datePipe:DatePipe,private store:Store<{counter:number}> ){
    console.log("....  in PipesLearningComponent .....");
    this.counter3=counterService.scount; // normal service
    this.counter3$=this.store.select("counter"); // store service
    this.formatDate()
  }
  increment(){
    this.counterService.incrementCounter();
    // no auto change detection, we have to refetch updates
    this.counter3=this.counterService.getCounter();
    this.store.dispatch(increment());
  }
  formatDate(){
    console.log(this.today);
    let td=this.datePipe.transform(this.today, 'medium')
    console.log(td);
  }
}

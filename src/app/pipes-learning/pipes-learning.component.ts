import { Component } from '@angular/core';
import { CounterService } from '../customservices/counter.service';
import { DatePipe } from '@angular/common';
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

  counter3=0;
  constructor(private counterService : CounterService, private datePipe:DatePipe){
    console.log("....  in PipesLearningComponent .....");
    this.counter3=counterService.scount;
    this.formatDate()
  }
  increment(){
    this.counterService.incrementCounter();
    // no auto change detection, we have to refetch updates
    this.counter3=this.counterService.getCounter();
  }
  formatDate(){
    console.log(this.today);
    let td=this.datePipe.transform(this.today, 'medium')
    console.log(td);
  }
}

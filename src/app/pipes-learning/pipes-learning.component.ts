import { Component } from '@angular/core';

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
}

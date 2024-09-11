import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent implements OnChanges {
  @Input()
  cardColor="";
  ngOnChanges(changes: SimpleChanges): void {
 //  console.log("input bindings changed....");
  // console.log(changes);
   
  }
  @Input() // data is coming as input (from parent component)
  employee=new Employee(); // intial values
}

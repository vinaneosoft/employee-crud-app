import { Component } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  employees=[
    new Employee(123,"Kishan Kumar", new Date('12 Dec 2024'), 890000, 'HR', 10, "kishan@gmail.com",'898'),
    new Employee(124,"Hari Thakur", new Date('12 Dec 2024'), 890000, 'HR', 10, "hari@gmail.com",'898'),
    new Employee(124,"Hari Thakur", new Date('12 Dec 2024'), 890000, 'HR', 10, "hari@gmail.com",'898')
  ]
}

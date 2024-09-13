import { Component } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  cardColor='#808080';
  employees=[
    new Employee(123,"Kishan Kumar", Employee.getDateTimeLocal(new Date('12 Dec 2024')), 890000, 'HR', 10, "kishan@gmail.com",'898'),
    new Employee(124,"Hari Thakur", Employee.getDateTimeLocal(new Date('13 Dec 2024')), 890000, 'HR', 10, "hari@gmail.com",'898'),
    new Employee(134,"Manoj Thakur", Employee.getDateTimeLocal(new Date('11 Sept 2021')), 890000, 'HR', 10, "hari@gmail.com",'898')
  ]
}

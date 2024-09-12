import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrl: './employee-input.component.css'
})
export class EmployeeInputComponent {

  departments= ['LD', 'HR','JS', 'PHP', 'JAVA']
}

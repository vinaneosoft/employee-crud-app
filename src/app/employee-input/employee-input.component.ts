import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrl: './employee-input.component.css'
})
export class EmployeeInputComponent {

  departments= ['LD', 'HR','JS', 'PHP', 'JAVA']

  employeeForm:FormGroup;

  constructor(){
    this.employeeForm=new FormGroup({
      _id:new FormControl(/*validation */),
      emp_name:new FormControl(),
      joining_date:new FormControl(),
      emp_salary:new FormControl(),
      dept_code:new FormControl(),
      experience:new FormControl(),
      emp_email:new FormControl(),
      secrete_code:new FormControl(),
      c_secrete_code:new FormControl()
    });
  }

  collectData(){
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);
    //i want data of only id
   // console.log(this.employeeForm.value._id);
   //i want data of only id via FormControl
  }
}

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

}
/** public _id=0,  // id="0" for backend json server
        public emp_name="",
        public joining_date=new Date(),
        public emp_salary =0,
        public dept_code="",
        public experience=0,
        public emp_email="",
        public secrete_code="123",
        public employee_pic:any="" */
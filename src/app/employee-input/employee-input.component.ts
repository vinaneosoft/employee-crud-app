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
/* u can keep getter name and FormControl same or different */
  get _id(){
    return this.employeeForm.get('_id'); // returing FormControl object
  }
  get emp_name(){
    return this.employeeForm.get('emp_name'); // returing FormControl object
  }
  get joining_date(){
    return this.employeeForm.get('joining_date'); // returing FormControl object
  }
  get experience(){
    return this.employeeForm.get('experience'); // returing FormControl object
  }
  get emp_email(){
    return this.employeeForm.get('emp_email'); // returing FormControl object
  }
  get dept_code(){
    return this.employeeForm.get('dept_code'); // returing FormControl object
  }
  get secrete_code(){
    return this.employeeForm.get('secrete_code'); // returing FormControl object
  }  
  get c_secrete_code(){
    return this.employeeForm.get('c_secrete_code'); // returing FormControl object
  }
  collectData(){
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);
    //i want data of only id
    console.log(this.employeeForm.value._id);
    //i want data of only id via FormControl
    //console.log(this.employeeForm.controls._id.value.controls._id.value);
    console.log(this.emp_email?.value);
  }
}

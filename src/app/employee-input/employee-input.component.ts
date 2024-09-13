import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      _id:new FormControl("",[Validators.required]),/*@returns An error map with the required property if the validation check fails, otherwise null. */
      emp_name:new FormControl("",[Validators.required]),
      joining_date:new FormControl("",[Validators.required]),
      emp_salary:new FormControl("",[Validators.required]),
      dept_code:new FormControl("",[Validators.required]),
      experience:new FormControl("",[Validators.required]),
      emp_email:new FormControl("",[Validators.required]),
      secrete_code:new FormControl("",[Validators.required]),
      c_secrete_code:new FormControl("",[Validators.required])
    }, /* */);
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
  test(){
    console.log(this._id?.errors);
  }
}

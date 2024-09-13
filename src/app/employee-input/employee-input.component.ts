import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../customclasses/employee';
import { CustomValidators } from '../customclasses/custom-validators';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrl: './employee-input.component.css'
})
export class EmployeeInputComponent {

  departments= ['LD', 'HR','JS', 'PHP', 'JAVA']

  employeeForm:FormGroup;
  employee =new Employee();
  constructor(){
    this.employeeForm=new FormGroup({
      _id:new FormControl(this.employee._id,Validators.required),/*@returns An error map with the required property if the validation check fails, otherwise null. */
      emp_name:new FormControl(this.employee.emp_name,[Validators.required, Validators.pattern('[A-Za-z ]*'), Validators.minLength(2)]),
      joining_date:new FormControl(this.employee.joining_date,Validators.required),
      emp_salary:new FormControl(this.employee.emp_salary,[Validators.required, Validators.min(0)]),
      dept_code:new FormControl(this.employee.dept_code,Validators.required),
      experience:new FormControl(this.employee.experience,[Validators.required, Validators.min(0), Validators.max(85)]),
      emp_email:new FormControl(this.employee.emp_email,[Validators.required, Validators.email, CustomValidators.mailAccount("gmail")]),
      secrete_code:new FormControl(this.employee.secrete_code,[Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
      c_secrete_code:new FormControl("")
    }, [CustomValidators.valueMatch("secrete_code","c_secrete_code")]); /* CustomValidators.match */
  }
/* u can keep getter name and FormControl same or different */
  get _id(){
    return this.employeeForm.get('_id'); // returing FormControl object
  }
  get emp_name(){
    return this.employeeForm.get('emp_name'); // returing FormControl object
  }
  get emp_salary(){
    return this.employeeForm.get('emp_salary'); // returing FormControl object
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
  // console.log(this.employeeForm);
    console.log(this.employeeForm.value);
    //i want data of only id
    //console.log(this.employeeForm.value._id);
    //i want data of only id via FormControl
    //console.log(this.employeeForm.controls._id.value.controls._id.value);
   // console.log(this.emp_email?.value);
  }
  test(){
    console.log(this.emp_salary?.errors);
  }
}

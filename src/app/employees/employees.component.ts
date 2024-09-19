import { Component, OnInit } from '@angular/core';
import { Employee } from '../customclasses/employee';
import { EmployeeCRUDService } from '../customservices/employee-crud.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  cardColor='#808080';
  employees:Employee[]=[]
  constructor(private empcrud:EmployeeCRUDService){

  }
  ngOnInit(): void {
    this.getEmps();
  }
  getEmps(){
    const obs=this.empcrud.getAllEmployees();
    obs.subscribe({
      next:(emps)=>{
        console.log(emps);
        this.employees=emps;
      },
      error: (err)=>{
        console.log(err); 
        window.alert("something went wrong getting employees...")
      }
    });
  }
}

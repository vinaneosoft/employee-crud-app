import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../customclasses/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {
  url="http://localhost:5000/employees";
  constructor(private http:HttpClient) {

  }
  addEmployee(employee:Employee){
      return this.http.post(this.url+"/add",employee)
  }
}

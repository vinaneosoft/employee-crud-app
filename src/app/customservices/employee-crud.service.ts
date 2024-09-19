import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../customclasses/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {
  url="http://localhost:5000/employees";
  constructor(private http:HttpClient) {

  }
  addEmployee(employee:Employee):Observable<Employee>{
      return this.http.post<Employee>(this.url+"/add",employee)
  }
}

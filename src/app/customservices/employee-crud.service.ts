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
  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url+"/getall")
  }
  deleteEmployeeById(_id:number):Observable<Object>{
    return this.http.delete<Object>(this.url+"/delete/"+_id)
  }
}

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
  updateEmployee(employee:Employee):Observable<Object>{
    return this.http.put<Object>(this.url+"/update/"+employee._id,employee)
}
  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url+"/getall")
  }
  deleteEmployeeById(_id:number):Observable<Object>{
    return this.http.delete<Object>(this.url+"/delete/"+_id)
  }
  getEmployeeById(_id:number):Observable<Employee>{
    return this.http.get<Employee>(this.url+"/get/"+_id)
  }
  getEmployeesByName(emp_name:string):Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url+"/getbyname/"+emp_name)
  }
  uploadEmployeePicture(_id:number, employee_pic:any){
   // console.log(_id);
    //console.log(employee_pic);
    
  }
}

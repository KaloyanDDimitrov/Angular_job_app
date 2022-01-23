import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string="http://10.0.0.101:3000/"
  constructor(private http:HttpClient) { }
  
  listEmployees(){
   return this.http.get(this.baseUrl);
  };
  deleteEmployee(id:string){
    return this.http.delete(this.baseUrl+id)
  };
  viewEmployee(id:string){
    return this.http.get(this.baseUrl+id)
  }
  addUser(employeeObj:any){
    return this.http.post(this.baseUrl, employeeObj);
  }
  updateEmployee(id:any, employeeObj:any){
    return this.http.put(this.baseUrl+id, employeeObj);
  }
}

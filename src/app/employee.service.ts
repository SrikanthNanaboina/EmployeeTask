import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "http://localhost:8888"
  constructor(private http:HttpClient) {}

  getAllEmployee() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/get/employees`)
  }

  saveEmployee(employee: Employee) {
    return this.http.post(`${this.url}/save/employee`,employee)
  }

  updateEmployee(employee: Employee) {
    return this.http.put(`${this.url}/update/employee`,employee)
  }

  deleteEmployee(id:number) {
    return this.http.delete(`${this.url}/delete/employee/${id}`)
  }
}

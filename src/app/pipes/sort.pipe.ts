import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  constructor(private service:EmployeeService){}

  transform(employees: Employee[], column:string, order:string): Observable<Employee[]> {
    if(order=="none") {
      return this.service.getAllEmployee();
    }
    if(order=="asc"){
      if(column=="firstName") {
        employees.sort((e1, e2) => e1.firstName.localeCompare(e2.firstName))
      }
      else if(column=="lastName") {
        employees.sort((e1, e2) => e1.lastName.localeCompare(e2.lastName))
      }
      else if(column=="dateOfBirth") {
        employees.sort((e1, e2) => e1.dateOfBirth.localeCompare(e2.dateOfBirth))
      }
      else if(column=="phoneNumber") {
        employees.sort((e1, e2) => e1.phoneNumber.localeCompare(e2.phoneNumber))
      }
    }
    else{
      if(column=="firstName") {
        employees.sort((e1, e2) => e2.firstName.localeCompare(e1.firstName))
      }
      else if(column=="lastName") {
        employees.sort((e1, e2) => e2.lastName.localeCompare(e1.lastName))
      }
      else if(column=="dateOfBirth") {
        employees.sort((e1, e2) => e2.dateOfBirth.localeCompare(e1.dateOfBirth))
      }
      else if(column=="phoneNumber") {
        employees.sort((e1, e2) => e2.phoneNumber.localeCompare(e1.phoneNumber))
      }
    }
    return of( employees);
  }

}

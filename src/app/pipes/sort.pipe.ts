import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(employees: Employee[], column:string):Employee[] {
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
    return employees;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: Employee[], searchTerm:string, searchBy:string):Employee[]  {
    if(searchTerm=="") return employees;
    return [...employees.filter(e=>e[searchBy as keyof Employee]?.toString().toLowerCase().match(searchTerm.toLowerCase()))];
  }

}

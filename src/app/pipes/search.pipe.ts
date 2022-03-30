import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Employee } from '../employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: Observable<Employee[]>, searchTerm:string, searchBy:string):Observable<Employee[]>  {
    if(searchTerm=="") return employees;
    return employees.pipe(
      map(emps=>emps.filter(e=>e[searchBy as keyof Employee]?.toString().toLowerCase().match(searchTerm.toLowerCase())))
      );
  }

}

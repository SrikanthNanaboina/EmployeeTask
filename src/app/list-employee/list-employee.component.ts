import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  searchTerm:string="";
  searchBy:string="firstName";
  sortColumn:string="firstName";
  employeeList:Employee[]=[];
  constructor(private service:EmployeeService, private router: Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.service.getAllEmployee().subscribe(res=> this.employeeList=res);
  }
  deleteEmployee(id?:number){
    if(!id) return;
    this.service.deleteEmployee(id).subscribe();
    this.employeeList = [...this.employeeList.filter(e=>e.id!=id)];
  }
  editEmployee(employee:Employee){
    this.router.navigate(['update',employee]);
  }
  sort(column:string){
    this.sortColumn=column;
  }
}

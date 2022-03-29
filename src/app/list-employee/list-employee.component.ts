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
  sortOrder: string="none";
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
    if(this.employeeList.filter((e)=>e.id==id).length==0){
      console.log("Invalid Id");
      return;
    }
    this.service.deleteEmployee(id).subscribe(res=>alert("Deleted successfully"),err=>console.log(err));
    this.employeeList = [...this.employeeList.filter(e=>e.id!=id)];
  }
  editEmployee(employee:Employee){
    this.router.navigate(['update',{id:employee.id}]);
  }
  sort(column:string){
    if(this.sortColumn!=column){
      this.sortColumn=column;
      this.sortOrder="asc"
    }
    else{
      if(this.sortOrder=="none")
        this.sortOrder="asc";
      else if(this.sortOrder=="asc")
        this.sortOrder="desc";
      else if(this.sortOrder=="desc")
        this.sortOrder="none";
    }
  }
  search(searchTerm:HTMLInputElement){
    this.searchTerm=searchTerm.value
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateAge } from '../age.validator';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id=0;
  editForm = new FormGroup({
    id:new FormControl(),
    firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']+$")]),
    lastName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']+$")]),
    designation: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required, ValidateAge]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']+$")]),
    country: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']+$")],)
  });
  constructor(private service:EmployeeService, private router:Router, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let employee: Employee;
       this.service.getEmployee(params['id']).subscribe(
         res=>employee=res,
         err=>console.log(err),
         ()=>this.editForm.patchValue(employee));
    });
  }
  onFormSubmit(){
    this.updateEmployee()
  }
  get form(): { [key: string]: AbstractControl; }{
      return this.editForm.controls;
  }

  updateEmployee(){
    let employee:Employee = this.editForm.value;
    employee.id=this.id;
    this.service.updateEmployee(employee).subscribe(
      res=>{},
      (err)=>alert("Something went wrong"),
      ()=>{this.router.navigateByUrl('/employee-table')}
      );
  }
}

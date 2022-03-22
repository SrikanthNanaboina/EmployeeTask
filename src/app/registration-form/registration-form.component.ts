import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateAge } from '../age.validator';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  employeeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']+$")]),
    lastName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']+$")]),
    designation: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required, ValidateAge]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^\\+[1-9]{1}[0-9]{3,14}$")]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']+$")]),
    country: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z ']+$")],)
  });
  constructor(private service:EmployeeService, private router:Router, private route:ActivatedRoute ) { }
  ngOnInit(): void {
      
  }

  onFormSubmit(){
    this.postEmployee()
  }
  get form(): { [key: string]: AbstractControl; }{
      return this.employeeForm.controls;
  }

  postEmployee(){
    let employee:Employee = this.employeeForm.value;
    employee.id=Date.now();
    this.service.saveEmployee(employee).subscribe(
      res=>{},
      (err)=>alert("Something went wrong"),
      ()=>{this.router.navigateByUrl('/employee-table')}
      );
  }
}

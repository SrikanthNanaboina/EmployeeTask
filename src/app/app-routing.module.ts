import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';


const routes: Routes = [
  {path:"register", component:RegistrationFormComponent},
  {path:"employee-table", component:ListEmployeeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

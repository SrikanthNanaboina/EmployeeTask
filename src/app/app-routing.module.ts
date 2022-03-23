import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';


const routes: Routes = [
  {path:"register", component:RegistrationFormComponent},
  {path:"employee-table", component:ListEmployeeComponent},
  {path:"update", component:EditEmployeeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationFormComponent,
    ListEmployeeComponent,
    SearchPipe,
    SortPipe,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

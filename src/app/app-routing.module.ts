import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';

const routes: Routes = [
  {path: 'create',component:AddEmployeeComponent},
  {path: 'view/:id', component:ViewEmployeeComponent},
  {path: '', component:ListEmployeesComponent},
  {path: 'delete/:id', component:DeleteEmployeeComponent},
  {path: 'edit/:id', component:EditEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  listEmployees:any;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.listEmployees().subscribe(data=>{
      this.listEmployees = data;
    });

  }

}

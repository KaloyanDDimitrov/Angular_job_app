import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employeeId:string=""
  constructor(private activatedRoute: ActivatedRoute,private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.employeeId=data['id']
     
    });
    if(this.employeeId){
      if(confirm(`Do you want to delete employee ${this.employeeId}!`)==true){
        this.employeeService.deleteEmployee(this.employeeId).subscribe(data=>{
          this.router.navigate(['/']);
        },err=>{
          return err
        })
      }else{
        this.router.navigate(['/']);
      }
      
      
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmmployeeForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private emplyeeService:EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.addEmmployeeForm=this.formBuilder.group({
      'firstName':new FormControl(''),
      'secondName': new FormControl(''),
      'age':new FormControl(''),
      'position': new FormControl('')
    })
  }
 
  createEmployee(){
    if(this.addEmmployeeForm.value["firstName"]==''||this.addEmmployeeForm.value["secondName"]==''||this.addEmmployeeForm.value["age"]==''||this.addEmmployeeForm.value["position"]==''){
     
      return alert(`Please fill out all the fields.`)
    }
    if(this.addEmmployeeForm.value["age"]< 0){
      return alert(`Please input a positive age.`)
    }else{this.emplyeeService.addUser(this.addEmmployeeForm.value).subscribe(data=>{
      alert("Employee was created !")
       this.router.navigate(['/']);
      }, err=>{
        return console.log(err)
      })}


    
  }

  

}

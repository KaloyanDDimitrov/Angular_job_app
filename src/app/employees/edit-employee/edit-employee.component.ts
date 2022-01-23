import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeId:string=""
  employeeData:any;
  editEmployeeForm:FormGroup= new FormGroup({});
  dataLoaded:boolean=false;

  constructor(private activatedRoute: ActivatedRoute,private employeeService:EmployeeService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.employeeId=data['id']
    })

    if(this.employeeId!==''){
      this.employeeService.viewEmployee(this.employeeId).toPromise().then(data=>{
//Get Emplyee Data
        this.employeeData=data;
        //Object.assign(this.employeeData,data);
        

        //Build edit form
        
        this.editEmployeeForm= this.formBuilder.group({
          'firstName':new FormControl(this.employeeData.firstName),
          'secondName': new FormControl(this.employeeData.secondName),
          'age':new FormControl(this.employeeData.age),
          'position': new FormControl(this.employeeData.position)
        })

        this.dataLoaded=true;
      }).catch(err=>{
        return console.log(err)
      })
    };
  }
  updateEmployee(){
    if(this.editEmployeeForm.value["firstName"]==''||this.editEmployeeForm.value["secondName"]==''||this.editEmployeeForm.value["age"]==''||this.editEmployeeForm.value["position"]==''){
     
      return alert(`Please fill out all the fields.`)
    }
    if(this.editEmployeeForm.value["age"]< 0){
      return alert(`Please input a positive age.`)
    }else{
    if(confirm(`Do you want to update employee ${this.employeeId}!`)==true){
      this.employeeService.updateEmployee(this.employeeId,this.editEmployeeForm.value).subscribe(data=>{
        alert(`Employee ${this.employeeId} was updated`)
       
         this.router.navigate(['/']);
        }, err=>{
          return console.log(err)
        })


    }else{
      return
    }
  }
    
  }

}

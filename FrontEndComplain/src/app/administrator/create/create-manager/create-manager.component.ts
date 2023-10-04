import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent implements OnInit{
  manager: FormGroup = this.fb.group({
    name: ['', Validators.required],
    mobile: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private router:Router,private managerService:ManagerService){}

  ngOnInit(): void {
    let data = sessionStorage.getItem('user');
    if(data ==null || data ==undefined){
      this.router.navigate(['/login']);
    }else if(data!='admin'){
      alert("You don't have a access to create.. please contact admin");
      this.router.navigate(['/login']);
    }
  }

  onSubmit(){
    this.managerService.createManager(this.manager.value).subscribe(data=>{
      alert("Manager Account Created Successfully");
      this.manager.reset();
    });
  }
  
}

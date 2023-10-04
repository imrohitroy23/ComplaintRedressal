import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit{
  manager:FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private router:Router,private managerService:ManagerService,private route:ActivatedRoute){}

  ngOnInit(): void {
    let data = sessionStorage.getItem('user');
    if(data ==null || data ==undefined){
      this.router.navigate(['/login']);
    }else if(data!='admin'){
      alert("You don't have a access to create.. please contact admin");
      this.router.navigate(['/login']);
    }

    let manager:any;
    const managerString = this.route.snapshot.queryParamMap.get('manager');
    if(managerString)
    manager = JSON.parse(managerString);
    console.log(manager.id);

    this.manager=this.fb.group({
      id:[manager.id],
      name: [manager.name, Validators.required],
      mobile: [manager.mobile, Validators.required],
      email: [manager.email, [Validators.required, Validators.email]],
      password: [manager.password, Validators.required]
    });
  }

  onSubmit(){
    this.managerService.updateManager(this.manager.value).subscribe(data=>{
      alert("Manager Account Updated Successfully");
      this.manager.reset();
    });
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-update-engineer',
  templateUrl: './update-engineer.component.html',
  styleUrls: ['./update-engineer.component.css']
})
export class UpdateEngineerComponent implements OnInit{

  
  engineer:FormGroup= new FormGroup({});
  constructor(private fb: FormBuilder,private router:Router,private engineerService:EngineerService,private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    let data = sessionStorage.getItem('user');
    if(data ==null || data ==undefined){
      this.router.navigate(['/login']);
    }else if(data!='admin'){
      alert("You don't have a access to create.. please contact admin");
      this.router.navigate(['/login']);
    }

    let engineer:any;
    const engineerString = this.route.snapshot.queryParamMap.get('engineer');
    if(engineerString)
    engineer = JSON.parse(engineerString);
    console.log(engineer);

    this.engineer= this.fb.group({
      id:[engineer.id],
      name: [engineer.name, Validators.required],
      mobile: [engineer.mobile, Validators.required],
      email: [engineer.email, Validators.required],
      password: [engineer.password, Validators.required],
      pincodes: this.fb.array(engineer.pincodes)
    });
  }

  get pincodes() {
    return this.engineer.get('pincodes') as FormArray;
  }

  addPincode() {
    this.pincodes.push(new FormControl('', Validators.required));
  }

  removePincode(index: number) {
    this.pincodes.removeAt(index);
  }

  onSubmit() {
    if(this.engineer.invalid){
      return;
    }
    console.log(this.engineer.value);
    
    this.engineerService.updateEngineer(this.engineer.value).subscribe(data => {
      console.log(data);
      alert("Engineer Updated")
    });
    this.engineer.reset();
  }
}

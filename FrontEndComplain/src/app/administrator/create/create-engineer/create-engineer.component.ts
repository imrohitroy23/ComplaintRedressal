import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-create-engineer',
  templateUrl: './create-engineer.component.html',
  styleUrls: ['./create-engineer.component.css']
})
export class CreateEngineerComponent implements OnInit{

  engineer: FormGroup = this.fb.group({
    name: ['', Validators.required],
    mobile: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    pincodes: this.fb.array([])
  });

  constructor(private fb: FormBuilder,private router:Router,private engineerService:EngineerService) {
    this.addPincode();
   }

  ngOnInit(): void {
    let data = sessionStorage.getItem('user');
    if(data ==null || data ==undefined){
      this.router.navigate(['/login']);
    }else if(data!='admin'){
      alert("You don't have a access to create.. please contact admin");
      this.router.navigate(['/login']);
    }
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
    this.engineerService.createEngineer(this.engineer.value).subscribe(data => {
      console.log(data);
      alert("Engineer Created")
    });
    this.engineer.reset();
  }
}

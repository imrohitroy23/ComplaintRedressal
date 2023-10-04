import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministratorService } from 'src/app/services/administrator.service';
import { State, City } from 'country-state-city';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: FormGroup= new FormGroup({});
  states:any;
  cities:any;

  constructor(private fb: FormBuilder, private router: Router,private adminService:AdministratorService,private customerService:CustomerService) {}

  ngOnInit() {

    let data = sessionStorage.getItem('user');
    if(data ==null || data ==undefined){
      this.router.navigate(['/login']);
    }else if(data!='admin'){
      alert("You don't have a access to create.. please contact admin");
      this.router.navigate(['/login']);
    }

    this.states =  State.getStatesOfCountry('IN');  

    this.customer = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobileService:[true],
      landLineService:[false],
      broadbandService:[false],
      address:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      pincode:['',Validators.required]
    });
  }

  getCities(event:any) {
    const currentState = this.states.find((state: { name: string; }) => state.name === event.target.value);
    this.cities=City.getCitiesOfState('IN',currentState.isoCode);  
    console.log(this.cities);
    
  }

  onSubmit() {
    if(this.customer.invalid){
      return;
    }
    this.customerService.createCustomer(this.customer.value).subscribe(data => {
      console.log(data);
      alert("Customer Created")
    });
    this.customer.reset();
  }
}

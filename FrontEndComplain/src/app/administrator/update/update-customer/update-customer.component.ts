import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City, State } from 'country-state-city';
import { AdministratorService } from 'src/app/services/administrator.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer: FormGroup= new FormGroup({});
  states:any;
  cities:any;
  currentState:string='';
  currentCity:string='';


  constructor(private fb: FormBuilder, private router: Router,private adminService:AdministratorService,private customerService:CustomerService,private route: ActivatedRoute) {}

  ngOnInit() {
    let cust:any;
    const customerString = this.route.snapshot.queryParamMap.get('customer');
    if(customerString)
      cust = JSON.parse(customerString);
    console.log(cust);

    let data = sessionStorage.getItem('user');
    if(data ==null || data ==undefined){
      this.router.navigate(['/login']);
    }else if(data!='admin'){
      alert("You don't have a access to create.. please contact admin");
      this.router.navigate(['/login']);
    }

    this.states =  State.getStatesOfCountry('IN');  

    this.customer = this.fb.group({
      id:[cust.id],
      name: [cust.name, Validators.required],
      mobile: [cust.mobile, Validators.required],
      email: [cust.email, Validators.required],
      password: [cust.password, Validators.required],
      mobileService: [cust.mobileService === 'true'],
      landLineService: [cust.landLineService === 'true'],
      broadbandService: [cust.broadbandService === 'true'],
      address: [cust.address, Validators.required],
      state: [, Validators.required],
      city: [cust.city, Validators.required],
      pincode: [cust.pincode, Validators.required]
    });

    this.currentState=cust.state;
    this.currentCity= cust.city;
    const currentState = this.states.find((state: { name: string; }) => state.name === cust.state);
    this.cities=City.getCitiesOfState('IN',currentState.isoCode); 
    console.log(this.cities);
    
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
    this.customerService.updateCustomer(this.customer.value).subscribe(data => {
      console.log(data);
      alert("Customer Updated")
    });
    this.customer.reset();
  }
}

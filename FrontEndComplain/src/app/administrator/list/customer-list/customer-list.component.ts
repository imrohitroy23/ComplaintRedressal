import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministratorService } from 'src/app/services/administrator.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{

  customers:any;

  constructor(private router: Router,private adminService:AdministratorService,private customerService:CustomerService) {}

  ngOnInit() {
    this.customerService.getAll().subscribe(data=>{
      this.customers=data;
    });
  }

  updateform(cust:any){
    this.router.navigate(['/admin/update/customer'],{ queryParams: { customer:JSON.stringify(cust) } });
  }

  deleteForm(id:string){
    if (confirm("Are you sure you want to delete this ?")) {
    this.customerService.deleteCustomer(id).subscribe(data=>{
      alert("Success");
      this.customerService.getAll().subscribe(data=>{
        this.customers=data;
      });
    });
  }
  }
}

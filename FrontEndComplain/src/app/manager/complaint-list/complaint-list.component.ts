import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent {

  complaints:any;
  constructor(private complaintService:ComplaintService,private router:Router){}

  ngOnInit(): void {
      let mid = sessionStorage.getItem('user');
      if(mid =='' || mid==null){
        this.router.navigate(['/login']);
      }else{
        this.complaintService.getAllComplaints("RAISED").subscribe(data=>{
          this.complaints=data;
        });
      }      
  }

  getrecords(selectedStatus:any){
    this.complaintService.getAllComplaints(selectedStatus.target.value).subscribe(data=>{
      this.complaints=data;
    });
  }
}

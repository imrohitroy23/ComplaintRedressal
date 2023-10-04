import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  complaints:any;
  id:string='';
  constructor(private complaintService:ComplaintService,private router:Router){}

  ngOnInit(): void {
      let mid = sessionStorage.getItem('user');
      if(mid =='' || mid==null){
        this.router.navigate(['/login']);
      }else{
        this.id=mid;
        this.complaintService.getAllComplaintsByEngineer("ASSIGNED",this.id).subscribe(data=>{
          this.complaints=data;
        });
      }      
  }

  getrecords(selectedStatus:any){
    this.complaintService.getAllComplaintsByEngineer(selectedStatus.target.value,this.id).subscribe((data: any)=>{
      this.complaints=data;
    });
  }
}

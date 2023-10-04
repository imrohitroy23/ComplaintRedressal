import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css']
})
export class ViewComplaintsComponent implements OnInit{

  complaints:any;
  constructor(private complaintService:ComplaintService,private router:Router){}

  ngOnInit(): void {
      let cid = sessionStorage.getItem('user');
      if(cid =='' || cid==null){
        this.router.navigate(['/login']);
      }else{
        this.complaintService.getComplaints("ASSIGNED",cid).subscribe(data=>{
          this.complaints=data;        
        });
      }      
  }

  getrecords(selectedStatus:any){
    let cid = sessionStorage.getItem('user');
    if(cid =='' || cid==null){
      this.router.navigate(['/login']);
    }else{
      this.complaintService.getComplaints(selectedStatus.target.value,cid).subscribe(data=>{
        this.complaints=data;        
      });
    }      
  }
}

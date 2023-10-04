import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-assign-complaint',
  templateUrl: './assign-complaint.component.html',
  styleUrls: ['./assign-complaint.component.css']
})
export class AssignComplaintComponent implements OnInit{

  complaint:any;
  engineer:any;
  eid:string='';
  prevEngineer:string='';

  constructor(private complaintService:ComplaintService, private router:Router,private route:ActivatedRoute,private engineerService:EngineerService){}

  ngOnInit(): void {
    let mid = sessionStorage.getItem('user');
    if(mid =='' || mid==null){
      this.router.navigate(['/login']);
    }else{
      this.route.queryParams.subscribe(
        params => {
          let id = params['id'];
          this.complaintService.getComplaintById(id).subscribe(data=>{
            this.complaint=data;
            console.log(this.complaint);    
            this.engineerService.getByPincode(this.complaint.pincode).subscribe((data: any)=>{
                  this.engineer=data;
                  this.checkEngineer();
                }); 
          });
        }
      );
    }    
  }

  getEngineer(event:any){
     this.complaint.eid=event.target.value;
  }

  onSubmit(){
    console.log(this.complaint);
    if(this.complaint.eid==''|| this.complaint.eid==null || this.complaint.eid==undefined){
      alert("please select Engineer");
      return;
    }else{
      this.complaint.status="ASSIGNED";
      this.complaintService.updateComplaint(this.complaint).subscribe(data => {
        this.checkEngineer();
       alert("Success");
      });
    }
  }
  
  checkEngineer(){
    if(this.complaint.eid!=''|| this.complaint.eid!=null || this.complaint.eid!=undefined){
      for(let e of this.engineer){
        if(e.id==this.complaint.eid){
          this.eid=e.eid;
          this.prevEngineer = e.name;
        }
      }
  }
  
  this.route.queryParams.subscribe(
    params => {
      let id = params['id'];
      this.complaintService.getComplaintById(id).subscribe(data=>{
        this.complaint=data;
      })});
  }
}

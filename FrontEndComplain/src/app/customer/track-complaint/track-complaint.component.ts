import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-track-complaint',
  templateUrl: './track-complaint.component.html',
  styleUrls: ['./track-complaint.component.css']
})
export class TrackComplaintComponent implements OnInit {
  complaint:any;  
  feedbackDetails:any;

  feedbackFrom: FormGroup = this.fb.group({
    feedback: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,private complaintService:ComplaintService,private router:Router,private route: ActivatedRoute){}

  ngOnInit(): void {
      let cid = sessionStorage.getItem('user');
      if(cid =='' || cid==null){
        this.router.navigate(['/login']);
      }else{
        this.route.queryParams.subscribe(
          params => {
            let id = params['id'];
            this.complaintService.getComplaintById(id).subscribe(data=>{
              this.complaint=data;
              console.log(this.complaint);     
            });
          }
        )
      }    
      this.feedbackDetails=[{
        msg:"hje"
      },{
        msg:"adasd"
      }];  
  }

  onSubmit(){

  }
  
}
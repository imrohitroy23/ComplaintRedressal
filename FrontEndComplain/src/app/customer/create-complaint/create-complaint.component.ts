import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent implements OnInit{
  problemList:string[]=[];

  complaint:FormGroup= new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router,private complaintService:ComplaintService) {}

  
  ngOnInit(): void {
    this.complaint= this.fb.group({
      name:['',Validators.required],
      mobile:['',Validators.required],
      address:['',Validators.required],
      pincode:['',Validators.required],
      connectionType:['',Validators.required],
      problem:['',Validators.required],
      details:['',Validators.required],
      ticketNo:['TCN-'+Math.floor(Math.random() * 100000000)],
      cid:[sessionStorage.getItem('user')]
    });

    let user = sessionStorage.getItem('user');
    let role = sessionStorage.getItem('role');

    if(role!='customer'){
      this.router.navigate(['/login']);
    }
    
  }

  getProblems(event:any){
    if(event.target.value=='broadBand'){
      this.problemList =['Slow Speed','Internet not working','BroadBand Connection not working','other'];
    }else{
      this.problemList=['cannot make a call, but receive a call','can make calls, but cannot receive calls','neither make nor receive calls','other']
    }
  }
  onSubmit(){
    this.complaintService.saveComplaint(this.complaint.value).subscribe(data => {
      console.log(data);
      alert("Ticket Created with "+this.complaint.value.ticketNo)
    });
    this.complaint.reset();
  }
}

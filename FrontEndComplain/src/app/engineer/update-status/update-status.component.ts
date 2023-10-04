import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/services/complaint.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {

  complaint: any;
  statusArray: string[] = [];
  feedback: string = '';
  cid:string=''
  feedbackList: any;
  constructor(private route: ActivatedRoute, private complaintService: ComplaintService, private feedbackService: FeedbackService,private router:Router) { }

  ngOnInit(): void {
    this.updateData();
    this.getFeedbacks();
  }

  setStatus(event: any) {
    this.complaint.status = event.target.value;
  }

  onSubmit() {
    if (this.complaint.status == '' || this.complaint.status == null || this.complaint.status == undefined) {
      alert("please select proper value");
      return;
    } else if (this.complaint.status != "ASSIGNED" && this.complaint.status != "WIP" && this.feedback == '' || this.feedback == null || this.feedback == undefined) {
      alert("Feedback is required");
      return;
    }
    else {

      if (this.complaint.status == "ASSIGNED" || this.complaint.status == "WIP"){
        this.complaintService.updateComplaint(this.complaint).subscribe(data => {
          this.updateData();
          alert("Success");
          this.router.navigate(['/engineer/complaints']);
        });
      }
      else{
        let feedback = {
          cid: this.complaint.id,
          role: sessionStorage.getItem('role'),
          feedback: this.feedback
        }
        this.feedbackService.saveFeedback(feedback).subscribe(data => {
          this.complaintService.updateComplaint(this.complaint).subscribe(data => {
            this.updateData();
            this.getFeedbacks();
            alert("Success");
            this.router.navigate(['/engineer/complaints']);
          });
        });
      }
    }
  }

  updateData() {
    this.route.queryParams.subscribe(
      params => {
        let id = params['id'];
        this.cid=id;
        this.complaintService.getComplaintById(id).subscribe(data => {
          this.complaint = data;
          if (this.complaint.status == 'ASSIGNED') {
            this.statusArray = ["ASSIGNED", "WIP", "RESOLVED", "ESCALATED"];
          }
          if (this.complaint.status == 'WIP') {
            this.statusArray = ["WIP", "RESOLVED", "ESCALATED"];
          }
          if (this.complaint.status == 'RESOLVED') {
            this.statusArray = ["RESOLVED"];
          }
          if (this.complaint.status == 'ESCALATED') {
            this.statusArray = ["ESCALATED"];
          }
        })
      });
  }

  getFeedbacks(){
    this.route.queryParams.subscribe(
      params => {
        let id = params['id'];
        this.cid=id;
        this.feedbackService.getFeedbacks(id).subscribe(data=>{
          this.feedbackList=data;
          console.log(this.feedbackList);
        });
      }
    )
  }

}

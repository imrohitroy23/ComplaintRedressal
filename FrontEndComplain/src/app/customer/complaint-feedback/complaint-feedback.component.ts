import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-complaint-feedback',
  templateUrl: './complaint-feedback.component.html',
  styleUrls: ['./complaint-feedback.component.css']
})
export class ComplaintFeedbackComponent implements OnInit {

  feedbackMsg: string = '';
  feedbackList: any;
  cid:string='';

  constructor(private feedbackService: FeedbackService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  submitFeedback() {
    console.log(this.feedbackMsg);
    let feedback = {
      cid: this.cid,
      role: sessionStorage.getItem('role'),
      feedback: this.feedbackMsg
    }

    this.feedbackService.saveFeedback(feedback).subscribe(data => {
      this.getFeedbacks();
      alert("Feedback sent successfully");
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

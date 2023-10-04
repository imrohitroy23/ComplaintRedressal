import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../services/complaint.service';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit{

  feedbackList: any;
  constructor(private route: ActivatedRoute, private complaintService: ComplaintService, private feedbackService: FeedbackService,private router:Router) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        let id = params['id'];
        this.feedbackService.getFeedbacks(id).subscribe(data=>{
          this.feedbackList=data;
          console.log(this.feedbackList);
        });
      }
    )
  }
}

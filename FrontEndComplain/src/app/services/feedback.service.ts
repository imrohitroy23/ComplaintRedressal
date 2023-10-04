import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
  rootUrl:string="http://localhost:8090/abc-telecom/feedback"

  saveFeedback(feedback:object):Observable<any>{    
    return this.http.post(this.rootUrl+'/save',feedback,{responseType:'text'});
  }

  getFeedbacks(cid:string):Observable<any>{
    return this.http.get(this.rootUrl+'/getFeedbacks?cid='+cid);
  }
}

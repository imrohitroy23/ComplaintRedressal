import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rootUrl:string="http://localhost:8090/abc-telecom"
  constructor(private http :HttpClient) { }

  login(data:object):Observable<any>{
    return this.http.post(this.rootUrl+'/login',data,{responseType:'text'});
  }
}

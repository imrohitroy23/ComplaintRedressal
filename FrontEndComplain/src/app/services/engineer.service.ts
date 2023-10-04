import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {
  constructor(private http:HttpClient) { }
  rootUrl:string="http://localhost:8090/abc-telecom/engineer"

  createEngineer(engineer:object):Observable<any>{
    return this.http.post(this.rootUrl+'/create',engineer,{responseType:'text'});
  }

  getByPincode(pinCode:string):Observable<any>{
    return this.http.get(this.rootUrl+'/getByPincode?pinCode='+pinCode);
  }
  
  getAll():Observable<any>{
    return this.http.get(this.rootUrl+'/getAll');
  }

  deleteEngineer(id:string):Observable<any>{
    return this.http.delete(this.rootUrl+'/delete?id='+id,{responseType:'text'});
  }

  
  updateEngineer(engineer:object):Observable<any>{
    console.log(engineer);
    return this.http.post(this.rootUrl+'/update',engineer,{responseType:'text'});
  }

}

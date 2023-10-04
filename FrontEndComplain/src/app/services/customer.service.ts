import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http:HttpClient) { }
  rootUrl:string="http://localhost:8090/abc-telecom/customer"

  createCustomer(customer:object):Observable<any>{
    return this.http.post(this.rootUrl+'/create',customer,{responseType:'text'});
  }

  saveComplaint(complaint:object){    
    return this.http.post(this.rootUrl+'/complaint',complaint,{responseType:'text'});
  }

  getAll():Observable<any>{
    return this.http.get(this.rootUrl+'/getAll');
  }

  deleteCustomer(id:string):Observable<any>{
    return this.http.delete(this.rootUrl+'/delete?id='+id,{responseType:'text'});
  }

  updateCustomer(customer:object):Observable<any>{
    console.log(customer);
    
    return this.http.post(this.rootUrl+'/update',customer,{responseType:'text'});
  }
}

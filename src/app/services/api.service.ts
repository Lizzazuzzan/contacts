import { Injectable } from '@angular/core';   
import { HttpClient } from  '@angular/common/http';
// import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
// import { Observable } from 'rxjs/Observable';  
// import 'rxjs/add/operator/map';  
// import 'rxjs/add/operator/do';  
var baseURL = "http://localhost:3000" 

@Injectable()  
export class ApiService {  
  
  
  constructor(private http:HttpClient) { }  
  
sendContact(contacts){
      return this.http.post(baseURL+'/contact',contacts)
  }
  
getContactInfo(){      
     return this.http.get(baseURL+'/contact')  
               
  }  
  


}
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import  'rxjs/add/operator/map';
import  'rxjs/add/operator/toPromise';
// import {Details} from './models/client';


@Injectable({
  providedIn: 'root'
})
export class FitnessService {
 

  constructor(private http: HttpClient) { }

   register(body:any){
   return this.http.post('http://localhost:3000/client/register',body,{
     observe:'body',
     headers: new HttpHeaders().append('Content-Type', 'application/json')
   });
   }
  
  }
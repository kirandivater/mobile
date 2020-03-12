import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpDetails } from 'src/app/_Model/EmpDetails/emp-details';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class EmpDetailsService{

  constructor(private http: HttpClient) { }
  InsertEmpDetails(empdetails:EmpDetails) {
    return this.http.post(Url.WebApiUrl + WebApiPages.InsertEmpDetails, empdetails);
  }
}
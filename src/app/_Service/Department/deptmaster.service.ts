import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class DeptmasterService {

  constructor(private http: HttpClient) { }

  GetDeptMasterDetails() {
      return this.http.get(Url.WebApiUrl + WebApiPages. GetDeptMasterDetails);
    }
  }
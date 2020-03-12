import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EngineerDetails } from 'src/app/_Model/EngineerDetails/engineer-details';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
  export class EngineerDetailsService{
    constructor(private http: HttpClient) { }

    InsertEngDetails(engineerdetails:EngineerDetails) {
      return this.http.post(Url.WebApiUrl + WebApiPages.InsertEngineerDetails, engineerdetails);
    }
  }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  GetAllMastersDetailsUsingName(Id) {
    return this.http.get(Url.WebApiUrl + WebApiPages.GetAllMastersDetailsUsingName + '?Id_=' + Id);
  }

  GetAllMastersName() {
    return this.http.get(Url.WebApiUrl + WebApiPages.GetAllMastersName);
  }
}

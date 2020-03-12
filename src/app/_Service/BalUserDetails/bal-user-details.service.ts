import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BalUserDetails } from 'src/app/_Model/BalUserDetails/bal-user-details';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class BalUserDetailsService {

  constructor(private http: HttpClient) { }

  InsertBalUserDetailsMaster(bal: BalUserDetails) {
    return this.http.post(Url.WebApiUrl + WebApiPages.InsertBalUserDetailsMaster, bal);
  }
}

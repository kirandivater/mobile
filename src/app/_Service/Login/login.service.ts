import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/_Model/Login/login';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  InsertLoginDetails(loginModel: Login){
    return this.http.post(Url.WebApiUrl + WebApiPages.InsertLoginMaster, loginModel);
  }

  CheckLoginDetails(loginModel: Login) {
    return this.http.post(Url.WebApiUrl + WebApiPages.GetLoginDetails, loginModel);
  }

}

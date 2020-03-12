import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Url } from 'src/app/_Model/url';
import { Register } from 'src/app/_Model/Register/register';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  InsertRegisterDetails(register: Register) {
    return this.http.post(Url.WebApiUrl + WebApiPages.InsertRegister, register);
  }
}

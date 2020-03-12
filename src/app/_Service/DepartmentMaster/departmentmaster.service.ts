import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';
import { Departmentmaster } from 'src/app/_Model/DepartmentMaster/departmentmaster';

@Injectable({
  providedIn: 'root'
})
export class DepartmentmasterService {
  DeptMasterId_: number;

  constructor(private http: HttpClient) { }
  InsertDepMaster(departmentmaster:Departmentmaster) {
    return this.http.post(Url.WebApiUrl + WebApiPages.InsertDepMaster, departmentmaster);
  }
  UpdateDepMaster(departmentmaster:Departmentmaster) {
    return this.http.patch(Url.WebApiUrl + WebApiPages.UpdateDepMaster, departmentmaster);
  }
  DeleteDepMaster(departmentmaster:Departmentmaster) {
    return this.http.patch(Url.WebApiUrl + WebApiPages.DeleteDepMaster, departmentmaster);
  }
}
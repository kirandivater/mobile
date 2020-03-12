import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) { }
  
  GetPlantMasterDetails() {
    return this.http.get(Url.WebApiUrl + WebApiPages.GetPlantMasterDetails);
  }

  GetPlantDeptNameList() {
    return this.http.get(Url.WebApiUrl + WebApiPages.GetPlantDeptNameList);
  }
}
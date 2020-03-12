import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plantmaster } from 'src/app/_Model/_PlantMaster/plantmaster';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class PlantmasterService {

  constructor(private http: HttpClient) { }

  InsertPlantMaster(PlantmasterModel: Plantmaster) {
    return this.http.post(Url.WebApiUrl + WebApiPages.InsertPlantMaster, PlantmasterModel);
  }
  UpdatePlantMaster(PlantmasterModel: Plantmaster) {
    return this.http.patch(Url.WebApiUrl + WebApiPages.UpdatePlantMaster, PlantmasterModel);
  }
  DeletePlantMaster(PlantmasterModel:Plantmaster) {
    return this.http.patch(Url.WebApiUrl + WebApiPages.DeletePlantMaster ,PlantmasterModel);
  }
}

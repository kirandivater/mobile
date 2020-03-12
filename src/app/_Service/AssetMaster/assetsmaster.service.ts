import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Assetsmaster } from 'src/app/_Model/AssetMaster/assetsmaster';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';



@Injectable({
  providedIn: 'root'
})
export class AssetsmasterService {

  constructor(private http:HttpClient) { }
  InsertAssetsMaster(Assetsmastercls:Assetsmaster)
  {
    return this.http.post(Url.WebApiUrl+ WebApiPages.InsertAssetsMaster, Assetsmastercls);
  }
}

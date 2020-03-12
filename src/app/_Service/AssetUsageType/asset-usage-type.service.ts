import { Injectable } from '@angular/core';
import { AssetUsageModel } from 'src/app/_Model/AssetUsageType/asset-usage-typeModel';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class AssetUsageTypeService {
  constructor(private http: HttpClient) { }

  InsertAssetType(assetType: AssetUsageModel) {
    return this.http.post(Url.WebApiUrl + WebApiPages.InsertAssetsUsageType, assetType);
   }

   GetAssetUsageType() {
    return this.http.get(Url.WebApiUrl + WebApiPages.GetAssetsUsageTypeMaster);
   }

 // InsertAssetType(assetType: AssetUsageModel) {
   // return this.http.post('http://localhost:80/api/InsertAssetsUsageTypeMaster.php', assetType);
  }



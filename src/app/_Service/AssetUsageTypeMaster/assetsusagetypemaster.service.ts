import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

import { Assetusagetypemaster } from 'src/app/_Model/AssetUsageTypeMaster/assetusagetypemaster';

@Injectable({
  providedIn: 'root'
})
export class AssetsusagetypemasterService {

  constructor(private http: HttpClient) { }
    UpdateAssetUsageTypeMaster(assetusagetypemaster:Assetusagetypemaster) {
      return this.http.patch(Url.WebApiUrl + WebApiPages.UpdateAssetUsageTypeMaster, assetusagetypemaster);
    }
    InsertAssetUsageTypeMaster(assetusagetypemaster:Assetusagetypemaster) {
      return this.http.post(Url.WebApiUrl + WebApiPages.InsertAssetsUsageTypeMaster, assetusagetypemaster);
    }
    DeleteAssetUsageTypeMaster(assetusagetypemaster:Assetusagetypemaster) {
      return this.http.patch(Url.WebApiUrl + WebApiPages.DeleteAssetUsageTypeMaster, assetusagetypemaster);
    }
  }
  
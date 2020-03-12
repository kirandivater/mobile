import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/_Model/url';
import { AssetDetails } from 'src/app/_Model/AssetDetails/assetdetails';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class AssetDataDetailsService {

  constructor(private http: HttpClient,assetdetails: AssetDetails) { }

 // private assetUrl = "http://localhost:8080/_API/InsertAssetsDetails.php";
 GetMfgPhyBalId(Id_:string) {
   return this.http.get(Url.WebApiUrl + WebApiPages.GetMfgPhyBalId + "?Id_="+ Id_ +"");
  }

  InsertAssetDetails(assetdetails: AssetDetails) {
   return this.http.post(Url.WebApiUrl + WebApiPages.InsertAssetsDetails, assetdetails);
  }
}

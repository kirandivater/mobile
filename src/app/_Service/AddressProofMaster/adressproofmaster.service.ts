import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

import { Addressproofmaster } from 'src/app/_Model/AddressProofMaster/addressproofmaster';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdressproofmasterService {
    constructor(private http: HttpClient) { }

    // UpdateAddressProofMaster(addressproofmaster:Addressproofmaster):Observable<Addressproofmaster> {
    //   alert(JSON.stringify(addressproofmaster));
    //   return this.http.patch<Addressproofmaster>(Url.WebApiUrl + WebApiPages.UpdateAddressProofMaster + '/' + addressproofmaster.AddressProofId_, addressproofmaster, {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application-json'
    //     })
    //   });
    // }
  
    UpdateAddressProofMaster(addressproofmaster:Addressproofmaster) {
      return this.http.patch(Url.WebApiUrl + WebApiPages.UpdateAddressProofMaster, addressproofmaster);
    }

    InsertAddressProofMaster(addressproofmaster:Addressproofmaster) {
      return this.http.post(Url.WebApiUrl + WebApiPages.InsertAddressProofMaster, addressproofmaster);
    }
    DeleteAddressProofMaster(addressproofmaster:Addressproofmaster) {
     
      return this.http.patch(Url.WebApiUrl + WebApiPages.DeleteAddressProofMaster ,addressproofmaster);
    }
  }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddressProof } from 'src/app/_Model/AddressProof/address-proof';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class AddressProofService {

  constructor(private http: HttpClient) { }

  InsertAddressProof(addressproofModal: AddressProof) {
    return this.http.post(Url.WebApiUrl + WebApiPages.InsertAddressProofMaster, addressproofModal);
  }

  GetAddressProof() {
    return this.http.get(Url.WebApiUrl + WebApiPages.GetAddressProofMaster);
  }
}

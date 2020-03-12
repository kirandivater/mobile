import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Makemaster } from 'src/app/_Model/_MakeMaster/makemaster';
import { Url } from 'src/app/_Model/url';
import { WebApiPages } from 'src/app/_Model/web-api-pages';

@Injectable({
  providedIn: 'root'
})
export class MakemasterService {

  constructor(private http:HttpClient) { }

  InsertMakeMaster(MakemasterModel:Makemaster)
  {
    return this.http.post(Url.WebApiUrl + WebApiPages.InsertMakeMaster, MakemasterModel);
  }
  UpdateMakeMaster(MakemasterModel:Makemaster)
  {
    return this.http.patch(Url.WebApiUrl + WebApiPages.UpdateMakeMaster, MakemasterModel);

  }
  DeleteMakeMaster(MakemasterModel:Makemaster)
  {
    return this.http.patch(Url.WebApiUrl + WebApiPages.DeleteMakeMaster ,MakemasterModel);

  }
  
  
}

import { Component, OnInit } from '@angular/core';
import { AssetsusagetypemasterService } from '../_Service/AssetUsageTypeMaster/assetsusagetypemaster.service';
import { Assetusagetypemaster } from '../_Model/AssetUsageTypeMaster/assetusagetypemaster';
import { Messages } from '../_Model/Messages/messages';

@Component({
  selector: 'app-assetsusagetypemaster',
  templateUrl: './assetsusagetypemaster.component.html',
  styleUrls: ['./assetsusagetypemaster.component.scss'],
})

export class AssetsusagetypemasterComponent implements OnInit {
  AssetsUsageTypeMasterId_: number;
  Titlename: string;
  constructor(private assetusagetypemaster: AssetsusagetypemasterService, private assetusagetypemastermodel: Assetusagetypemaster) { }

  ngOnInit() { }
  UpdateAssetUsageTypeMaster() {
    return this.assetusagetypemaster.UpdateAssetUsageTypeMaster(this.assetusagetypemastermodel).subscribe(Response => {

    });

  }
  InsertAssetUsageTypeMaster() {
    this.assetusagetypemastermodel.Title_ = this.Titlename;
    return this.assetusagetypemaster.InsertAssetUsageTypeMaster(this.assetusagetypemastermodel).subscribe(Response => {
      console.log(this.assetusagetypemastermodel);
       alert(Messages.InsertAssetUsageTypeMaster);
    });
  }

  DeleteAssetUsageTypeMaster() {
    return this.assetusagetypemaster.DeleteAssetUsageTypeMaster(this.assetusagetypemastermodel).subscribe(Response => {

    });


  }
}



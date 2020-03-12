import { Component, OnInit } from '@angular/core';
import { AssetUsageModel } from '../_Model/AssetUsageType/asset-usage-typeModel';
import { AssetUsageTypeService } from '../_Service/AssetUsageType/asset-usage-type.service';
import { MakeService } from '../_Service/Make/make.service';
import { Messages } from '../_Model/Messages/messages';

@Component({
  selector: 'app-assetusagetype',
  templateUrl: './assetusagetype.component.html',
  styleUrls: ['./assetusagetype.component.scss'],
})
export class AssetusagetypeComponent implements OnInit {

  VendorId: number;
  MakeId: number;
  AccountUsageType: string;
  VendorTeamPurpose: string;
  VendorPersonName: string;
  VendorCompanyName: string;
  makeidlist = [];
  AssetsUsageList = [];

  constructor(private assetusagetype: AssetUsageTypeService, private make: MakeService, private assetusagemodel: AssetUsageModel) { }

  ngOnInit() {
    this.make.GetMake().subscribe(Response => {
      this.makeidlist = JSON.parse(JSON.stringify(Response));
    })

    this.assetusagetype.GetAssetUsageType().subscribe(Response => {
      this.AssetsUsageList = JSON.parse(JSON.stringify(Response));
    })
  }

  InsertAssetType() {
    this.assetusagemodel.VendorId_ = this.VendorId;
    this.assetusagemodel.MakeId_ = this.MakeId;
    this.assetusagemodel.AssetsUsageTypeMasterId_ = this.AccountUsageType;
    this.assetusagemodel.VendorTeamPurpose_ = this.VendorTeamPurpose;
    this.assetusagemodel.VendorPersonName_ = this.VendorPersonName;
    this.assetusagemodel.VendorCompanyName_ = this.VendorCompanyName;

    this.assetusagetype.InsertAssetType(this.assetusagemodel).subscribe(Response => {
      
    }, error => {
      alert(JSON.stringify(error));
    }, () => {
      alert(Messages.InsertAssetType);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AssetDetails } from '../_Model/AssetDetails/assetdetails';
import { AssetDetails } from 'src/app/_Model/AssetDetails/assetdetails';
import { AssetDataDetailsService } from '../_Service/AssetData/asset-data-details.service';
import { MakeService } from '../_Service/Make/make.service';
import { PlantService } from '../_Service/Plant/plant.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Messages } from '../_Model/Messages/messages';


@Component({
  selector: 'app-assetdetail',
  templateUrl: './assetdetail.component.html',
  styleUrls: ['./assetdetail.component.scss'],
})
export class AssetdetailComponent implements OnInit {
  MakeList = [];
  PlantList = [];
  MfgList = [];
  PhyList = [];
  BalList = [];
  Mfgasset_id: string;
  make: string;
  modelno: string;
  manfacture_serial: string;
  manfacture_serialword: string;
  balmis_id: string;
  phy_asset: string;
  balmis_checkid: string;
  manfacture_serialno: string;
  moniter_serialno: string;
  moniter_serialword: string;
  assetmaster: number;
  FloorNo: string;
  RoomName: string;
  ShopName: string;
  Landmark: string;
  plant: string;

  constructor(private assetService: AssetDataDetailsService, private makeservice: MakeService, private plantservice: PlantService, private asset: AssetDetails) { }


  ngOnInit() {
    this.makeservice.GetMake().subscribe(Response => {
      this.MakeList = JSON.parse(JSON.stringify(Response));
    });
    this.plantservice.GetPlantDeptNameList().subscribe(Response => {
      //console.log(Response);
      this.PlantList = JSON.parse(JSON.stringify(Response));
    });
    this.assetService.GetMfgPhyBalId('Mfg').subscribe(Response => {
      this.MfgList = JSON.parse(JSON.stringify(Response));
    });
    this.assetService.GetMfgPhyBalId('Bal').subscribe(Response => {
      this.BalList = JSON.parse(JSON.stringify(Response));
    });
    this.assetService.GetMfgPhyBalId('Phy').subscribe(Response => {
      this.PhyList = JSON.parse(JSON.stringify(Response));
    });
  }
  // AssetDetailsId: number;

  InsertAssetDetails(asset_id, phy_asset, balmis_checkid, assetMasterId) {
    // this.asset.PlantId_ = '1';
    // this.asset.DeptMasterId_ = '1';
    this.asset.MakeId_ = this.make;
    this.asset.ModelNo_ = this.modelno;
    this.asset.AssetId_ = asset_id;
    this.asset.MfgSerialNo_ = this.manfacture_serial;
    this.asset.MfgSerialNoInWord_ = this.manfacture_serialword;
    this.asset.BALMisId_ = this.balmis_id;
    this.asset.PhysicalAssetsId_ = phy_asset;
    this.asset.BALMisIdChar_ = balmis_checkid;
    this.asset.FloorNo_ = this.FloorNo;
    this.asset.RoomName_ = this.RoomName;
    this.asset.ShopName_ = this.ShopName;
    this.asset.Landmark_ = this.Landmark;
    // this.asset.manfacture_serialno = this.manfacture_serialno;
    this.asset.MonitorSerialNo_ = this.moniter_serialno;
    this.asset.MonitorSerialNoInWord_ = this.moniter_serialword;
    this.asset.AssetsMasterId_ = assetMasterId;

    this.assetService.InsertAssetDetails(this.asset).subscribe(Response => {
      alert(Messages.InsertAssetDetails);
    }, error => {
      alert(JSON.stringify(error));
    })
  }
}

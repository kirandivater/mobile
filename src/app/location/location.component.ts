import { Component, OnInit } from '@angular/core';

import { Assetsmaster } from 'src/app/_Model/AssetMaster/assetsmaster';
import { AssetsmasterService } from '../_Service/AssetMaster/assetsmaster.service';
import { PlantService } from '../_Service/Plant/plant.service';
import { DeptmasterService } from '../_Service/Department/deptmaster.service';
import { Messages } from '../_Model/Messages/messages';
//import { PlantService } from '../_Service/Location/plant.service';



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  Plant: string;
  Department:string;
  PlantList = [];
  deptlist=[];
  constructor(
    private assetsmasterservice:AssetsmasterService,private deptmaster:DeptmasterService, private plantService: PlantService, private assetsmastercls:Assetsmaster) {
     
    }

  ngOnInit() {
    this.plantService.GetPlantMasterDetails().subscribe(Response=>{
      this.PlantList = JSON.parse(JSON.stringify(Response));
    })
  
    this.deptmaster.GetDeptMasterDetails().subscribe(Response=>{
      this.deptlist=JSON.parse(JSON.stringify(Response));
    })
  }

  InsertLocationDetails() {
    this.assetsmastercls.PlantId_=this.Plant;
    this.assetsmastercls.DeptMasterId_=this.Department;
    
    this.assetsmasterservice.InsertAssetsMaster(this.assetsmastercls).subscribe(Response=>{
      if(Response[0].Result = 'Already Exist') {
        alert(Response[0].Result);
      }
    }, () => {
      alert(Messages.InsertLocationDetails);
    })
  }
}

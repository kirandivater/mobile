import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendormaster',
  templateUrl: './vendormaster.component.html',
  styleUrls: ['./vendormaster.component.scss'],
})
export class VendormasterComponent implements OnInit {

  MakeMaster: string;
  AssetsUsageTypeMasterId: string;
  Landmark: string;
  vendorPersonName: string;
  VendorCompanyName: string;
  vendorTeamPurpose: string;
  PlantList = [];
  deptlist = [];
  
  constructor() { }

  ngOnInit() {}

}

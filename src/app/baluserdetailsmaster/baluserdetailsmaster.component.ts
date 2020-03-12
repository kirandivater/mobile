import { Component, OnInit } from '@angular/core';
import { DeptmasterService } from '../_Service/Department/deptmaster.service';
import { PlantService } from '../_Service/Plant/plant.service';

@Component({
  selector: 'app-baluserdetailsmaster',
  templateUrl: './baluserdetailsmaster.component.html',
  styleUrls: ['./baluserdetailsmaster.component.scss'],
})
export class BaluserdetailsmasterComponent implements OnInit {
  Plant: string;
  Department:string;
  OwnerName: string;
  OwnerTicketno: string;
  BalUsernm: string;
  BalTicketno: string;
  PlantList = [];
  deptlist=[];

  constructor(private deptmaster:DeptmasterService,
    private plantService: PlantService,) { }

  ngOnInit() {
    this.plantService.GetPlantMasterDetails().subscribe(Response=>{
      this.PlantList = JSON.parse(JSON.stringify(Response));
    
    })
  
    this.deptmaster.GetDeptMasterDetails().subscribe(Response=>{
      this.deptlist=JSON.parse(JSON.stringify(Response));
    })
  }

}

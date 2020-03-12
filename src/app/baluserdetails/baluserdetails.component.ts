import { Component, OnInit } from '@angular/core';
import { BalUserDetailsService } from '../_Service/BalUserDetails/bal-user-details.service';
import { BalUserDetails } from '../_Model/BalUserDetails/bal-user-details';
import { PlantService } from '../_Service/Plant/plant.service';
import { Messages } from '../_Model/Messages/messages';

@Component({
  selector: 'app-baluserdetails',
  templateUrl: './baluserdetails.component.html',
  styleUrls: ['./baluserdetails.component.scss'],
})
export class BaluserdetailsComponent implements OnInit {

  constructor(private BalUserDetailsService: BalUserDetailsService, private plantservice: PlantService, private baluserdetailsmodel: BalUserDetails) { }
  BalId: number;
  Plant_Id: number;
  OwnerName: string;
  OwnerNameTicketNo: string;
  UserName: string;
  UserNameTicketNo: string;
  PlantList = [];
  List = [];


  ngOnInit() { 
    this.plantservice.GetPlantDeptNameList().subscribe(Response => {
      this.PlantList = JSON.parse(JSON.stringify(Response));
    }, error => {
      alert(JSON.stringify(error));
    });
  }


  InsertBalUserDetails() {
    //this.baluserdetailsmodel.BalId_ = this.BalId;
    this.baluserdetailsmodel.AssetsMasterId_ = this.Plant_Id;
    this.baluserdetailsmodel.OwnerName_ = this.OwnerName;
    this.baluserdetailsmodel.OwnerTicketNo_ = this.OwnerNameTicketNo;
    this.baluserdetailsmodel.BalUserName_ = this.UserName;
    this.baluserdetailsmodel.BalTicketNo_ = this.UserNameTicketNo;

    //alert(JSON.stringify(this.baluserdetailsmodel));
      this.BalUserDetailsService.InsertBalUserDetailsMaster(this.baluserdetailsmodel).subscribe(Response => {
      alert(Messages.InsertBalUserDetails);
    },error=>{
      alert(JSON.stringify(error));
    });
  }
}



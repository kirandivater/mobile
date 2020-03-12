import { Component, OnInit } from '@angular/core';
import { EngineerDetailsService } from '../_Service/EngineerDetails/engineer-details-service.service';
import { EngineerDetails } from '../_Model/EngineerDetails/engineer-details';
import * as $ from 'jquery';
import { Messages } from '../_Model/Messages/messages';

@Component({
  selector: 'app-engineer-details',
  templateUrl: './engineer-details.component.html',
  styleUrls: ['./engineer-details.component.scss'],
})
export class EngineerDetailsComponent implements OnInit {
 
  engineername: string;
  engineersignature: string;
  engineerdate:Date;
  engineerremark:string;

  constructor(private engineerdetails:EngineerDetailsService,private engineerdetailsmodel:EngineerDetails) { }

  ngOnInit() {
    $(document).ready(function() {
      $("#engdate").val(new Date());
    });
   }

  InsertEngDetails () {
    this.engineerdate = new Date();

    this.engineerdetailsmodel.LoginId_ = localStorage.getItem('LoginId');
    this.engineerdetailsmodel.EngName_ = this.engineername;
    this.engineerdetailsmodel.EngSignature_ = this.engineersignature;
    this.engineerdetailsmodel.EngDate_=this.engineerdate;
    this.engineerdetailsmodel.EngRemark_=this.engineerremark;

    this.engineerdetails.InsertEngDetails(this.engineerdetailsmodel).subscribe(Response => {
     
    },error => {
      alert(JSON.stringify(error));
    },()=>{ 
      alert(Messages.InsertEngDetails);
    });
  }
}


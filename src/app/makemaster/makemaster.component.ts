import { Component, OnInit } from '@angular/core';
// import { MakemasterService } from '../Service/_MakeMaster/makemaster.service';
import { Makemaster } from '../_Model/_MakeMaster/makemaster';
import { MakemasterService } from '../_Service/MakeMaster/makemaster.service';
import { Messages } from '../_Model/Messages/messages';

@Component({
  selector: 'app-makemaster',
  templateUrl: './makemaster.component.html',
  styleUrls: ['./makemaster.component.scss'],
})
export class MakemasterComponent implements OnInit {
  Modelnm:string;
  Modelno:string;
  MakeId_:Number;
  constructor(private makemasterservice:MakemasterService,private makemastermodel:Makemaster) { }


  ngOnInit() {}
  
  InsertMakeMaster()
  {

    this.makemastermodel.ModelName_ = this.Modelnm;
    this.makemastermodel.ModelNumber_ = this.Modelno;
    this.makemasterservice.InsertMakeMaster(this.makemastermodel).subscribe(Response=>{
      // console.log(Response);
      alert(Messages.InsertMakeMaster);

    })
  }
  UpdateMakeMaster()
  {
    this.makemasterservice.UpdateMakeMaster(this.makemastermodel).subscribe(Response=>{
      console.log(Response);
    })
  }
  DeleteMakeMaster()
  {
    this.makemasterservice.DeleteMakeMaster(this.makemastermodel).subscribe(Response=>{
      console.log(Response);
    })
  }

}

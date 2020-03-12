import { Component, OnInit } from '@angular/core';
import { Plantmaster } from '../_Model/_PlantMaster/plantmaster';
import { PlantmasterService } from '../_Service/PlantMaster/plantmaster.service';
import { Messages } from '../_Model/Messages/messages';

@Component({
  selector: 'app-plantmaster',
  templateUrl: './plantmaster.component.html',
  styleUrls: ['./plantmaster.component.scss'],
})
export class PlantmasterComponent implements OnInit {
  PlantId_:number;
  PlantName: string;
  
  constructor(private plantService: PlantmasterService, private plantmstmodel: Plantmaster) { }

  ngOnInit() {}

  InsertPlntMaster()
  {
    this.plantmstmodel.PlantName_ = this.PlantName;
    this.plantService.InsertPlantMaster(this.plantmstmodel).subscribe(Response => {
      alert(Messages.InsertPlantMaster);

    });
  }

  UpdatePlantMaster()
  {
    return this.plantService.UpdatePlantMaster(this.plantmstmodel).subscribe(Response => {
      
    });
  }
  DeletePlantMaster()
  {
    return this.plantService.DeletePlantMaster(this.plantmstmodel).subscribe(Response => {
      
    });
  }
}

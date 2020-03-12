import { Component, OnInit, DoCheck } from '@angular/core';
import { AdressproofmasterService } from '../_Service/AddressProofMaster/adressproofmaster.service';
import { Addressproofmaster } from '../_Model/AddressProofMaster/addressproofmaster';
import { AllmastersComponent } from '../allmasters/allmasters.component';
import { Messages } from '../_Model/Messages/messages';

@Component({
  selector: 'app-adressproofmaster',
  templateUrl: './adressproofmaster.component.html',
  styleUrls: ['./adressproofmaster.component.scss'],
})

export class AdressproofmasterComponent implements OnInit, DoCheck {
  AddressProofId_: number;
  Title: string;

  ngDoCheck() {
    return this.masters.crud;
  }

  constructor(private addressproofmaster: AdressproofmasterService,
    private addressproofmastermodel: Addressproofmaster, private masters: AllmastersComponent) { }

  ngOnInit() {

  }
  UpdateAddressProofMaster() {
    this.addressproofmaster.UpdateAddressProofMaster(this.addressproofmastermodel).subscribe(Response => {
      console.log(Response);
    })

  }
  InsertAddressProofMaster()
  {
    this.addressproofmastermodel.Title_ = this.Title;

    

    this.addressproofmaster.InsertAddressProofMaster(this.addressproofmastermodel).subscribe(Response=>{
      alert(Messages.InsertAddressProofMaster);
      // console.log(this.addressproofmastermodel);
    })

}
  DeleteAddressProofMaster() {
    this.addressproofmaster.DeleteAddressProofMaster(this.addressproofmastermodel).subscribe(Response => {
      console.log(Response);
    })

  }
}





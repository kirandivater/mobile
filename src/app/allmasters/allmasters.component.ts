import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../_Service/Master/master.service';
import * as $ from 'jquery';
import { Addressproofmaster } from '../_Model/AddressProofMaster/addressproofmaster';
import { AdressproofmasterService } from '../_Service/AddressProofMaster/adressproofmaster.service';
import { Messages } from '../_Model/Messages/messages';
import { Makemaster } from '../_Model/_MakeMaster/makemaster';
import { AssetsusagetypemasterService } from '../_Service/AssetUsageTypeMaster/assetsusagetypemaster.service';
import { Departmentmaster } from '../_Model/DepartmentMaster/departmentmaster';
import { DepartmentmasterService } from '../_Service/DepartmentMaster/departmentmaster.service';
import { Plantmaster } from '../_Model/_PlantMaster/plantmaster';
import { PlantmasterService } from '../_Service/PlantMaster/plantmaster.service';
import { MakemasterService } from '../_Service/MakeMaster/makemaster.service';
import { AssetUsageModel } from '../_Model/AssetUsageType/asset-usage-typeModel';
import { Assetusagetypemaster } from '../_Model/AssetUsageTypeMaster/assetusagetypemaster';

@Component({
  selector: 'app-allmasters',
  templateUrl: './allmasters.component.html',
  styleUrls: ['./allmasters.component.scss'],
})
export class AllmastersComponent implements OnInit, DoCheck {
  public crud: string;
  MasterId: string;
  AllMasterDetails = [];
  AllMasterDetailsWithValue = [];
  allmasters: string;

  ngDoCheck(): void {
    this.route.queryParams.subscribe(params => {
      this.crud = params['crud'];
    });
  }

  constructor(private route: ActivatedRoute, private allmasterservice: MasterService, 
    private address: Addressproofmaster, private addressservice: AdressproofmasterService, 
     private Assetusage: Assetusagetypemaster, private assetservice: AssetsusagetypemasterService, 
    private dept: Departmentmaster, private deptservice: DepartmentmasterService,
    private plant: Plantmaster, private plantservice: PlantmasterService, 
    private make: Makemaster, private makeserive: MakemasterService) { }

  ngOnInit() {
    this.allmasterservice.GetAllMastersName().subscribe(Response => {
      this.AllMasterDetails = JSON.parse(JSON.stringify(Response));
    });

    this.show(1, 1);
    this.hidediv(1);
  }

  show(id, hidtitle) {
    $("#txt_" + id).val(hidtitle);
    $("#lbl_" + id).css('display', 'none');
    $("#edit_" + id).css('display', 'none');
    $("#update_" + id).css('display', 'block');
    $("#cancel_" + id).css('display', 'block');
    $("#txt_" + id).css('display', 'block');
    $("#delete_" + id).css('display', 'none');
  }

  hidediv(id) {
    $("#lbl_" + id).css('display', 'block');
    $("#edit_" + id).css('display', 'block');
    $("#update_" + id).css('display', 'none');
    $("#cancel_" + id).css('display', 'none');
    $("#txt_" + id).css('display', 'none');
    $("#delete_" + id).css('display', 'block');
  }

  UpdateAssetUsageTypeMaster(id) {
    let title = $("#txt_" + id).val();

    this.Assetusage.AssetsUsageTypeMasterId_ = id;
    this.Assetusage.Title_ = title;

    this.assetservice.UpdateAssetUsageTypeMaster(this.Assetusage).subscribe(Response => {
      this.hidediv(id);

      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
      });

      alert(Messages.UpdateAssetUsageTypeMaster);
    });
  }
  UpdateDepMaster(id) {
    // alert(id);
    let title = $("#txt_" + id).val();

    this.dept.DeptMasterId_ = id;
    this.dept.DeptName_ = title;

    this.deptservice.UpdateDepMaster(this.dept).subscribe(Response => {
      this.hidediv(id);

      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
        // alert(JSON.stringify(this.dept));
      });

      alert(Messages.UpdateDepMaster);
    });
  }
  UpdatePlantMaster(id) {
    //alert(id);
    let title = $("#txt_" + id).val();

    this.plant.PlantId_ = id;
    this.plant.PlantName_ = title;

    this.plantservice.UpdatePlantMaster(this.plant).subscribe(Response => {
      this.hidediv(id);

      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
        //  alert(JSON.stringify(this.plant));
      });
      // alert(JSON.stringify(this.plant));
      alert(Messages.UpdatePlantMaster);
    });
  }
  UpdateMakeMaster(id) {
    // alert(id);
    let title = $("#txt_" + id).val();

    this.make.MakeId_ = id;
    this.make.ModelName_ = title;
    this.make.ModelNumber_ = title;
    this.makeserive.UpdateMakeMaster(this.make).subscribe(Response => {
      this.hidediv(id);

      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
      });

      alert(Messages.UpdateMakeMaster);
    });
  }

  UpdateAddressProofMaster(id) {
    let title = $("#txt_" + id).val();

    this.address.AddressProofId_ = id;
    this.address.Title_ = title;

    this.addressservice.UpdateAddressProofMaster(this.address).subscribe(Response => {
      this.hidediv(id);

      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
      });

      alert(Messages.UpdateAddressProofMaster);
    });
  }
  DeleteAssetUsageTypeMaster(id) {
    this.Assetusage.AssetsUsageTypeMasterId_ = id;

    this.assetservice.DeleteAssetUsageTypeMaster(this.Assetusage).subscribe(Response => {
      this.hidediv(id);
      
      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {

        if (Response == 0) {
          Response = [];
        }
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
      });

      alert(Messages.DeleteAssetUsageTypeMaster);
    });
  }
  
  DeleteDepMaster(id) {
    this.dept.DeptMasterId_ = id;

    this.deptservice.DeleteDepMaster(this.dept).subscribe(Response => {
      this.hidediv(id);
      
      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {

        if (Response == 0) {
          Response = [];
        }
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
      });

      alert(Messages.DeleteDepMaster);
    });
  }
  DeletePlantMaster(id) {
    this.plant.PlantId_ = id;

    this.plantservice.DeletePlantMaster(this.plant).subscribe(Response => {
      this.hidediv(id);
      
      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {

        if (Response == 0) {
          Response = [];
        }
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
      });

      alert(Messages.DeletePlantMaster);
    });
  }
  DeleteMakeMaster(id) {
    this.make.MakeId_= id;

    this.makeserive.DeleteMakeMaster(this.make).subscribe(Response => {
      this.hidediv(id);
      
      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {

        if (Response == 0) {
          Response = [];
        }
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
      });

      alert(Messages.DeleteMakeMaster);
    });
  }

  DeleteAddressProofMaster(id) {
    this.address.AddressProofId_ = id;

    this.addressservice.DeleteAddressProofMaster(this.address).subscribe(Response => {
      this.hidediv(id);

      this.allmasterservice.GetAllMastersDetailsUsingName(localStorage.getItem('id')).subscribe(Response => {

        if (Response == 0) {
          Response = [];
        }
        this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
      });

      alert(Messages.DeleteAddressProofMaster);
    });
  }
  GetId(event) {
    this.MasterId = event.target.value;
    localStorage.setItem('id', this.MasterId);

    this.allmasterservice.GetAllMastersDetailsUsingName(event.target.value).subscribe(Response => {
      this.AllMasterDetailsWithValue = JSON.parse(JSON.stringify(Response));
      // alert(JSON.stringify(Response));
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DepartmentmasterService } from '../_Service/DepartmentMaster/departmentmaster.service';
import { Departmentmaster } from '../_Model/DepartmentMaster/departmentmaster';
import { Messages } from '../_Model/Messages/messages';

@Component({
  selector: 'app-departmentmaster',
  templateUrl: './departmentmaster.component.html',
  styleUrls: ['./departmentmaster.component.scss'],
})

export class DepartmentmasterComponent implements OnInit {
  DeptMasterId_:number;
  DeptName_:string;

  constructor(private departmentmaster:DepartmentmasterService,private departmentmastermodel:Departmentmaster) { }

  ngOnInit() {}
  UpdateDepMaster()
  {
    this.departmentmaster.UpdateDepMaster(this.departmentmastermodel).subscribe(Response=>{
      console.log(Response);
    })
    
  }
  InsertDepMaster()
  {
    this.departmentmastermodel.DeptName_ = this.DeptName_;
    // this.departmentmaster. DeptMasterId_=1;
    this.departmentmaster.InsertDepMaster(this.departmentmastermodel).subscribe(Response=>{
      // console.log(Response);
      alert(Messages.InsertDepMaster);
    })


}
DeleteDepMaster()
  {
    // this.departmentmaster. DeptMasterId_=1;
    this.departmentmaster.DeleteDepMaster(this.departmentmastermodel).subscribe(Response=>{
      console.log(Response);
    })

}
}




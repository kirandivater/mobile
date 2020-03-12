import { Component, OnInit } from '@angular/core';
// import {NgForm} from '@angular/forms';
import { Register } from '../_Model/Register/register';
import { RegisterUserService } from '../_Service/Register/register-user.service';
import { AddressProofService } from '../_Service/AddressProof/address-proof.service';
import { Messages } from '../_Model/Messages/messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  AddressProofList = [];
  fullname: string;
  name: string;
  email: string;
  mobile: string;
  zip: string;
  password: string;
  addressprof: number;
  address: string;

  constructor(private register: RegisterUserService, 
    private addressproofService: AddressProofService, private registerModal: Register) { }

  ngOnInit() {
    this.addressproofService.GetAddressProof().subscribe(Response => {
      this.AddressProofList = JSON.parse(JSON.stringify(Response));

      console.log(Response);
    }, error => {
      alert(JSON.stringify(error));
    });
  }

  InsertRegisterDetails() {
    this.registerModal.FullName_ = this.fullname;
    this.registerModal.Pincode_ = this.zip;
    this.registerModal.EmailId_ = this.email;
    this.registerModal.ContactNo_ = this.mobile;
    this.registerModal.Pwd_ = this.password;
    this.registerModal.Address_ = this.address;
    this.registerModal.AddressProofId_ = this.addressprof;

    this.register.InsertRegisterDetails(this.registerModal).subscribe(data => {
      alert(Messages.InsertRegisterDetails);
    }, error => {
      alert(JSON.stringify(error));
    });
  }

}

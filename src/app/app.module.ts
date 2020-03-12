import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { EngineerDetailsService } from './_Service/EngineerDetails/engineer-details-service.service';
import { EmpDetails } from './_Model/EmpDetails/emp-details';
import { EngineerDetails } from './_Model/EngineerDetails/engineer-details';
import { LocationService } from './_Service/Location/location.service';
import { LoginService } from './_Service/Login/login.service';
import { Login } from './_Model/Login/login';
import { AssetusagetypeComponent } from './assetusagetype/assetusagetype.component';
import { BaluserdetailsComponent } from './baluserdetails/baluserdetails.component';
import { AssetUsageModel } from './_Model/AssetUsageType/asset-usage-typeModel';
import { BalUserDetails } from './_Model/BalUserDetails/bal-user-details';
import { BalUserDetailsService } from './_Service/BalUserDetails/bal-user-details.service';
import { AssetUsageTypeService } from './_Service/AssetUsageType/asset-usage-type.service';
import { LocationComponent } from './location/location.component';
import { Url } from './_Model/url';
import { EngineerDetailsComponent } from './engineer-details/engineer-details.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { Register } from './_Model/Register/register';
import { RegisterUserService } from './_Service/Register/register-user.service';

import { AssetDetails } from './_Model/AssetDetails/assetdetails';
import { RegisterComponent } from './register/register.component';

import { WebApiPages } from './_Model/web-api-pages';

import { AssetsmasterService } from './_Service/AssetMaster/assetsmaster.service';
import { Assetsmaster } from './_Model/AssetMaster/assetsmaster';
import { Plant } from './_Model/Plant/plant';
import { PlantService } from './_Service/Plant/plant.service';
import { EmpDetailsService } from './_Service/EmpDetails/emp-details.service';
import { AssetdetailComponent } from './assetdetail/assetdetail.component';
import { AddressProofService } from './_Service/AddressProof/address-proof.service';
import { AddressProof } from './_Model/AddressProof/address-proof';
import { DeptmasterService } from './_Service/Department/deptmaster.service';
import { MakeService } from './_Service/Make/make.service';
import { UndefinedvaluesService } from './_Service/UndefinedValues/undefinedvalues.service';
import { Messages } from './_Model/Messages/messages';
import { DepartmentmasterComponent } from './departmentmaster/departmentmaster.component';
import { AdressproofmasterComponent } from './adressproofmaster/adressproofmaster.component';
import { AssetsusagetypemasterComponent } from './assetsusagetypemaster/assetsusagetypemaster.component';
import { BaluserdetailsmasterComponent } from './baluserdetailsmaster/baluserdetailsmaster.component';
import { MakemasterComponent } from './makemaster/makemaster.component';

import { VendormasterComponent } from './vendormaster/vendormaster.component';

import { AllmastersComponent } from './allmasters/allmasters.component';
import { AdressproofmasterService } from './_Service/AddressProofMaster/adressproofmaster.service';
import { AssetsusagetypemasterService } from './_Service/AssetUsageTypeMaster/assetsusagetypemaster.service';

import { DepartmentmasterService } from './_Service/DepartmentMaster/departmentmaster.service';
import { Plantmaster } from './_Model/_PlantMaster/plantmaster';
import { Makemaster } from './_Model/_MakeMaster/makemaster';
import { PlantmasterService } from './_Service/PlantMaster/plantmaster.service';
import { MakemasterService } from './_Service/MakeMaster/makemaster.service';
import { Addressproofmaster } from './_Model/AddressProofMaster/addressproofmaster';
import { Assetusagetypemaster } from './_Model/AssetUsageTypeMaster/assetusagetypemaster';
import { Departmentmaster } from './_Model/DepartmentMaster/departmentmaster';
import { PlantmasterComponent } from './plantmaster/plantmaster.component';
import { MasterService } from './_Service/Master/master.service';
import { ConfirmpasswordDirective } from './_Directives/confirmpassword.directive';
import { AlldetailsofusersService } from './_Service/AllDetailsOfUsers/alldetailsofusers.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EngineerDetailsComponent,
    EmpDetailsComponent,
    DashboardComponent,
    LocationComponent,
    AssetusagetypeComponent,
    BaluserdetailsComponent,
    RegisterComponent,
    AssetdetailComponent,
    DepartmentmasterComponent,
    AdressproofmasterComponent,
    AssetsusagetypemasterComponent,
    BaluserdetailsmasterComponent,
    MakemasterComponent,
    VendormasterComponent,
    AllmastersComponent,
    PlantmasterComponent,
    ConfirmpasswordDirective
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    // classes

    StatusBar,
    SplashScreen,
    AssetUsageModel,
    BalUserDetails,
    EngineerDetails,
    EmpDetails,
    Location,
    Login,
    Url,
    Register,
    WebApiPages,
    Assetsmaster,
    Plant,
    AddressProof,
    Messages,
    Plantmaster,
    Makemaster,
    Addressproofmaster,
    Assetusagetypemaster,
    Departmentmaster,

    //services
    EmpDetailsService,
    EngineerDetailsService,
    LocationService,
    LoginService,
    BalUserDetailsService,
    AssetUsageTypeService,
    RegisterUserService,
    AssetDetails,
    AssetsmasterService,
    PlantService,
    AddressProofService,
    DeptmasterService,
    MakeService,
    UndefinedvaluesService,
    AdressproofmasterService,
    AssetsusagetypemasterService,
    DepartmentmasterService,
    PlantmasterService,
    MakemasterService,
    MasterService,
    AlldetailsofusersService,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

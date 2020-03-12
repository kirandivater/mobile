import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EngineerDetailsComponent } from './engineer-details/engineer-details.component';
import { BaluserdetailsComponent } from './baluserdetails/baluserdetails.component';
import { AssetusagetypeComponent } from './assetusagetype/assetusagetype.component';
import { LocationComponent } from './location/location.component';
import { RegisterComponent } from './register/register.component';
import { AssetdetailComponent } from './assetdetail/assetdetail.component';
import { AddressProof } from './_Model/AddressProof/address-proof';
import { AdressproofmasterComponent } from './adressproofmaster/adressproofmaster.component';
import { AssetsusagetypemasterComponent } from './assetsusagetypemaster/assetsusagetypemaster.component';
import { BaluserdetailsmasterComponent } from './baluserdetailsmaster/baluserdetailsmaster.component';
import { DepartmentmasterComponent } from './departmentmaster/departmentmaster.component';
import { MakemasterComponent } from './makemaster/makemaster.component';
import { VendormasterComponent } from './vendormaster/vendormaster.component';
//import { PlantmasterComponent } from './plantmaster/plantmaster.component';
import { AllmastersComponent } from './allmasters/allmasters.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  
  {
    path: 'dashboard', component: DashboardComponent, children: [
    { path: 'empdetails', component: EmpDetailsComponent },
    { path: 'eng', component: EngineerDetailsComponent },
    { path: 'location', component: LocationComponent },
    { path: 'bal', component: BaluserdetailsComponent },
    { path: 'assets', component: AssetusagetypeComponent },
    { path: 'assetdetails', component: AssetdetailComponent},

    { path: 'reg', component: RegisterComponent },
    { path: 'addressproof', component:AdressproofmasterComponent},
    { path: 'assetsusagetypemaster', component:AssetsusagetypemasterComponent},
    { path: 'baluserdetailsmaster', component:BaluserdetailsmasterComponent},
    // { path: 'deptmaster', component:DepartmentmasterComponent},
    // { path: 'makemaster', component:MakemasterComponent},
    // { path: 'vendormaster', component:VendormasterComponent},
    //{ path: 'plantmaster', component:PlantmasterComponent},
    { path: 'allmasters', component:AllmastersComponent},
    ]
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

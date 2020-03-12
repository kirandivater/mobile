import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../_Model/Login/login';
import { LoginService } from '../_Service/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private loginModal: Login, private loginService: LoginService, private route: Router) { }
  
  login() {
    this.loginModal.UserId_ = this.username;
    this.loginModal.Pwd_ = this.password;

    this.loginService.CheckLoginDetails(this.loginModal).subscribe(Response=> {
      if(Response[0].Result == 'User not Exist') {
        alert(Response[0].Result);
      } else{
        localStorage.setItem('LoginId', Response[0].LoginId);
        //this.route.navigate(['/', 'dashboard', 'empdetails'], { queryParams: { LoginId: Response[0].LoginId } });
        this.route.navigate(['/', 'dashboard', 'empdetails']);
      }
    }, 
    () => {
      
    })
  }

  ngOnInit() { }

}

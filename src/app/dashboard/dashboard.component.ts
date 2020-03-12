import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $(".btn1").click(function () {
        $(".btn1").addClass('color').removeClass('selectcolor');
        $(this).removeClass('color').addClass('selectcolor');
      });
    });
  }

  allmaster(id) {
    if(id == 1) {
      //alert(id);
      this.router.navigate(['/', 'dashboard', 'allmasters'], { queryParams: {'crud': 'Insert'}});
    } else if(id == 2) {
      //alert(id);
      this.router.navigate(['/', 'dashboard', 'allmasters'], { queryParams: {'crud': 'Delete'}});
    }
  }

  logout() {
    this.router.navigate(['/', 'login']);
  }
}

import { Component, OnInit } from '@angular/core';
import {FullmeanService} from './../fullmean.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;

  constructor(private _service: FullmeanService, private _router: Router) { }

  login() {
    this._service.createUser(this.user);
    this._router.navigate(['show'])
  }

  ngOnInit() {
  }

}

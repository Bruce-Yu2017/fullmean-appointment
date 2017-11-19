import { Component, OnInit } from '@angular/core';
import {FullmeanService} from './../fullmean.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  appointments;
  user;
  searchdata;
  constructor(private _service: FullmeanService, private _router: Router) { }

  logout() {
    this._service.logout();
    this._router.navigate(['login']);
  }
  
  delete(id) {
    this._service.delete(id);
    this._service.retrieveAppointment((res) => {
      this.appointments = res;
    });
  }

  search() {
    this._service.makeSearch(this.searchdata, (res) => {
      this.appointments = res;
      this.searchdata = ""
    })
  }

  ngOnInit() {
    this._service.retrieveAppointment((res) => {
      this.appointments = res;
    });
    this.user = this._service.user;
  }

}

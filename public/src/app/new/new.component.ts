import { Component, OnInit } from '@angular/core';
import {FullmeanService} from './../fullmean.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newappoint = {
    date: "",
    time: "",
    user: "",
    complaint: ""
  }
  today = new Date();
  future = this.today.setDate(this.today.getDate() + 1);

  constructor(private _service: FullmeanService, private _router: Router) { }

  onSubmit() {
    this._service.createAppointment(this.newappoint);
    this.newappoint = {
      date: "",
      time: "",
      user: "",
      complaint: ""
    };
    this._router.navigate(['show']);
  }
  

  ngOnInit() {
  }

}


















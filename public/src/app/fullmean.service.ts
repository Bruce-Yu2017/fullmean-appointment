import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FullmeanService {
  user;
  constructor(private _http: Http) { }
  createUser(user) {
    this.user = user;
  }

  logout() {
    this.user = "";
  }

  createAppointment(data) {
    data.user = this.user;
    this._http.post("/appointments", data).subscribe((res) => {
      console.log("success create appointment");
    }, (err) => {
      console.log(err);
    })
  }

  // makeSearch(data, callback) {
  //   this._http.post("/appointment/search", {search: data}).subscribe((res) => {
  //     callback(res);
  //   }, (err) => {
  //     console.log(err);
  //   })
  // }

  retrieveAppointment(callback) {
    this._http.get("/appointments").subscribe((res) => {
      callback(res.json());
    })
  }

  delete(id) {
    this._http.post("/appointments/" + id, id).subscribe((res) => {
      console.log("delete success")
    }, (err) => {
      console.log("delete fail")
    })
  }
}













import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

private testing = new BehaviorSubject({});
testName = this.testing.asObservable();

senobject(obj){
  this.testing.next(obj)
}


  private tes = new BehaviorSubject('')
  teat = this.tes.asObservable();

  userName: any;
  // private controlForm = new BehaviorSubject({});
  // comingForm = this.controlForm.asObservable();
  // payment data//////////
  private totalPrice =new BehaviorSubject({})

  totalPricefinal = this.totalPrice.asObservable()
  private checkdata =new BehaviorSubject({});
  checkdatafinal = this.checkdata.asObservable();
  constructor(private http: HttpClient) { }
  // configUrl = './assets/db.json';
localNex(str){
  this.tes.next(str)
}
local;
  editData(url, body, headers){
    return this.http.post<any>(url.id, body, headers);
  }
  //put data from registr to json 
  postData( obj) {
    return this.http.post<any>("http://localhost:3000/users",obj);
  };
  //get all user data from json 
  getUserData() {
    return this.http.get('http://localhost:3000/users');
  }

  getSingleUser(id){
    return this.http.get('http://localhost:3000/users',id);
  }
  getProfileData() {
    return this.http.get('http://localhost:3000/profile');
  }
  updateUser(id, obj) {
    return this.http.put("http://localhost:3000/users/" + id, obj);
  }
  delete(id, body) {
    return this.http.put("http://localhost:3000/users/" + id, body);
  }
//put added to cart selection to json
  postDataFromJson(obj) {
    return this.http.post<any>("http://localhost:3000/shoppingCart", obj);
  };
    sendgetdata(data){
      this.checkdata.next(data)
    }
    sendpricedata(price){
     this.totalPrice.next(price)
    }
}

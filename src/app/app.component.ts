import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from './blog-service.service';
import { NgwWowService } from 'ngx-wow';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'iti-final-pro';
  posts;

  constructor(private http: BlogServiceService, private spinner: NgxSpinnerService, private dataServ: BlogServiceService, private wowService: NgwWowService) { }
  title = 'myNewApp';
  count = 0;
  Cart = [];
  res;
  message: number;
  cards;

 
  ngOnInit() {
   
    this.wowService.init();

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.http.getData().subscribe(res => {
      this.posts = res;
      this.dataServ.currentMessage.subscribe(message => this.message = message);
    });
    this.wowService.init();
  }
  newMessage() {
    this.message = this.Cart.length + 1;
    this.dataServ.changeMessage(this.message)
    this.Cart.push(this.message)
    console.log(this.Cart);
  }
  getCount() {
    return this.count++;
  }


}
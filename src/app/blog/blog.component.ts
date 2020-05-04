import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private wowService: NgwWowService, private http: BlogServiceService, private dataServ: BlogServiceService, private _router: Router) { }
  title = 'myNewApp';
  counter;
  count: number;
  posts;
  Cart = [];
  cards;
  post1;
  x: number = 5;
  y: number = 4;
  ngOnInit() {
    this.wowService.init();
    this.http.getData().subscribe(res => {
    this.posts = res;
    this.dataServ.currentMessage.subscribe(message =>
    this.count = message)
    });

    this.http.getData().subscribe(res => {
      this.posts = res;
      console.log(this.posts)
      // this.cards = res;
      // for (const item of this.cards) {
      //     this.cards =  this.[Math.floor(Math.random() *  this.cards.length)];
      //     console.log(this.cards);
      // this.cards = res;

    })



  }
}
  // }



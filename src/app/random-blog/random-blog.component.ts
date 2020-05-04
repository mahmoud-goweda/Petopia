import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute, Router } from "@angular/router";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-random-blog',
  templateUrl: './random-blog.component.html',
  styleUrls: ['./random-blog.component.scss']
})
export class RandomBlogComponent implements OnInit {
  posts;
  ranarr = []
  sets;
  postItem;
  cards;
  random;
  constructor(private wowService: NgwWowService,private http: BlogServiceService, private dataServ: BlogServiceService, private _router: Router) { }

  ngOnInit() {
    this.wowService.init();
    this.http.getData().subscribe(res => {
      this.posts = res;
    });



    this.http.getData().subscribe(res => {
      this.cards = res;
      this.ranarr = this.cards.sort(() => Math.random() - .5).slice(0,3);


    });
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: false,
    items: 4,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 3
      }
    },
  }

}

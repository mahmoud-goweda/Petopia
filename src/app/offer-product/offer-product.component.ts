import { Component, OnInit } from '@angular/core';
import { ProudctsService } from '../proudcts.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgxStarRatingModule } from 'ngx-star-rating';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShoppingCartService } from '../shopping-cart.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-offer-product',
  templateUrl: './offer-product.component.html',
  styleUrls: ['./offer-product.component.scss']
})
export class OfferProductComponent implements OnInit {
  ranarr = []
  sets;
  postItem;
  modul;
  mathRandom: any;

  constructor(
    private http: ProudctsService,
    private dataServ: ProudctsService,
    private _router: Router,
    private productData: ProudctsService,
    private shoppingCart: ShoppingCartService,
    private wowService: NgwWowService,
  ) { }

  cards;
  random;
  posts;
  pricetotal = [];
  ngOnInit() {
    // WoW animation
    this.wowService.init();
    // get data 
    this.http.getData().subscribe(res => {
      this.cards = res;

      // sort data random
      this.ranarr = this.cards.sort(() => Math.random() - .5).slice(0,4);
      // for (let item of this.cards) {
      //   if (this.ranarr.length < 4) {
      //     this.ranarr.push(item);
      //       // Math.floor(item.price);  
      //   }
      // }
    });


    // Save Product in local Storage 
    this.shoppingCart.saveInLocalStorge();
  }


  // Add Product to Shopping Cart
  onAddToCart(product) {
    this.shoppingCart.addCart(product)
  }
}

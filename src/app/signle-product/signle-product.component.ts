import { Component, OnInit } from '@angular/core';
import { ProudctsService } from '../proudcts.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgxStarRatingModule } from 'ngx-star-rating';


import { from } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-signle-product',
  templateUrl: './signle-product.component.html',
  styleUrls: ['./signle-product.component.scss']
})
export class SignleProductComponent implements OnInit {
  postItem;
  productFromLocal: any;
  quantity = 1;
  flag: boolean;

  constructor(
    private http: ProudctsService,
    private dataServ: ProudctsService,
    private single: ActivatedRoute,
    private _router: Router,
    private productData: ProudctsService,
    private shoppingCart: ShoppingCartService
  ) { }

  ngOnInit() {
    this.single.paramMap.subscribe(param => {
      this.getSinglePost(param.get('id'));
      console.log(param)
    });
      // console.log(param)
  
this.shoppingCart.saveInLocalStorge();
  }
  getSinglePost(postId) {
    this.productData.getSingleData(postId).subscribe(postObj => {
      this.postItem = postObj;
    })
  }


  onAddToCart(product) {
    
    this.flag = false
    for (let item of this.shoppingCart.products) {
      if (item.id === product.id) {
        item.qty += this.quantity;
        item.totalPrice = item.qty * product.price;
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart.products));
        this.flag = true;
      }
    }

    if (this.flag == false) {
      this.shoppingCart.products.push(product);
    }

    for(let item of this.shoppingCart.products){
      if(item.id === product.id){
        product['qty'] = this.quantity;
        product['totalPrice'] = product.qty * product.price;
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart.products));
        console.log(this.shoppingCart.products);
        
      }
    }
    this.shoppingCart.getAllQuantityProduct()

  }

  onDecrease(){
    if(this.quantity > 1){
      this.quantity--;

    }
  }

  onIncrease(){
    if(this.quantity < 15){
      this.quantity++;

    }
  }
}

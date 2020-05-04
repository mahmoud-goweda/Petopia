import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService implements OnInit {
  products: any = [];
  ourServices: any = [];
  flag: boolean;
  shipping: number = 0;
  shoppingCartData;
  user;
  // send Quantity of product to navbar
  private countNumber = new BehaviorSubject(0);
  sendCountNumber = this.countNumber.asObservable()
  showShipping: number;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
  }
  delete(id, body) {
    return this.http.put("http://localhost:3000/users/" + id, body);
  }
  updateUser(id, body) {
    return this.http.put("http://localhost:3000/users/" + id, body);
  }
  // Add product to shopping cart
  addCart(product) {
    this.flag = false
    for (let item of this.products) {
      if (item.id === product.id) {
        this.flag = true;
      }
    }

    // push one product to shopping cart
    if (this.flag == false) {
      product['qty'] = 0;
      this.products.push(product);

    }

    // increase quantity of product and save hem in local Storage
    for (let item of this.products) {
      if (item.id === product.id) {
        item.qty++
        product['totalPrice'] = product.qty * product.price;
        // console.log(this.products);
        localStorage.setItem('shoppingCart', JSON.stringify(this.products));
        this.getAllQuantityProduct()
        console.log(this.products);
      }
    }

    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    
    this.shoppingCartData = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(this.shoppingCartData);
    
    if (this.shoppingCartData != null && this.user != null) {
      this.user['products']=this.shoppingCartData;

      this.updateUser(this.user.id, this.user).subscribe(data=>{

      });
    }
 
  }

  // Save In LocalStorage
  saveInLocalStorge() {
    // check if shopping cart is empty or not 
    if (localStorage.getItem('shoppingCart') === null) {
      this.products = []
    } else {
      this.products = JSON.parse(localStorage.getItem('shoppingCart'));
      // console.log(this.products);
    }
  }





  // Count all Product quantity and Send to Navbar by BehaviorSubject
  getAllQuantityProduct() {

    // get product from localStorage 
    let shoppingCartProduct = JSON.parse(localStorage.getItem('shoppingCart'))
    let total = 0;

    // check if shopping cart in local storage or not 
    if (shoppingCartProduct) {
      for (let item of shoppingCartProduct) {
        total += item.qty;
        // console.log(total);
      }
      this.sendOurnumber(total);
    }else{
      total =0;
    console.log(total);
    this.sendOurnumber(total);

    }
    console.log(total);
    
    return total;
  }


  // send all Quantity to Navbar
  sendOurnumber(num) {
    this.countNumber.next(num);
  }


  // count All Price in shopping cart
  subTotalPrice() {
    let total = 0;
    let product = JSON.parse(localStorage.getItem('shoppingCart'));
    if (product) {
      for (let item of product) {
        total += Math.floor(item.totalPrice)
        console.log(total);
      }
    }
    return total;
  }

  totalPrice() {
    let product = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(product);
    
    if (this.subTotalPrice() >= 300 || product.length == 0) {
      this.showShipping = 0;

      this.shipping = 0;
      this.shipping += this.subTotalPrice();
    } else {
      this.showShipping = 50;

      this.shipping = 50;
      this.shipping += this.subTotalPrice()
      // console.log(this.shipping);

    }


    return this.shipping
  }

  totalServicesPrice() {
    let total = 0;
    let services = JSON.parse(sessionStorage.getItem('services'));
    if (services) {
      for (let item of services) {
        total += item.totalPrice;
        // console.log(total);
      }
    }

    return total;
  }


}

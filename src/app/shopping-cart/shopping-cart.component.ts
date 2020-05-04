import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productFromLocal: any = [];
  services: any = [];
  shippingPrice: number;
  totalPrice: number;
  subTotal: number;
  shoppingCartData;
  user;
  constructor(private shoppingCart: ShoppingCartService,
  private  route:Router) { }

  ngOnInit() {

    if (JSON.parse(localStorage.getItem('shoppingCart'))) {
      this.productFromLocal = JSON.parse(localStorage.getItem('shoppingCart'));
      // console.log(this.productFromLocal);

    }

    if (JSON.parse(sessionStorage.getItem('services'))) {
      this.services = JSON.parse(sessionStorage.getItem('services'));
    }

    // Show Sub Total price To user
    this.shoppingCart.subTotalPrice()
    this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

    // Show  Total price To user
    this.shoppingCart.totalPrice();
    this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

    // Show Shippnig Price
    this.shippingPrice = this.shoppingCart.showShipping

    // Save Product to Local Storage
    this.shoppingCart.saveInLocalStorge()

  }

  //  on increases button
  onIncrease(product) {
    for (let item of this.productFromLocal) {
      if (product.id === item.id && item.qty < 15) {
        item.qty++;
        item.totalPrice = product.qty * product.price;
        localStorage.setItem('shoppingCart', JSON.stringify(this.productFromLocal));

        // update quantity in navbar
        this.shoppingCart.getAllQuantityProduct();

        // Update Sub Total price To user
        this.shoppingCart.subTotalPrice()
        this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

        // Update  Total price To user
        this.shoppingCart.totalPrice();
        this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

        // Update Shippnig Price
        this.shippingPrice = this.shoppingCart.showShipping


      }
    }
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    
    this.shoppingCartData = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(this.shoppingCartData);
    
    if (this.shoppingCartData != null && this.user != null) {
      this.user['products']=this.shoppingCartData;

      this.shoppingCart.updateUser(this.user.id, this.user).subscribe(data=>{

      });
    }
  }
  //  on Decrease button
  onDecrease(product) {
    for (let item of this.productFromLocal) {
      if (product.id === item.id && item.qty > 1) {
        item.qty--;
        item.totalPrice = product.qty * product.price;
        localStorage.setItem('shoppingCart', JSON.stringify(this.productFromLocal))

        // update quantity in navbar
        this.shoppingCart.getAllQuantityProduct();

        // Update Sub Total price To user
        this.shoppingCart.subTotalPrice()
        this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

        // Update  Total price To user
        this.shoppingCart.totalPrice();
        this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

        // Update Shippnig Price
        this.shippingPrice = this.shoppingCart.showShipping
      }
    }
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    
    this.shoppingCartData = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(this.shoppingCartData);
    
    if (this.shoppingCartData != null && this.user != null) {
      this.user['products']=this.shoppingCartData;

      this.shoppingCart.updateUser(this.user.id, this.user).subscribe(data=>{

      });
    }
  }


  // On Delete Button
  onDelete(productID) {
    for (let item of this.productFromLocal) {
      if (item.id === productID) {
        this.productFromLocal.splice(this.productFromLocal.indexOf(item), 1);
        localStorage.setItem('shoppingCart', JSON.stringify(this.productFromLocal))

        // update quantity in navbar
        this.shoppingCart.getAllQuantityProduct();
        // Update Sub Total price To user
        this.shoppingCart.subTotalPrice()
        this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

        // Update  Total price To user
        this.shoppingCart.totalPrice();
        this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

        // Update Shippnig Price
        this.shippingPrice = this.shoppingCart.showShipping
      }
    }

    for (let item of this.shoppingCart.products) {
      if (item.id === productID) {
        this.shoppingCart.products.splice(this.shoppingCart.products.indexOf(item), 1);
        // console.log(this.shoppingCart.products);

      }
    }

    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    
    this.shoppingCartData = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(this.shoppingCartData);
    
    if (this.shoppingCartData != null && this.user != null) {
      this.user['products']=this.shoppingCartData;

      this.shoppingCart.updateUser(this.user.id, this.user).subscribe(data=>{

      });
    }

  }

  onDeleteServices(service) {
    for (let item of this.services) {
      if (item === service) {
        this.services.splice(this.services.indexOf(item), 1);
        sessionStorage.setItem('services', JSON.stringify(this.services))

        // Update Sub Total price To user
        this.shoppingCart.subTotalPrice()
        this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

        // Update  Total price To user
        this.shoppingCart.totalPrice();
        this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

        // Update Shippnig Price
        this.shippingPrice = this.shoppingCart.showShipping
      }
    }
  }


  continueShopping() {
    this.route.navigate(["/category/dog"])
  }

  onCheckOut(){
    let userLogin = JSON.parse(localStorage.getItem('user'))

    if(userLogin == null){
      this.route.navigate(['/checkout-login/check'])
    }else{
      this.route.navigate(['/check'])
    }
  }
}

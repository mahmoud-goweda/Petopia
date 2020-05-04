import { Component, OnInit } from '@angular/core';
import {Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgwWowService } from 'ngx-wow';
import { ApiService } from './../api.service';
import { ProudctsService } from '../proudcts.service';
import { ShoppingCartService } from '../shopping-cart.service';

export interface Product {
  category: string;
  kind: string;
  storeName: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mySearch = new FormControl('',Validators.required);
  filterAutoComolete: Observable<Product[]>;
  productsData:any[];
  filterd:any[];
  toggle;
  shoppingCartProduct;
  toggle3
  total;
  checkLogIn;
  logCheck: string;
  logedin: any;
  userName: any;
  
  private _filterStates(value: string): Product[] {
    const filterValue = value.toLowerCase();
    return this.productsData.filter(product =>  product.productTitle.toLowerCase().includes(filterValue));
  }
  
  
  public constructor(
    private searchServer: ProudctsService,
    private wowService: NgwWowService,
    private shoppingServices: ShoppingCartService,
    private login: ApiService, 
    private route: Router) 
    {
   
      this.searchServer.getData().subscribe((res:any[]) => this.productsData = res)
    this.filterAutoComolete = this.mySearch.valueChanges
      .pipe(
        startWith(''),
        map(product => product ? this._filterStates(product) : this.filterd)
      );
     
  }
  
  ngOnInit() {
    this.checkLogIn = localStorage.getItem('logedin')
    console.log(this.checkLogIn)
    this.login.teat.subscribe(logCheck => {
      console.log(logCheck)
      logCheck ? localStorage.setItem('logedin', JSON.stringify(this.logedin))
        : console.log(logCheck)
      this.checkLogIn = localStorage.getItem('logedin')
    })
    this.userName = JSON.parse(localStorage.getItem('user'));
  
    this.wowService.init();

    // count Quantity of product in navbar
    this.shoppingServices.getAllQuantityProduct()
    this.shoppingServices.sendCountNumber.subscribe(number => {
      this.total = number
    });
   
  }
  divToggle1(event) {
    this.toggle3 = !this.toggle3
  }
  droptoggle(event) {
    this.toggle = document.getElementById('navbarSupportedContent');
    this.toggle.style.display === "none"?
      this.toggle.style.display = "block":this.toggle.style.display = "none";
  }
  onSubmit(form) {
    console.log(form.value);
    this.searchServer.getResult(form.value)
    this.mySearch.setValue('')
  }
  

  userLogout() {
    localStorage.clear();
    this.shoppingServices.products = [];
    console.log(this.shoppingServices.products);
    this.checkLogIn = localStorage.getItem('logedin')
    this.shoppingServices.getAllQuantityProduct()
    this.route.navigate(['/']);
  }
}




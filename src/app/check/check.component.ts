import { ApiService } from './../api.service';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingCartService } from './../shopping-cart.service'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  myForm: FormGroup;
  checkoutData;
  checkoutDataUser = {}
  productFromLocal: any;
  total
  services: any;
  mytotalPrice
  constructor(private fb: FormBuilder,
    private checkout: ApiService,
    private router: Router,
    private shopping: ShoppingCartService) { }


  ngOnInit() {
    this.productFromLocal = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(this.productFromLocal);
    this.total = this.shopping.totalPrice() + this.shopping.totalServicesPrice();

    this.services = JSON.parse(sessionStorage.getItem('services'));
    console.log(this.services);
   
    this.checkout.sendpricedata(this.total)
console.log(this.total)



    this.myForm = this.fb.group({
      fName: ['', [Validators.required, Validators.pattern('[a-z]{2,12}')]],
      lName: ['', [Validators.required, Validators.pattern('[a-z]{2,12}')]],
      city: ['', [Validators.required, Validators.pattern('[a-z]{2,12}')]],
      email: ['', [Validators.required, Validators.pattern(/\w{1,}@[a-z]{3,}\.com/)]],
      mobile: ['', [Validators.required, Validators.pattern('01[0-9]{9}')]],
      address: ['', Validators.required],
      postalCode: ["", [Validators.required, Validators.pattern('[0-9]{6}')]]
    });
  }
  onSubmit(form) {
    console.log(form.value)
    this.checkoutData = form.value
    this.checkout.sendgetdata(form.value);
    console.log(form.value);
    
    localStorage.setItem('checoutInfo', JSON.stringify(form.value))
    this.router.navigate(['/pay'])
    console.log(form.value)
  }


}

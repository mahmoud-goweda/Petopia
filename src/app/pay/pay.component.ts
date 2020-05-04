import { ApiService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  
  // formMethod = document.getElementById("x").setAttribute("disabled", "false");

  myForm: FormGroup;
price=800
  userData ;
  products
  constructor(private payment:  ApiService,private fb: FormBuilder,private shopping: ShoppingCartService) {
    // this.payment.getConfig().subscribe(data=>{
    //   this.products =data
    //   })
   }
    totalPricePay
  ngOnInit() {
     this.userData = JSON.parse(localStorage.getItem('checoutInfo'));
     this.totalPricePay = this.shopping.totalPrice() + this.shopping.totalServicesPrice();


      this.myForm = this.fb.group({
        CardNumber: ['', [Validators.required, Validators.pattern('[0-9]{14}')]],
        CardHolders: ['', [Validators.required, Validators.pattern('[a-z]{5,15}')]],
        year: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
        month: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
        day: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
        checkbox:[]
  })
  this.myForm.disable()

}

onSubmit(form){
console.log(form.value)
}

undisable(hoda){
  if(hoda=='credit'){
  this.myForm.enable()
  console.log(hoda)
  // this.myForm["checkbox"].enable()
  }else{
  this.myForm.disable()
  }
}

}

import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  checkDAta = [];
  hiden = true;
  err;
  userData;
  y;
  shoppingCartData;
  x;
  logedin: boolean;
  checoutLog: any;
  constructor(private gitCheckout :ActivatedRoute,private formBulider: FormBuilder, private validData: ApiService, private route: Router, private cartServices: ShoppingCartService) { }
  hidden(){

    this.hiden = !this.hiden
  }
  ngOnInit() {
    


    this.x = localStorage.getItem('logedin')
    console.log(this.x);

    this.login = this.formBulider.group({
      email: ['', [Validators.required, Validators.pattern(/\w{1,}@[a-z]{3,}\.com/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{8,}[\W]{0,}$/)]]
    })
    this.validData.getUserData().subscribe((data: []) => {
      this.checkDAta = data
    })
  }
  onLoginSubmit(form) {
    if (form.valid) {
      for (let i = 0; i < this.checkDAta.length; i++) {
        if (form.value.email == this.checkDAta[i].email && form.value.password == this.checkDAta[i].password) {
          console.log(this.checkDAta[i]);
          localStorage.setItem('user', JSON.stringify(this.checkDAta[i]));
          this.logedin = true
          this.validData.localNex(this.logedin)
          this.userData = JSON.parse(localStorage.getItem('user'));

          console.log(this.userData);
          this.shoppingCartData = JSON.parse(localStorage.getItem('shoppingCart'));
          console.log(this.shoppingCartData);
          if (this.shoppingCartData != null) {
            this.userData['products'] = this.shoppingCartData;
            for (let i = 0; i < this.shoppingCartData.length; i++) {
              this.validData.updateUser(this.userData.id, this.userData).subscribe(data => {
                let d = data;
                console.log(d);
              });
            }
          } else if (this.shoppingCartData == null && this.userData.products != null) {
            localStorage.setItem('shoppingCart', JSON.stringify(this.userData.products))
            this.cartServices.getAllQuantityProduct()
          } else {
            console.log('no data found');

          }
          this.gitCheckout.params.subscribe(param=>{
            this.checoutLog = param

            if(param.data ==='check'){
              this.route.navigate(['/check']);
            
            }else{

              this.route.navigate(['/']);
            }
          })


          
          document.getElementById('submitAlert').style.display = 'none';
        } else {
          document.getElementById('submitAlert').style.display = 'block';
        }
      }
    }
  }


  onRegister(){
    this.gitCheckout.params.subscribe(param=>{
      this.checoutLog = param

      if(param.data ==='check'){
        this.route.navigate(['/checkoutRegister/check']);
      
      }
    })

  }
}

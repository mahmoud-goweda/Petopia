import { ShoppingCartService } from './../shopping-cart.service';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  allDataOfUsers;
  flag;
  registrationForm: FormGroup;
  getFile: File;
  shoppingCartData;
  userData;
  logedin: boolean;
  dataFromJson;
  x;
  hidenConfirm=true
  hiden: boolean=true
  constructor(private registerBuild: FormBuilder, private http: ApiService, private route: Router
    , private cartServices: ShoppingCartService,private gitCheckout :ActivatedRoute) { }

  ngOnInit() {
    this.registrationForm = this.registerBuild.group({
      name: ['', [Validators.required, Validators.pattern(/^(?=.*\w)[A-z0-9]{4,10}$/)]],
      email: ['', [Validators.required, Validators.pattern(/\w{1,}@[a-z]{3,}\.com/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{8,}[\W]{0,}$/)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.match('password', 'confirmPassword'),
    });

    this.http.getUserData().subscribe(data => {
      this.allDataOfUsers = data
    });
  }
  hidden(){

    this.hiden = !this.hiden
  }
  hide(){
this.hidenConfirm=!this.hidenConfirm
  }
  match(password, confirmPassword) {
    return (registrationForm: FormGroup) => {
      let validPassword = registrationForm.controls[password];
      let validConfirmPassword = registrationForm.controls[confirmPassword];
      if (validPassword.value !== validConfirmPassword.value) {
        validConfirmPassword.setErrors({ match: true });
      } else {
        validConfirmPassword.setErrors(null)
      }
    }
  }
  onregisterSubmit(registrationForm) {

    if (registrationForm.valid == true) {
      this.flag = false;
      for (let i = 0; i < this.allDataOfUsers.length; i++) {
        if (registrationForm.value.email === this.allDataOfUsers[i].email) {
          this.flag = true
        }
      }
      this.logedin =true
      this.test(registrationForm)
      this.http.localNex(this.logedin)
    }
  }

  test(registrationForm) {
    console.log('inside test function');
    if (this.flag == false) {
      this.http.postData(registrationForm.value).subscribe(data => {
        let userData = data;
        localStorage.setItem('user',JSON.stringify(userData))

        console.log(userData);
        
      })
      this.allDataOfUsers.push(registrationForm.value);
      this.gitCheckout.params.subscribe(param=>{
        if(param.data ==='check'){
          this.route.navigate(['/check']); 
        }else{

          this.route.navigate(['/profile']);
        }
      })
      localStorage.setItem('user',JSON.stringify(registrationForm.value)); }
  }

      // this.logedin = true
      // this.http.localNex(this.logedin)
      // this.userData = JSON.parse(localStorage.getItem('user'));
      // console.log(this.userData);
      // this.shoppingCartData = JSON.parse(localStorage.getItem('shoppingCart'));
      // console.log(this.shoppingCartData);
     
      // if (this.shoppingCartData != null) {
      //   this.userData['products'] = this.shoppingCartData;
      //   for (let i = 0; i < this.shoppingCartData.length; i++) {
      //     this.http.updateUser(this.userData.id, this.userData).subscribe(data => {
      //       let d = data;
      //       console.log(d);
      //     });
      //   }
      // } else if (this.shoppingCartData == null && this.userData.products != null) {
      //   localStorage.setItem('shoppingCart', JSON.stringify(this.userData.products))
      //   this.cartServices.getAllQuantityProduct()
      // } else {
      //   console.log('no data found');
      // }
    }
//   }
// }

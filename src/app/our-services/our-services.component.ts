import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit, OnChanges {
  minDate: Date;
  ngOnChanges() {
    this.totalPrice()
  }
  servicesForm: FormGroup;
  servicesArray: any = [];
  total = 0;
  

  data = [
    {
      id: 1,
      name: 'Grooming',
      price: 250
    },
    {
      id: 2,
      name: 'Dry & Bath',
      price: 100
    },
    {
      id: 2,
      name: 'Styling',
      price: 150
    }
  ]

  constructor(
    private formBulider: FormBuilder,
    private services: ShoppingCartService,
    private route: Router
  ) {
    this.minDate = new Date();
  }

  ngOnInit() {

    this.servicesForm = this.formBulider.group({
      cat: ['0'],
      dog: ['0'],
      date: ['', Validators.required],
      checkServeices: this.formBulider.array([], [Validators.required])

    });
    this.total = this.totalPrice();
    this.saveInSessionStorage();
  }



  onChange(event) {
    this.servicesArray = this.servicesForm.get('checkServeices');

    if (event.target.checked) {

      let services = {
        name: event.target.value,
        price: event.target.name
      }
      this.servicesArray.push(new FormControl(services));
      
      this.totalPrice()
      this.total = this.totalPrice()
    } else {
      let i: number = 0;
      this.servicesArray.controls.forEach(item => {
        if (item.value.name === event.target.value) {
          this.servicesArray.removeAt(i);
          sessionStorage.setItem('checkServices', JSON.stringify(this.servicesArray.value))

          this.totalPrice()
          this.total = this.totalPrice()
        }
        i++
      })
    }
    // console.log(this.servicesArray.value); 
  }

  onSubmit(form) {
    if (form.value.dog > 0 || form.value.cat > 0) {
      if(form.valid){
        
        form.value['qty'] = 1;
        form.value['totalPrice'] = this.total;
        this.services.ourServices.push(form.value);
        sessionStorage.setItem('services', JSON.stringify(this.services.ourServices))
        // this.services.countQuantityOFServices()
        this.route.navigate(['/shoppingCart'])
      


      }

    }

  }

  totalPrice() {
    let total = 0;

    if (this.servicesArray.length > 0) {
      console.log(this.servicesArray.value);
      
      for (let item of this.servicesArray.value) {
        total += item.price * (this.servicesForm.value.dog + this.servicesForm.value.cat);
        console.log(total);
      }
    }

    return total;
  }

  onChangevalue() {
      if(this.servicesForm.value.dog > 0 || this.servicesForm.value.cat > 0){
        this.totalPrice()
        this.total = this.totalPrice();
      }else{
        this.total = 0;
    }
  }


  saveInSessionStorage() {
    // check if shopping cart is empty or not 
    if (sessionStorage.getItem('services') === null) {
      this.services.ourServices = []
    } else {
      this.services.ourServices = JSON.parse(sessionStorage.getItem('services'));
      //  console.log( this.products);
    }
  }


}

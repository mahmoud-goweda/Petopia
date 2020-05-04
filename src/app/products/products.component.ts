import { Component, OnInit } from '@angular/core';
import { ProudctsService } from '../proudcts.service'
import { ActivatedRoute } from "@angular/router";
import { ItemsKindService } from '../items-kind.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { CheckBoxFilterService } from '../check-box-filter.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsData;
  dogData = [];
  flag
  returnedArray: any;
  checkBoxkind=[];
  checkBoxStore=[];
  fiterCheck: any[];
  returnedFilterArray: any[];
  counter: number = 0
  toggle: any;

  constructor(
    private dogServe: ProudctsService,
    private route: ActivatedRoute,
    private item: ItemsKindService,
    private shoppingCart: ShoppingCartService,
    private checkfilter:CheckBoxFilterService
  ) {
    this.dogServe.getData().subscribe(data => {
      this.productsData = data;
      console.log(this.productsData);
      this.route.params.subscribe(params => {
        let uncheck = Array.from(document.getElementsByClassName('check'));
      if( params){
        this.checkfilter.uncCheck(uncheck)
          this.counter = 0
       this.checkfilter.updateData.splice(0, this.checkfilter.updateData.length);
      }
        this.checkfilter.searchDataResult =this.dogData = this.productsData.filter(item => item.category.includes(params.category));
        // this.item.mydata(this.dogData)
        this.returnedArray = this.dogData.slice(0, 9);
         console.log(this.returnedArray)
        for(let item of this.productsData){
        
          if(this.checkBoxkind.indexOf(item.kind)== -1){
            this.checkBoxkind.push(item.kind)
          }
          if(this.checkBoxStore.indexOf(item.storeName)=== -1){
            this.checkBoxStore.push(item.storeName)
          }  
        }

        console.log(this.dogData)
      })



    })
  }


  ngOnInit() {
    this.checkfilter.filterBehaviorSub.subscribe((dataa) =>{ this.fiterCheck = dataa
      console.log(this.fiterCheck)
      console.log(typeof(this.fiterCheck)
      )
      this.returnedFilterArray = this.fiterCheck.slice(0, 9);
      console.log(this.fiterCheck)
      console.log(this.returnedFilterArray )  
    } )
    this.shoppingCart.saveInLocalStorge()
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.dogData.slice(startItem, endItem);
    this.returnedFilterArray=this.fiterCheck.slice(startItem, endItem);
    window.scroll(0,0);

  }

  
  filterGetKind = event=>{event.target.checked? this.counter++:this.counter--;
   
    this.checkfilter.getKind(event)
  }
 
  filterGetStore = even =>{even.target.checked? this.counter++:this.counter--;
    this.checkfilter.getStoreName(even);
  }
   sortData(val){
    this.checkfilter.sor(val,this.returnedArray)
    this.checkfilter.sor(val,this.returnedFilterArray)
   }

  onAddToCart(product) {
    this.shoppingCart.addCart(product)
  }
  droptoggle1(event) {
    this.toggle = document.getElementById('navbarSupportedContent2');
    if (this.toggle.style.display === "none") {
      this.toggle.style.display = "block";
    }
    else {
      this.toggle.style.display = "none";
    }
  }

}

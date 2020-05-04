import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemsKindService} from '../../items-kind.service'
import { ProudctsService } from 'src/app/proudcts.service';
import { CheckBoxFilterService } from '../../check-box-filter.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-pro-type',
  templateUrl: './pro-type.component.html',
  styleUrls: ['./pro-type.component.scss']
})
export class ProTypeComponent implements OnInit {
kindFilterData =[];
  kindData =[];
mykind=[];
  counter=0;
  checkBoxStore=[];
  returnedArray =[];
  returnedFilterArray=[];
  fiterCheck=[];
  toggle: HTMLElement;

  constructor(private prouductsData:ProudctsService,
     private rout: ActivatedRoute,
     private checkfilterKind : CheckBoxFilterService,
     private shoppingCart: ShoppingCartService
     ) {
    this.prouductsData.getData().subscribe((data:[]) =>{ this.kindData=data;
      this.rout.params.subscribe( params => {   this.checkfilterKind.searchDataResult =this.kindFilterData= this.kindData.filter(item => item.kind.includes(params.kind) && item.category.includes(params.category))
         let uncheck = Array.from(document.getElementsByClassName('check'));
      if( params){
this.checkfilterKind.uncCheck(uncheck)
this.counter =0
      
       this.checkfilterKind.updateData.splice(0, this.checkfilterKind.updateData.length);
      }
      // = this.kindData.filter(item => item.category.includes(params.category));
        // this.item.mydata(this.dogData)
        this.returnedArray = this.kindFilterData.slice(0, 9);
         console.log(this.returnedArray)
        for(let item of this.kindData){
        
          
          if(this.checkBoxStore.indexOf(item.storeName)=== -1){
            this.checkBoxStore.push(item.storeName)
          }  
        }

        console.log(this.kindFilterData)
         console.log(this.mykind)
        console.log(params.kind)
        console.log(this.kindData)
    })
  })
   }

   ngOnInit() {
    this.checkfilterKind.filterBehaviorSub.subscribe((dataa) =>{ this.fiterCheck = dataa
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
    this.returnedArray = this.kindFilterData.slice(startItem, endItem);
    this.returnedFilterArray=this.fiterCheck.slice(startItem, endItem);
    window.scroll(0,0);

  }

 
 
  filterGetStore = even =>{even.target.checked? this.counter++:this.counter--;
    this.checkfilterKind.getStoreName(even);
  }
   sortData(val){
    this.checkfilterKind.sor(val,this.returnedArray)
    this.checkfilterKind.sor(val,this.returnedFilterArray)
   }

   onAddToCart(product) {
    this.shoppingCart.addCart(product)
  }
  droptoggle1(event) {
    this.toggle = document.getElementById('navbarSupportedContent3');
    if (this.toggle.style.display === "none") {
      this.toggle.style.display = "block";
    }
    else {
      this.toggle.style.display = "none";
    }
  }

}
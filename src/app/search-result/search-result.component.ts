import { Component, OnInit, } from '@angular/core';
import { ProudctsService } from '../proudcts.service';
import { ShoppingCartService } from '../shopping-cart.service';
// import {CheckboxFilterService} from '../checkbox-filter.service'
import { CheckBoxFilterService } from '../check-box-filter.service'
import { PageChangedEvent } from 'ngx-bootstrap/pagination';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchValue
  returnedFilterArray;
  y: number = 4;
  max: number = 5;
  apiData = [];
  searchData = [];
  fiterCheck: any[]
  counter = 0


  // falseCheck=


  checkBoxCat = [];
  checkBoxkind = [];
  checkBoxStore = [];
  returnedArray: any[];
  toggle: HTMLElement;
  onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    
}
  constructor(private resultServer: ProudctsService, private filterService: CheckBoxFilterService, private cartServices: ShoppingCartService) {
    this.resultServer.getSearch.subscribe((data) => {
      let uncheck = Array.from(document.getElementsByClassName('check'));
      if (this.searchValue) {
        this.filterService.uncCheck(uncheck)
        this.counter = 0
        this.filterService.updateData.splice(0, this.filterService.updateData.length);
      }
      console.log(data); // And he have data here too!
      this.searchValue = data;
      console.log(this.searchValue)

      this.resultServer.getData().subscribe((res: []) => {
        console.log(res)
        this.apiData = res;
        this.filterService.searchDataResult = this.searchData = (this.searchValue) ?
          this.apiData.filter(item => item.productTitle.toLowerCase().includes(this.searchValue.toLowerCase())||
          item.kind.toLowerCase().includes(this.searchValue.toLowerCase()) || item.storeName.toLowerCase().includes(this.searchValue.toLowerCase())) :
          this.searchData;
        console.log(this.searchData)
        this.returnedArray = this.searchData.slice(0, 9);

        for (let item of this.apiData) {
          if (this.checkBoxCat.indexOf(item.category) === -1) {

            this.checkBoxCat.push(item.category)
          }
          if (this.checkBoxkind.indexOf(item.kind) == -1) {
            this.checkBoxkind.push(item.kind)
          }
          if (this.checkBoxStore.indexOf(item.storeName) === -1) {
            this.checkBoxStore.push(item.storeName)
          }
        }
      })
    });

    // this.fiterCheck = this.filterService.filterdData;
  }


  ngOnInit() {
    console.log(this.counter)
    this.filterService.filterBehaviorSub.subscribe((dataa) => {
    this.fiterCheck = dataa
      console.log(this.fiterCheck)
      console.log(typeof (this.fiterCheck)
      )
      this.returnedFilterArray = this.fiterCheck.slice(0, 9);
      console.log(this.fiterCheck)
      console.log(this.returnedFilterArray)
    })

    this.cartServices.saveInLocalStorge()

this.cartServices.saveInLocalStorge()

  }

  pageChanged(event: PageChangedEvent): void {
    
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.searchData.slice(startItem, endItem);
    this.returnedFilterArray = this.fiterCheck.slice(startItem, endItem);
    window.scroll(0,0);

  }



  addToCart(product) {
    this.cartServices.addCart(product)
  }



  filterGetKind = event => {
    event.target.checked ? this.counter++ : this.counter--;

    this.filterService.getKind(event)
  }
  filterGetCat = eve => {
    eve.target.checked ? this.counter++ : this.counter--;
    this.filterService.getCatogery(eve);
  }
  filterGetStore = even => {
    even.target.checked ? this.counter++ : this.counter--;
    this.filterService.getStoreName(even);
  }
  sortData(val) {
    this.filterService.sor(val, this.returnedArray)
    this.filterService.sor(val, this.returnedFilterArray)
  }

  droptoggle1(event) {
    this.toggle = document.getElementById('navbarSupportedContent1');
    if (this.toggle.style.display === "none") {
      this.toggle.style.display = "block";
    }
    else {
      this.toggle.style.display = "none";
    }
  }
}

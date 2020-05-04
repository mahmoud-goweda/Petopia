import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProudctsService } from '../../proudcts.service';
  


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

mySearch:FormGroup
productsData;
filterd;
searchResult;


public constructor(private fb: FormBuilder,private searchServer:ProudctsService) {
  this.searchServer.getData().subscribe(res => this.searchResult = this.productsData = res)
  
}
onSubmit(formGroup){
  this.searchResult = (formGroup)?
  this.productsData.filter(item =>  item.productTitle.toLowerCase().includes(formGroup.toLowerCase()) ) :
  this.productsData;
  console.log( this.searchResult)

  this.searchServer.getResult(this.searchResult)
  
}
  
  ngOnInit() {
    this.mySearch = this.fb.group({
    search:''
    });

  }

}


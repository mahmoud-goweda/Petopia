import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CheckBoxFilterService {
  private filterBehavior =  new BehaviorSubject([]);
  filterBehaviorSub =this.filterBehavior.asObservable()

  searchDataResult =[];
  storeName =[];
  kind = [];
  catogery = [];
  count = 0;
  checks = [];

  allArr = [this.storeName, this.kind, this.catogery];
  updateData = [];
  filterdData = [];
  sendResult = data =>this.filterBehavior.next(data);
  uncCheck(calssArr){
    let item:any
    for (  item of calssArr){
      item.checked = false
   }
  }
  runs = () => {
    for (let item of this.allArr) {
      this.updateData.indexOf(item)!=-1? this.updateData.splice(this.updateData.indexOf(item),1,item):
    item.length > 0? this.updateData.push(item):
    console.log(this.updateData)
    console.log(this.updateData.indexOf(item))
  }
    for (let it of this.updateData) {
      it.length === 0? this.updateData.splice(this.updateData.indexOf(it), 1)
      :console.log(this.updateData);}
    this.count > 0?this.filterdData = this.updateData.reduce((a, c) => a.filter(i => c.includes(i)))
      :console.log(this.filterdData);
      this.sendResult(this.filterdData)
    }
  constructor() {
    
   }
 
  ////// start///// add fiterd data to storeName array ////// 
  getStoreName = even => {
    console.log(even, even.target.name)
    
    for (let i in this.searchDataResult) {
      if (this.searchDataResult[i].storeName.toLowerCase() === even.target.name.toLowerCase() && even.target.checked === true) {
        this.storeName.push(this.searchDataResult[i])
        this.count++
      } else if (even.target.checked === false) {
      
        for ( let j =0; j<this.storeName.length; j++) {
          console.log(typeof(j))
          if (this.storeName[j].storeName.toLowerCase() === even.target.name.toLowerCase()) {
            this.storeName.splice(j, 1)
            this.count--
          }
        }
      }
    }
    this.runs()
    console.log(this.searchDataResult)
    console.log(this.storeName)
    console.log(this.allArr)
  }
///////////end/////////////////////
/////////// start///// add filterd data to kind array ////// 
  getKind(eventKind) {
    for (let i = 0; i < this.searchDataResult.length; i++) {
      if (this.searchDataResult[i].kind === eventKind.target.name && eventKind.target.checked === true) {
        this.kind.push(this.searchDataResult[i])
        this.count++
      } else if (eventKind.target.checked === false) {
        for (let i = 0; i < this.kind.length; i++) {
          if (this.kind[i].kind === eventKind.target.name) {
            this.kind.splice(i, 1)
            this.count--
          }
        }
      }
    }
    this.runs()
    console.log(this.kind)
    console.log(this.allArr)

  }
  ////////////////////////end//////////////////////////////
  ////// start///// add fiterd data to catogery array ////// 
  getCatogery(eve) {
    console.log(eve.target.checked,eve.target.name)
    for (let i = 0; i < this.searchDataResult.length; i++) {
      if (this.searchDataResult[i].category === eve.target.name && eve.target.checked === true) {
        this.catogery.push(this.searchDataResult[i])
        this.count++
      } else if (eve.target.checked === false) {
        for (let i = 0; i < this.catogery.length; i++) {
          if (this.catogery[i].category === eve.target.name) {
            this.catogery.splice(i, 1)
            this.count--
          }
        }
      }
    }
    this.runs()
    console.log(this.catogery)
    console.log(this.filterdData)
  }
  fals(far){
    for(let item of far){
      item.checked = false
      console.log(item.checked)
    }
  }
  sor(val,arr){
    console.log(val.target.value)
    val.target.value==1?
    arr.sort((a, b)=> {
     var nameA = a.productTitle.toUpperCase(); // ignore upper and lowercase
     var nameB = b.productTitle.toUpperCase(); // ignore upper and lowercase
     if (nameA < nameB) {
       return -1;
     }
     if (nameA > nameB) {
       return 1;
     }
     return 0;
   })
   :val.target.value ==2?arr.sort((a, b)=> {
    var nameA = a.productTitle.toUpperCase(); // ignore upper and lowercase
    var nameB = b.productTitle.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  }):val.target.value ==3? arr.sort((a, b)=> {
     a =a.price
     b =b.price
     return a - b;
   }):val.target.value ==4? arr.sort((a, b)=> {
    a =a.price
    b =b.price
    return b - a;
  }):val.target.value==0? arr.sort(() => Math.random() - 0.5)
:console.log(arr)
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  posts;
  count = 0;
  num: Number;
  myArr = [];
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();
  
  constructor(private HttpClin: HttpClient) { }
   getData() {
    return this.HttpClin.get(" http://localhost:3000/blogs")
  
  }
  getRandom(){
    return this.HttpClin.get("http://localhost:3000/blogs");
  }
  getSingleData(id) {
    return this.HttpClin.get("http://localhost:3000/blogs/"+id)
  }
  getSlider(){
    return this.HttpClin.get(" http://localhost:3000/sliders");
  }
  getCount() {
    this.count++;
  }
  changeMessage(count: number) {
    this.messageSource.next(count)
  }

}

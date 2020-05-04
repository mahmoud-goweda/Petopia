import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProudctsService {
  private sendSearchResult = new BehaviorSubject('');
  getSearch = this.sendSearchResult.asObservable()
  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get("http://localhost:3000/products")
  }
  getSingleData(id) {
    return this.http.get("http://localhost:3000/products/"+id)
  }
  
  getResult(data:string) {
    console.log(data);          

    this.sendSearchResult.next(data);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemsKindService {
  private sendKind = new BehaviorSubject([]);
  getKind = this.sendKind.asObservable()
  constructor() { }

  mydata(data){
    this.sendKind.next(data)
  
  }
}


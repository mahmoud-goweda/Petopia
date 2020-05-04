import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-shipping-area',
  templateUrl: './shipping-area.component.html',
  styleUrls: ['./shipping-area.component.scss']
})
export class ShippingAreaComponent implements OnInit {

  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init();
  }

}

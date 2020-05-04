import { Component, OnInit,TemplateRef  } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.scss']
})
export class GalaryComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private wowService: NgwWowService, private modalService: BsModalService,private http: BlogServiceService) { }
  posts;
  ngOnInit() {
    this.wowService.init();
    // this.http.getGalary().subscribe(res => {
    //   this.posts = res;
    //   // console.log(this.posts);

    // });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static'
    });


}

}
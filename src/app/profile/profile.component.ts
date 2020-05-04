import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  fileData: File = null;
  userImg;
  userFromJson;
  userEmail;
  userName;
  gitUser;
  comingUser;
  comingUserFromJson;
  url = "assets/profile-placeholder.png";
  constructor(private http: ApiService, private userData: ApiService, private route: Router) { }
  ngOnInit() {
    this.comingUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.comingUser);

    this.http.getSingleUser(this.comingUser).subscribe(data => {
      this.userFromJson = data
      console.log(this.userFromJson);
      for (let i = 0; i < this.userFromJson.length; i++) {
        if (this.comingUser.email == this.userFromJson[i].email) {
          this.userEmail = this.userFromJson[i].email;
          this.userName = this.userFromJson[i].name;
          console.log(this.userFromJson[i].email);
        }
      }
    });

  }

  callForImage() {
  }
  readUrl(e) {
    this.fileData = <File>e.target.files[0];
    this.previw()
  }
  previw() {
    let mimetype = this.fileData.type;
    if (mimetype.match(/image\/*/) == null)
      return;
    this.comingUser = JSON.parse(localStorage.getItem('user'));
    let reader = new FileReader()
    reader.readAsDataURL(this.fileData)
    reader.onload = () => {
      this.userImg = reader.result
      console.log(this.userImg);
      this.userFromJson.image = reader.result;
      this.comingUser.img = this.userImg
      console.log(this.comingUser.id);
      this.http.updateUser(this.comingUser.id, this.comingUser).subscribe(data => {
      })
      localStorage.setItem("user",JSON.stringify(this.comingUser));
    }
  }

  onEdit(){
    this.route.navigate(['/edit-profile'])
  }
}

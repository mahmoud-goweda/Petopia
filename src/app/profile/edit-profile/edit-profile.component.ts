import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  editProfile: FormGroup;
  user: any;
  constructor(private FormBuilder: FormBuilder, private userServices: ApiService, private route: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.editProfile = this.FormBuilder.group({
      name: [this.user.name, [Validators.required, Validators.pattern(/^(?=.*\w)[A-z0-9]{4,10}$/)]],
      email: [this.user.email, [Validators.required, Validators.pattern(/\w{1,}@[a-z]{3,}\.com/)]],
      password: ['', Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{8,}[\W]{0,}$/)]

    })

  }

  onEditProfile(form) {
    if (form.valid) {
    
        this.user.name = this.editProfile.value.name;
        this.user.email = this.editProfile.value.email;
        if (this.editProfile.value.password === '') {
          this.user.password = this.user.password;
          localStorage.setItem('user', JSON.stringify(this.user))

          this.userServices.updateUser(this.user.id, this.user).subscribe(data => {
            console.log(data);

          })
          this.route.navigate(['/profile'])

        } else {
          this.user.password = this.editProfile.value.password;
          this.user.confirmPassword = this.editProfile.value.password;
          localStorage.setItem('user', JSON.stringify(this.user))
          this.userServices.updateUser(this.user.id, this.user).subscribe(data => {
            console.log(data);

          })
          this.route.navigate(['/profile'])
        }  
    }




  }

}

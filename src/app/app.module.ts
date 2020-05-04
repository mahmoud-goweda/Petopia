import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//importing guard service
import { AuthGuardService } from './guards/auth-guard.service'
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxStarRatingModule } from 'ngx-star-rating';
// import { NgxNavbarModule } from 'ngx-bootstrap-navbar';                                  
import { MaterialAnglur } from './material'
import { NavbarComponent } from './navbar/navbar.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { FooterComponent } from './footer/footer.component';
import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ProductsComponent } from './products/products.component';
import { ProTypeComponent } from './products/pro-type/pro-type.component';
import { SearchComponent } from './navbar/search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProuductRandomComponent } from './prouduct-random/prouduct-random.component';
import { SignleProductComponent } from './signle-product/signle-product.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgwWowModule } from 'ngx-wow';



import { NgxSpinnerModule } from "ngx-spinner";
import { FilterResultPipe } from './filter-result.pipe';
import { RandomBlogComponent } from './random-blog/random-blog.component';
import { GalaryComponent } from './galary/galary.component';
import { OfferProductComponent } from './offer-product/offer-product.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';

import { OurServicesComponent } from './our-services/our-services.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
// import {PaginationModule} from 'ngx-pagination-bootstrap'
import { CheckComponent } from './check/check.component';
import { PayComponent } from './pay/pay.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FinishComponent } from './finish/finish.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroHeaderComponent,
    FooterComponent,
    ShippingAreaComponent,
    BlogComponent,
    SingleBlogComponent,
    ProductsComponent,
    ProTypeComponent,
    SearchComponent,
    SearchResultComponent,
    FilterResultPipe,
    HomeComponent,
    ServicesComponent,
    ProuductRandomComponent,
    SignleProductComponent,
    RandomBlogComponent,
    GalaryComponent,
    OfferProductComponent,
    LoginComponent,
    RegisterationComponent,
    ShoppingCartComponent,
    OurServicesComponent,
    CheckComponent,
    PayComponent,
    ProfileComponent,
    EditProfileComponent,
    NotfoundComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    // CarouselModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    NgxStarRatingModule,
    RatingModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    MaterialAnglur,
    NgwWowModule,
    ModalModule.forRoot(),
    NgwWowModule,
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    // PaginationModule

  ],

  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

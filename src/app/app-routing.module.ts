import { FinishComponent } from './finish/finish.component';
import { ProfileComponent } from './profile/profile.component';
import { PayComponent } from './pay/pay.component';
import { NgModule } from '@angular/core';
// router guard
import { AuthGuardService } from './guards/auth-guard.service'
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { ProTypeComponent } from './products/pro-type/pro-type.component'
import { RegisterationComponent } from './registeration/registeration.component'
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component'
import { SearchResultComponent } from './search-result/search-result.component'
import { RandomBlogComponent } from './random-blog/random-blog.component'
import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { HomeComponent } from './home/home.component';
import { ProuductRandomComponent } from './prouduct-random/prouduct-random.component';
import { SignleProductComponent } from './signle-product/signle-product.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckComponent } from './check/check.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
//  import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pay', component: PayComponent ,canActivate:[AuthGuardService]},
  { path: 'finish', component: FinishComponent},

  { path: 'signin', component: LoginComponent },
  { path: 'checkout-login/:data', component: LoginComponent },
  { path: 'profile', component:ProfileComponent,canActivate:[AuthGuardService] }, 
  { path: 'edit-profile', component: EditProfileComponent}, 

  { path: 'signup', component: RegisterationComponent }, 
  { path: 'checkoutRegister/:data', component: RegisterationComponent }, 
  { path: 'blog', component: BlogComponent },
  // { path: "shoppingCart", component: ShoppingCartComponent },
  { path: 'shipping', component: ShippingAreaComponent },
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: 'result', component: SearchResultComponent},
  { path: 'randomProduct', component: ProuductRandomComponent },
  { path: 'randomProduct/:id', component: SignleProductComponent },
  { path: 'RandomBlog', component: RandomBlogComponent },
  { path: "RandomBlog/:id", component: SingleBlogComponent },
  {path:'check',component:CheckComponent ,canActivate:[AuthGuardService]},
  { path: "ourServices", component: OurServicesComponent },
  {path:'shoppingCart', component:ShoppingCartComponent},
  {path:'OfferProduct/:id', component: SignleProductComponent },
  {path:"category/:category",component:ProductsComponent},
  {path:"category/:category/:kind",component:ProTypeComponent},
  {path:":category/:id",component:SignleProductComponent},
  {path:'**', component:NotfoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:false,
    scrollPositionRestoration:'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

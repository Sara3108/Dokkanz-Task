import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './Components/default/default.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SubCategoriesComponent } from './Components/sub-categories/sub-categories.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    ProductsComponent,
    DefaultComponent,
    AddProductComponent,
    SubCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component:CategoriesComponent},
      {path:'product/:id', component:ProductsComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

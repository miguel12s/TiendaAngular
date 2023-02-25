import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import { productService } from './services/product.service';
import { DataServices } from './services/data.services';
import { MaterialModule } from './materialModule/material.module';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { AgregarComponent } from './agregar/agregar.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,DescripcionComponent,AgregarComponent, CartComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [productService,DataServices,DescripcionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {CarsComponent} from "./components/cars/cars.component";
import { CarComponent } from './components/car/car.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CarComponent,
    CarsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
       HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

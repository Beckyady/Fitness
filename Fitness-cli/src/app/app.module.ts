// Built in imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import{ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { MustMatch } from "./must-match/validate-password";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";


// Components and service imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import {ApiService} from './api.service';
import {FitnessService} from './fitness.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SlimLoadingBarModule
  ],
  providers: [FitnessService],
  bootstrap: [AppComponent]
})
export class AppModule { }

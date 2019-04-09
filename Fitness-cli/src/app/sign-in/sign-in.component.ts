import { Component,ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import {NgForm, FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormArray } from "@angular/forms";
import {Validators } from "@angular/forms";
import { FitnessService } from '../fitness.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
email:new FormControl('',[Validators.email, Validators.required]),
password:new FormControl('',[Validators.required, Validators.minLength(6)])

  });

  constructor(private fb: FormBuilder, private fs: FitnessService) {

   }

  ngOnInit() {
      
  }
  login(){
    if(!this.loginForm.valid){
    console.log('Invalid Form'); return;
  }
  console.log(JSON.stringify( this.loginForm.value));
  }
  

}
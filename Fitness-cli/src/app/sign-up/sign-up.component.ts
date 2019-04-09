import { Component,ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormArray } from "@angular/forms";
import { MustMatch } from "../must-match/validate-password";
import {Validators } from "@angular/forms";
import { FitnessService } from '../fitness.service';
import { stringify } from '@angular/core/src/util';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],

})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private fs: FitnessService, private _router: Router) { 
    this.createForm();
  }
createForm(){
  this.registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber:['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  },
    {
      validator: MustMatch('password', 'confirmPassword')
    
});
}


register(){
  if(!this.registerForm.valid){
  console.log('Invalid Form'); return;
}
this.fs.register(JSON.stringify( this.registerForm.value))
.subscribe(
  data=>{console.log(data); this._router.navigate(['/sign-in']);},
  error =>console.error(error)
)
}

// addClient(fullName, email, phoneNumber, password, confirmPassword){
 
// this.fs.addClient(fullName, email, phoneNumber, password, confirmPassword);
// }



  ngOnInit() {
     
  }
}

  //convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  // onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.registerForm.invalid) {
  //         return;
  //     }

  //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  // }

  





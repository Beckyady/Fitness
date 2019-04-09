import { AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}



// ERROR Error: "formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
//        directive and pass it an existing FormGroup instance (you can create one in your class).

//       Example:

      
//     <div [formGroup]="myGroup">
//       <input formControlName="firstName">
//     </div>

//     In your class:

//     this.myGroup = new FormGroup({
//        firstName: new FormControl()
//     });"






































// export class ValidatePassword {

//   static MatchPassword(abstractControl: AbstractControl) {
//     let password = abstractControl.get('password').value;
//     let confirmPassword = abstractControl.get('confirmPassword').value;
//      if (password != confirmPassword) {
//          abstractControl.get('confirmPassword').setErrors({
//            MatchPassword: true
//          })
//     } else {
//       return null
//     }
// }

// }
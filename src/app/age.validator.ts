import { AbstractControl } from '@angular/forms';

export function ValidateAge(control: AbstractControl) {
    let dob = new Date(control.value);
    let age = new Date().getFullYear() - dob.getFullYear();
  if (!(age>=21 && age<60)) {
    return { invalidAge: true };
  }
  return null;
}
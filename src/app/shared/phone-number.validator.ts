import { AbstractControl, ValidationErrors } from "@angular/forms"

export const phoneNumberPattern = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';
  let msg = "";
  if (!value) {
    return null
  }

  let pattern = /\+91\d[0-9]{13}|\0\d[0-9]{13}|[0-9]{10}$/g;
  if (pattern.test(value) === false || value.length > 13) {
    return {
      phoneNumberPattern: "Enter a valid phone number with country code"
    }
  } else {
    return null
  }
}

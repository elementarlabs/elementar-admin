import { AbstractControl, ValidatorFn } from '@angular/forms';

export class PasswordStrengthValidator {

  isUndefinedOrEmpty(control: AbstractControl): any | undefined {
    if (!control || !control.value || control.value.length === 0) {
      return undefined;
    }
  }

  validate(criteria: string, regex: RegExp): (control: AbstractControl) => ({ [p: string]: any } | undefined) {
    const validator = (control: AbstractControl): { [p: string]: any } | undefined => {
      this.isUndefinedOrEmpty(control);
      if (!regex.test(control.value)) {
        const failed = {};
        // @ts-ignore
        failed[criteria] = {
          actualValue: control.value,
          requiredPattern: regex
        };
        return failed;
      }

      return undefined;
    };

    return validator;
  }

  confirm(password: string): (control: AbstractControl) => ({ [p: string]: any } | undefined) {
    const validator = (control: AbstractControl): { [p: string]: any } | undefined => {
      this.isUndefinedOrEmpty(control);
      if (control.value !== password) {
        return {
          notConfirmed: {
            password: password,
            passwordConfirmation: control.value
          }
        }
      }

      return undefined;
    };

    return validator;
  }
}

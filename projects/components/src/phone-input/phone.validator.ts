import { UntypedFormControl } from '@angular/forms';
import { parsePhoneNumber, PhoneNumber } from 'libphonenumber-js';

export const phoneValidator = (control: UntypedFormControl) => {
  const error = { invalidPhone: true };
  let numberInstance: PhoneNumber;

  if (control.value) {
    try {
      numberInstance = parsePhoneNumber(control.value);
    } catch (e) {
      control.setValue(null);
      return error;
    }

    if (numberInstance && !numberInstance.isValid()) {
      control.setValue(null);

      if (!control.touched) {
        control.markAsTouched();
      }

      return error;
    }
  }

  return null;
};

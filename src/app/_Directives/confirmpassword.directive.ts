import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appConfirmpassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmpasswordDirective,
    multi: true
  }]
})

export class ConfirmpasswordDirective {
  @Input() appConfirmpassword: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent.get(this.appConfirmpassword);

    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'notEqual': true };
    } else {
      return null;
    }
  }
  
  constructor() { }
}

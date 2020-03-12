import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UndefinedvaluesService {

  constructor() { }

  GetValue(TextValue: string) {
    if(TextValue == undefined) {
      TextValue = '';
    }

    return TextValue;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationFunService {

  constructor() { }

  isValidPhone(phone: string): boolean {
   
    const phonePattern = /^(05[0-9]-?(\d{7}|\d{6}-\d{1})|0[1-9]-?\d{7})$/;
    return phonePattern.test(phone);
  }

  isValidNum(num:number):boolean{
    const numPattern=/^(?!-)\d+$/ ;
    return numPattern.test(num.toString())
  }
}

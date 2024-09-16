import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthInString',
  standalone: true
})
export class MonthInStringPipe implements PipeTransform {

  transform(value: number,cases: { [key: string]: string }): any {
    for (const key in cases) {
      if (String(value)==key) {
        return cases[value];
      
    }
    
  }
  return value; 
}
}

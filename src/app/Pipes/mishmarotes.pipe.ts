import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mishmarotes',
  standalone: true
})
export class MishmarotesPipe implements PipeTransform {

  transform(value: string,cases: { [key: string]: string }): any {
    for (const key in cases) {
      if (value==key) {
        return cases[value];
      
    }
    
  }
  return value; 
}

}

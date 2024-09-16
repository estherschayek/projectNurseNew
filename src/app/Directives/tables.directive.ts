import { Directive,ElementRef, HostListener,OnInit  } from '@angular/core';

@Directive({
  selector: '[appTables]',
  standalone: true
})
export class TablesDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.classList.add('table')
    this.elementRef.nativeElement.classList.add('table-hover')
    this.elementRef.nativeElement.classList.add('table-mc-light-blue')

    this.elementRef.nativeElement.style.setProperty('border-collapse', 'collapse');
    this.elementRef.nativeElement.style.setProperty('margin', '0 auto');
   
  }


}

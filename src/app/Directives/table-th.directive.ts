import { Directive,ElementRef, HostListener,OnInit  } from '@angular/core';

@Directive({
  selector: '[appTableTH]',
  standalone: true
})
export class TableTHDirective implements OnInit{
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.classList.add('.table-header')
    this.elementRef.nativeElement.style.setProperty('background-color', '#F3DBC3');
    this.elementRef.nativeElement.style.setProperty('color', '#0f5506');
    this.elementRef.nativeElement.style.setProperty('border-bottom', '1px solid #0f5506');
    this.elementRef.nativeElement.style.setProperty('text-align', 'left');
    this.elementRef.nativeElement.style.setProperty('padding', '12px');
   
  
  }
  
  @HostListener('hover') onHover() {
    this.elementRef.nativeElement.style.backgroundColor = '#F3DBC3';
    this.elementRef.nativeElement.style.cursor = 'pointer';
   
  }

}

import { Directive,ElementRef, HostListener,OnInit  } from '@angular/core';

@Directive({
  selector: '[appTableTR]',
  standalone: true
})
export class TableTRDirective implements OnInit{

constructor(private elementRef: ElementRef) { }

ngOnInit() {
  this.elementRef.nativeElement.classList.add('.highlight-row')
  this.elementRef.nativeElement.style.setProperty('text-align', 'left');
  

}

@HostListener('mouseenter') onMouseEnter() {
  this.elementRef.nativeElement.style.backgroundColor = '#F3DBC3';
  this.elementRef.nativeElement.style.cursor = 'pointer';
}

@HostListener('mouseleave') onMouseLeave() {
  this.elementRef.nativeElement.style.backgroundColor = 'white'; 
 
}


}

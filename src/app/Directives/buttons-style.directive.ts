import { Directive, ElementRef, HostListener,OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appButtonsStyle]',
  standalone: true
})
export class ButtonsStyleDirective implements OnInit{

   constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.classList.add('btn');
    this.elementRef.nativeElement.style.setProperty('border-color', '#1d6a04');
    this.elementRef.nativeElement.style.setProperty('box-shadow', '4px 4px 4px #BD987E');
    this.elementRef.nativeElement.style.setProperty('text-emphasis-color', 'black');
    this.elementRef.nativeElement.style.setProperty('outline', '15');

    this.elementRef.nativeElement.classList.add('gradient-button');
    this.elementRef.nativeElement.style.setProperty('background', 'linear-gradient(to right,  #BD987E, #148405)');
    this.elementRef.nativeElement.classList.add('mt-3');

    this.elementRef.nativeElement.classList.add('rounded-pill')
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.textEmphasisColor = 'orange';
  }

 

  @HostListener('focus') onFocus() {
    this.elementRef.nativeElement.style.borderColor = 'brown';
  }


}

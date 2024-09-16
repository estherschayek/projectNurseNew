import { Directive, ElementRef, HostListener,OnInit  } from '@angular/core';

@Directive({
  selector: '[appInputsStyle]',
  standalone: true
})
export class InputsStyleDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
    this.elementRef.nativeElement.classList.add('form-control')
    this.elementRef.nativeElement.style.setProperty('box-shadow', '5px 5px 5px #BD987E');
  }
  
  @HostListener('focus') onFocus() {
    this.elementRef.nativeElement.style.borderColor = '#1d6a04';
    this.elementRef.nativeElement.style.boxShadow = '5px 5px 5px green';
    this.elementRef.nativeElement.style.outline='15'
  }

}

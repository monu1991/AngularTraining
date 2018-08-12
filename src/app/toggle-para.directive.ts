import { Directive,ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appTogglePara]'
})
export class ToggleParaDirective {

  constructor(private renderer: Renderer,
    private el: ElementRef) { 
    
  }
  @HostListener('mouseover')
  private onMouseOver() {
    this.el.nativeElement.toggle();
  }

}

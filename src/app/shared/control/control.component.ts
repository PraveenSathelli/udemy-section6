import { Component, ContentChild, ElementRef, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {

  label = input.required<string>();

  @ContentChild('input')
  control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  constructor(private elementRef: ElementRef) {

  }

  private el = inject(ElementRef);

  onClick() {
    console.log("data log");
    console.log("data "  + this.control?.nativeElement.id + " " + this.control?.nativeElement.value)
    console.log(this.el); // way 1 
    console.log(this.elementRef) // way 2
  }

  // @HostListener('click')
  // onClick2() {
  //   console.log("HostListener data log");
  // }

}

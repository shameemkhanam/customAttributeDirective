import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective implements OnInit {
  // private element: ElementRef;

  // constructor(element: ElementRef) {
  //   // element.nativeElement.style.backgroundColor = "#c8e6c9";
  //   this.element = element;
  // }

  // ngOnInit() {
  //   this.element.nativeElement.style.backgroundColor = '#c8e6c9';
  // }

  
  constructor(private element: ElementRef) { //angular will create a private prop called element
    // element.nativeElement.style.backgroundColor = "#c8e6c9";
    this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#c8e6c9';
  }
}
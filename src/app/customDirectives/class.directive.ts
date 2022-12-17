import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  // @Input() set display(value: Object) {
  //   let entries = Object.entries(value);
  //   // console.log(entries);
  //   // for (let entry of entries) {
  //   //   if (entry[1]) {
  //   //     this.renderer.addClass(this.element.nativeElement, entry[0]);
  //   //   }
  //   // }
  //   //instead of above code, v can use destructuring:
  //   for (let [classname,condition] of entries) {
  //     if (condition) {
  //       this.renderer.addClass(this.element.nativeElement, classname);
  //     }
  //   }
  // }

  //-----
  // @Input('appClass') set display(value: Object) {
  //   let entries = Object.entries(value);
  //   for (let [classname, condition] of entries) {
  //     if (condition) {
  //       this.renderer.addClass(this.element.nativeElement, classname);
  //     }
  //   }
  // }
  //-----
  @Input() set appClass(value: Object) {
    let entries = Object.entries(value);
    for (let [classname, condition] of entries) {
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, classname);
      }
    }
  }
}

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicQuestion]',
  standalone: true
})
export class DynamicQuestionDirective {
  //Directives allow you to extend or modify the behavior of elements in the DOM. 
  constructor(public viewContainerRef: ViewContainerRef) { }

}

import { Component } from '@angular/core';

/*
  Generated class for the Demo component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'demo',
  templateUrl: 'demo.html'
})
export class Demo {

  text: string;

  constructor() {
    console.log('Hello Demo Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Demo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})
export class Demo {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Demo Page');
  }

}

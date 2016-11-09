import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAuth, User } from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public googleAuth: GoogleAuth, public user: User) {

  }

  login() {
    console.log('clickv');
    this.googleAuth.login().then((success) => {
      alert(JSON.stringify(success));
    })
  }

  logout() {
    this.googleAuth.logout();
  }


}

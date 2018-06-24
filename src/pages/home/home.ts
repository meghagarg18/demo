import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {

  }
  SignUp(){
    this.navCtrl.push("SignUp")
  }
  LogIn(){
    this.navCtrl.push("Login")
  }
}

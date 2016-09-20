import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ResetPasswordPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/reset-password/reset-password.html',
})
export class ResetPasswordPage {

public username : any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  
      
      this.username = this.navParams.get('name');
  }


  
}

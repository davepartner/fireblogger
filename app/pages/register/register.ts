import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { ResetPasswordPage } from '../reset-password/reset-password';
/*
  Generated class for the RegisterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/register/register.html',
})
export class RegisterPage {

  constructor(private navCtrl: NavController, private viewCtrl: ViewController, private navParams: NavParams) {

  }
  
  closeRegisterPage(){
  	
  	this.viewCtrl.dismiss();
  }
  
  redirectToResetPage(){
  	
  	var allContents = {
  		name: 'dave partner',
  		viewer: 'nice guy',
  		randNumber: '1234343'
  	}
  	
  	this.navCtrl.push(ResetPasswordPage, {
  		userdetails : allContents
  		} );
  }

}

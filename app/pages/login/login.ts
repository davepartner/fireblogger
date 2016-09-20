import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

public emailField: any; 
public passwordField: any; 


  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {
				
				this.emailField = "DavePartner@Gmail.com";
  }



  submitLogin(){
  	
  	alert("Hello We just signed in");
  	
  }
  
  submitRegister(){
  	 
  	 let registerModal = this.modalCtrl.create(RegisterPage);
  	 registerModal.present();
  	 
  }
}

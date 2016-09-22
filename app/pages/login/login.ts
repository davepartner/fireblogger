import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UsersService } from '../../providers/users-service/users-service';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers:[UsersService]
})
export class LoginPage {

public emailField: any; 
public passwordField: any; 
private users = [];
private usersList : any;

  constructor(private alertCtrl: AlertController , private loadingCtrl: LoadingController, private navCtrl: NavController, private modalCtrl: ModalController, private usersService: UsersService) {
				
				this.emailField = "DavePartner@Gmail.com";
				
  				this.listOurUsers();
  
  }
  
  signUserUp(){
  	
  	this.usersService.signUpUser(this.emailField, this.passwordField).then(authData => {
  		//successful
  		this.navCtrl.setRoot(HomePage);
  	}, error => {
  		//alert("error logging in: "+ error.message);
  		
  		
  	});
  	
  	
  	let loader = this.loadingCtrl.create({
  		dismissOnPageChange: true,
  	});
  	
  	loader.present();
  	
  }

listOurUsers(){
	this.usersService.loadUser(10)
	.then(data => {
		this.usersList = data;
	})
}


//login
  submitLogin(){
  	
  		
  	this.usersService.loginUser(this.emailField, this.passwordField).then(authData => {
  		//successful
  		this.navCtrl.setRoot(HomePage);
  	}, error => {
  		//alert("error logging in: "+ error.message);
  		let alert = this.alertCtrl.create({
	      title: 'Error loggin in',
	      subTitle: error.message,
	      buttons: ['OK']
	    });
	    alert.present();
  		
  	});
  	
  	
  	let loader = this.loadingCtrl.create({
  		dismissOnPageChange: true,
  	});
  	
  	loader.present();
  	
  	
  	
    }
 
  
  submitRegister(){
  	 
  	 let registerModal = this.modalCtrl.create(RegisterPage);
  	 registerModal.present();
  	 
  }
  

}

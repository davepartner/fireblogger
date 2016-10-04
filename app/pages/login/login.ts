import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController, ToastController} from 'ionic-angular';
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

  constructor(private alertCtrl: AlertController , private loadingCtrl: LoadingController, private navCtrl: NavController, private modalCtrl: ModalController, private usersService: UsersService, private toastCtrl: ToastController) {
				
				this.emailField = "";
				this.passwordField = "";
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
  	
  		alert(this.passwordField);
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
 
  

showForgotPassword(){
	
	//
	
	 let prompt = this.alertCtrl.create({
      title: 'Enter Your Email',
      message: "A new password will be sent to your email",
      inputs: [
        {
          name: 'recoverEmail',
          placeholder: 'you@example.com'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
           
            
            //add preloader
            let loading = this.loadingCtrl.create({
				dismissOnPageChange: true,
				content: 'Reseting your password..'
			});
			 loading.present();
             //call usersservice
            this.usersService.forgotPasswordUser(data.recoverEmail).then(() => {
            	   //add toast
            	     loading.dismiss().then(() => {
            	     	//show pop up
            	     		let alert = this.alertCtrl.create({
					      title: 'Check your email',
					      subTitle: 'Password reset successful',
					      buttons: ['OK']
					    });
					    alert.present();
            	     })
            	
            	}, error => {
            		//show pop up
            		loading.dismiss().then(() => {
				  		let alert = this.alertCtrl.create({
					      title: 'Error resetting password',
					      subTitle: error.message,
					      buttons: ['OK']
					    });
					    alert.present();
					 })
 
	    
            	});
          }
        }
      ]
    });
    prompt.present();
  }
	
	
	googleSignIn(){
		
		this.usersService.googleSignInUser().then(()=>{
			//success, redirect
			let toast = this.toastCtrl.create({
		      message: 'User account created successfully...',
		      duration: 3000
		    });
		    toast.present();
		
		});	
		  
	}


}

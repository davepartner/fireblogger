import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from '../../providers/users-service/users-service';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
/*
  Generated class for the UsersDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users-detail/users-detail.html',
  providers:[UsersService]
})



export class UsersDetailPage {
private userPhotoUrl: any;
private userDislplayName: any;


  constructor(private navCtrl: NavController, private usersService: UsersService) {

var myUserId = firebase.auth().currentUser.uid; //current user id

this.displayUser(myUserId);



  }

displayUser(theUserId){
	
	var that = this;
	
	this.usersService.viewUser(theUserId).then(snapshot => {
	
		 //get user photo
		that.userPhotoUrl = snapshot.val().photo; //get user photo
	   that.userDislplayName= snapshot.val().username; 
	})
}

logUserOut(){
	//call user service
	this.usersService.logoutUser().then(() => {
		this.navCtrl.setRoot(LoginPage);
	});
}
}

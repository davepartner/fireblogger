import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from '../../providers/users-service/users-service';
import { LoginPage } from '../login/login';
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

  constructor(private navCtrl: NavController, private usersService: UsersService) {

  }


logUserOut(){
	//call user service
	this.usersService.logoutUser().then(() => {
		this.navCtrl.setRoot(LoginPage);
	});
}
}

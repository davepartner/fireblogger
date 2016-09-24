import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersDetailPage } from '../users-detail/users-detail';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
   //empty
  }
  
  
  redirectToUserDetailPage(){
  	
  	//redirec here
  	this.navCtrl.push(UsersDetailPage);
  }
}

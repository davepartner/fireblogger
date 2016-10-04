import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersDetailPage } from '../users-detail/users-detail';
import { UsersService } from '../../providers/users-service/users-service';
import { PostsService } from '../../providers/posts-service/posts-service';
import { PostAddPage } from '../post-add/post-add';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
   //empty
  }
  
  
  redirectToUserDetailPage(){
  	
  	//redirect here
  	this.navCtrl.push(UsersDetailPage);
  }
  
  
  redirectToPostAddPage(){
  	//redirect here
  	this.navCtrl.push(PostAddPage);
  }
}

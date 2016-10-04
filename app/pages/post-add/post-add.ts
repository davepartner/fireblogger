import { Component } from '@angular/core';
import { NavController, ViewController,LoadingController,AlertController } from 'ionic-angular';
import { PostsService } from '../../providers/posts-service/posts-service';
import * as firebase from 'firebase';


/*
  Generated class for the PostAddPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/post-add/post-add.html',
  providers: [PostsService]
})
export class PostAddPage {

private postTitle :any;
private postBody :any;
private userId :any;


  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController,private viewCtrl: ViewController, private postsService: PostsService, private alertCtrl: AlertController ) {
   this.userId = firebase.auth().currentUser.uid; //user id of current logged in user
  }






addNewPost(){
	
	 //add preloader
            let loading = this.loadingCtrl.create({
				dismissOnPageChange: true,
				content: 'Reseting your password..'
			});
			 loading.present();
			 
			 
	//call the service
	this.postsService.createPostService(this.userId, this.postBody).then(() => {
	
	//clear the fields
	this.postBody = "";
	
	
	 //add toast
            	     loading.dismiss().then(() => {
            	     	//show pop up
            	     		let alert = this.alertCtrl.create({
					      title: 'Done!',
					      subTitle: 'Post successful',
					      buttons: ['OK']
					    });
					    alert.present();
            	     })
	
	
	//close the popup
	this.viewCtrl.dismiss();
	
		
		}, error => {
            		//show pop up
            		loading.dismiss().then(() => {
				  		let alert = this.alertCtrl.create({
					      title: 'Error adding new post',
					      subTitle: error.message,
					      buttons: ['OK']
					    });
					    alert.present();
					 })
 
	    
            	});
	
}



}

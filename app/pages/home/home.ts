import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersDetailPage } from '../users-detail/users-detail';
import { UsersService } from '../../providers/users-service/users-service';
import { PostsService } from '../../providers/posts-service/posts-service';
import { PostAddPage } from '../post-add/post-add';
import * as firebase from 'firebase';
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [PostsService,UsersService]
})
export class HomePage {
	
	private userPostsLists= [];
	private userProfileLists: any;
	private userDisplayName: any;
	private userEmail: any;
	private userPhoto: any;
	private userId: any;
  constructor(public navCtrl: NavController, private postsService: PostsService, private usersService: UsersService) {
   
   this.userProfileLists = firebase.database().ref('users');
   this.userId = firebase.auth().currentUser.uid;
   //get list of posts on page init
   this.listPosts();
  }
  
  
  redirectToUserDetailPage(){
  	
  	//redirect here
  	this.navCtrl.push(UsersDetailPage);
  }
  
  
  redirectToPostAddPage(){
  	//redirect here
  	this.navCtrl.push(PostAddPage);
  }
  
  
  
listPosts(){
	var that = this;
	this.postsService.listPostService().then(snapshot => {
			         //empty this array first to avoid duplication of content when value changes in the database
			         //so every time there is a change in the database, empty the array, fetch fresh data from db
			         //this is because we are fetching data with on('value') inside listPostService()
			       
			         that.userPostsLists.length = 0;  
			         
                    snapshot.forEach(function (childSnapshot) {
                        var data = childSnapshot.val();
                        data['key'] = childSnapshot.key;
                         that.userPostsLists.push(data);
                         
                         
                         console.log("post details: "+that.userPostsLists);
                         //get the user's detail
                         that.usersService.viewUser(that.userId).then(snapshotUser=> {
                         	that.userDisplayName = snapshotUser.val().username;
							  that.userEmail = snapshotUser.val().email;
							  that.userPhoto = snapshotUser.val().photo;
							  
							  //check the console section of your browser inspect element
							  console.log( "user details: "+ snapshotUser.val() );
                         })
							  
                         
                         
                         
                    });
			});
}

}

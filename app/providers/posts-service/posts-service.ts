import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the PostsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostsService {


private data: any;
private userNode: any;
private fireRef: any;
private postsNode: any;
private usersPostsNode: any;

  constructor(private http: Http) {
  	     this.userNode = firebase.database().ref('users');
  	     this.postsNode = firebase.database().ref('posts');
  	     this.usersPostsNode = firebase.database().ref('user-posts');
  	    this.fireRef = firebase.database().ref();
  	
  }
         

//view a certain Post 
viewPostService(postId:any){
			var userRef = this.postsNode.child(postId);
			return userRef.once('value'); 
}

//view all posts made by this userId
viewUsersPostsService(userId: any){
	var userRef = this.postsNode.child(userId);
			return userRef.once('value'); 
}

createPostService(userId: any, postBody: any){
  
  	 // A post entry.
  var postData = {
    uid: userId,
    body: postBody
  };


  // Get a key for a new Post.
  var newPostKey = this.postsNode.push().key;




  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updatePath = {};
  updatePath['/posts/' + newPostKey] = postData;
  updatePath['/user-posts/' +userId+"/"+ newPostKey] = postData;
  
//update both tables simultaneously
  return this.fireRef.update(updatePath);
  

  	
  }
  	 
}


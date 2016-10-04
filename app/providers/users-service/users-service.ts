import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
/*
  Generated class for the UsersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersService {

private data: any;
public fireAuth: any;
public userProfile: any;



  constructor(private http: Http) {
  	 
  	 this.fireAuth = firebase.auth();
  	 this.userProfile = firebase.database().ref('users');
  }

loadUser(number){
	if(this.data){
		return Promise.resolve(this.data);
	}
	
	return new Promise(resolve => {
		
		this.http.get('https://randomuser.me/api/?results='+number)
			.map(res => res.json())
			.subscribe(data => {
				this.data = data.results;
				resolve(this.data);
			})
	})
}



viewUser(userId: any){
			var userRef = this.userProfile.child(userId);
			return userRef.once('value'); 
}

signUpUser(email: string , password: string){
	return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => {
		//sign in the user
		this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser) => {
			//successful login, create user profile
		this.userProfile.child(authenticatedUser.uid).set({
			email: email
		});	
		});
	});
}


loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
  
  
 logoutUser(){
 	return this.fireAuth.signOut();
 	//redirection
 }


 forgotPasswordUser(email: any){
 	return this.fireAuth.sendPasswordResetEmail(email);
 }
 
 googleSignInUser(){
 	var provider = new firebase.auth.GoogleAuthProvider();
 	provider.addScope('https://www.googleapis.com/auth/plus.login');
 	
 	
 
 	var that = this;
 	
 	return firebase.auth().signInWithPopup(provider).then(function(result) {
 		
  if (result.user) {
  
    // The signed-in user info.
  var user = result.user;
  
    var res = result.user.displayName.split(" ");
    
   
    that.userProfile.child(user.uid).set({
			email: user.email,
			photo: user.photoURL,
			username: user.displayName,
			 name:{
			 	first: res[0],
			 	middle: res[1],
			 	last: res[2],
			},
		});
		
			
		
  }
  
}).catch(function(error) {
	console.log(error);
    //alert("error "+error.message);
});
 }
}


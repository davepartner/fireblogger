# Fireblogger 

A blogging app built with [Ionic 2](http://ionicframework.com) and  [Firebase](https://firebase.google.com)

## Tutorial
The video tutorials for this repo is on youtube, please do well to subscribe: https://www.youtube.com/playlist?list=PLnBvgoOXZNCPxZJohnrdfR6Nlr1ilaHJO

## Usage

To download and use this project you need to have the following installed on your machine

* [NodeJs] (http://nodejs.org)

* Create an account with [Firebase](http://firebase.google.com)

When you have completed the above processes, run:
You can download this project directly or clone it using git
run the following command
```
 git clone https://github.com/daveozoalor/fireblogger
`````

After downloading/cloning it
Change directory and run npm install
Run
```
cd fireblogger
npm install
```
to pull in the project dependencies.

*After that, you need to update the `app.ts` located in `app\app.ts' your own firebase credentials that you obtained firebase console for the project
it will look like this:

```
<script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
  };
  firebase.initializeApp(config);
</script>
```

That's all, you are good to go.

## How to thank me
* Star this repo
Follow me on my social media handles
* Subscribe on [Youtube](http://youtube.com/c/braintemorg)
* Follow on [Twitter](http://twitter.com/braintem)
* Follow on [Instagram](http://instagram.com/daveozoalor)
* Like on [Facebook](http://fb.com/braintem)


## Contacts

* You can reach the me on `daveozoalor@gmail.com`, I'd like to join your team.
* Just buzz me up on [facebook](http://facebook.com/daveozoalor)

## License

Fireblogger is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

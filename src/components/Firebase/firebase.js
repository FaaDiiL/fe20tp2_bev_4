import app from "firebase/app";
import "firebase/auth";
import "firebase/database";


var config = {
  apiKey: "AIzaSyDWcMs5a_HcHqqDqHTiWZtsP_35CQ2F-I4",
  authDomain: "fe20tp2-bev-4.firebaseapp.com",
  databaseURL: "https://fe20tp2-bev-4-default-rtdb.firebaseio.com",
  projectId: "fe20tp2-bev-4",
  storageBucket: "fe20tp2-bev-4.appspot.com",
  messagingSenderId: "180893030057",
  appId: "1:180893030057:web:d7afa06d4ecfcc46677bb8"

}


// Initialize Firebase
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***
  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");

}

export default Firebase;

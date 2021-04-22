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
  appId: "1:180893030057:web:d7afa06d4ecfcc46677bb8",
};

// Initialize Firebase
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();

    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    
  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

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

  // *** Message API ***

  message = (uid) => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref("messages");

  getCurrentUser = async () => {
    const myUserBank = await this.db
      .ref(`users/${this.auth.currentUser.uid}`)
      .get();
    const response = await myUserBank();
    return response;
  };
  updateCurrentUserBank = (bank) => {
    this.db
      .ref(`users/${this.auth.currentUser.uid}`)
      .update({ bank: `${bank}` });
  };
  // *** Function to delete current user ***
  deleteCurrentUser = async () => {
    try {
      // Try deleting the user from the user list and localStorage
      this.auth.currentUser.delete();
      // If successful, also delete the post of the user in the realtime database
      let userRef = this.db.ref(`users/${this.auth.currentUser.uid}`);
      userRef.remove();
      window.localStorage.clear();
      await this.auth.signOut();
    } catch (error) {
      alert(
        "Error. It was too long ago since you logged in. Please log out, and then back in, and try deleting your account again"
      );
    }
  };

  // getDataFromDatabase = (id, setDoughnut, setTempDatabaseSavings, doughnut) => {
  //   let localCurrentUser = JSON.parse(localStorage.getItem("authUser")).savings;
  //   setDoughnut(localCurrentUser);
  //   setTempDatabaseSavings(localCurrentUser);
  // };
}

export default Firebase;

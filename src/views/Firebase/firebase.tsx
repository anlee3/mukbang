import React from 'react'
// import app from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

// class Firebase {
//   private auth: any;
//   private db: any;

//   constructor() {
//     app.initializeApp(config);

//     this.auth = app.auth();
//     this.db = app.database();
//   }

//   // *** Auth API ***

//   doCreateUserWithEmailAndPassword = (email: string, password: string) =>
//     this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email: string, password: string) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

//   doPasswordUpdate = (password: string) =>
//     this.auth.currentUser.updatePassword(password);

//   // *** User API ***

//   user = (uid: any) => this.db.ref(`users/${uid}`);

//   users = () => this.db.ref('users');

//   // *** CRUD API ***

//   streams = () => this.db.ref('streams');
// }

// export default Firebase;

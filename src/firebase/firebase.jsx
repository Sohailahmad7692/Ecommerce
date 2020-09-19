import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArzx8Pi_1IADBVw2HWos86a6et2IzuewQ",
    authDomain: "ecommerce-ed674.firebaseapp.com",
    databaseURL: "https://ecommerce-ed674.firebaseio.com",
    projectId: "ecommerce-ed674",
    storageBucket: "ecommerce-ed674.appspot.com",
    messagingSenderId: "781552107247",
    appId: "1:781552107247:web:14fdfe18a7535dd9bf651a",
    measurementId: "G-XK9V01HS69"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
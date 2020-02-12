import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDYdAgaLjpJRzTNisVjeZiU87FlSIZxP8E',
  authDomain: 'shop-clothing-504cd.firebaseapp.com',
  databaseURL: 'https://shop-clothing-504cd.firebaseio.com',
  projectId: 'shop-clothing-504cd',
  storageBucket: 'shop-clothing-504cd.appspot.com',
  messagingSenderId: '1025540739151',
  appId: '1:1025540739151:web:dbc8878a4a5d6e272fda3a'
};

export const createUserProfileDocument = async (userAuth, addictionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //dH8bCkYev6t3LQzsOP0p
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addictionalData
      });
    } catch (error) {
      console.log('Error creating user : ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

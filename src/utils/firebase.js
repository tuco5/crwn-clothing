// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCXL2YJESWOCWXJrVG8NeRAhd1ribERTdY',
  authDomain: 'crown-clothing-db-93135.firebaseapp.com',
  projectId: 'crown-clothing-db-93135',
  storageBucket: 'crown-clothing-db-93135.appspot.com',
  messagingSenderId: '978239502052',
  appId: '1:978239502052:web:30c83e0cc0d5198091def1',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
};

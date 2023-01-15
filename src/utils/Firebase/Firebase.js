import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAD9WUUgDGnPeUxBN29vl3NIYqxAnD4AJ8',
  authDomain: 'web-shop-db-e0a89.firebaseapp.com',
  projectId: 'web-shop-db-e0a89',
  storageBucket: 'web-shop-db-e0a89.appspot.com',
  messagingSenderId: '513623089173',
  appId: '1:513623089173:web:0d4efe7a9eb5fb038d2e1c'
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
    return userDocRef;
  }
};

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG34aeh5o59ysAoTyVNAjJbtkZGX7WSKU",
  authDomain: "crwn-clothing-db-ca42b.firebaseapp.com",
  projectId: "crwn-clothing-db-ca42b",
  storageBucket: "crwn-clothing-db-ca42b.appspot.com",
  messagingSenderId: "1028877307253",
  appId: "1:1028877307253:web:11661cc3caa417889b573c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: "select-account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  
  userAuth,
  additionalInformation = {displayName: ''}
  ) => {

  const UserDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(UserDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createrAt = new Date();

    try {
      await setDoc(UserDocRef, {
        displayName,
        email,
        createrAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return UserDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;
  console.log('amna')
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);
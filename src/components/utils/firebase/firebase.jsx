import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDOc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZAdlEKAewaZ9NBaZcQueHsaHm6X3jLNQ",
    authDomain: "crown-clothing-db-efcf2.firebaseapp.com",
    projectId: "crown-clothing-db-efcf2",
    storageBucket: "crown-clothing-db-efcf2.appspot.com",
    messagingSenderId: "337524247784",
    appId: "1:337524247784:web:94c8be6b5fb45c0387cd5d"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdOn = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdOn })
        }
        catch (error) {
            console.log('UPDATE FAILED', error.message)

        }
    }
    else {
        return userDocRef;
    }
}
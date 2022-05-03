import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCZAdlEKAewaZ9NBaZcQueHsaHm6X3jLNQ",
    authDomain: "crown-clothing-db-efcf2.firebaseapp.com",
    projectId: "crown-clothing-db-efcf2",
    storageBucket: "crown-clothing-db-efcf2.appspot.com",
    messagingSenderId: "337524247784",
    appId: "1:337524247784:web:94c8be6b5fb45c0387cd5d"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionName, objectsToAdd) => {
    const collectionRef = collection(db, collectionName);
    const batch = writeBatch(db)
    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })
    await batch.commit();
    console.log('done')
}
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapShot = await getDocs(collectionRef);
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;

}
export const createUserDocFromAuth = async (userAuth, additionals = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdOn = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdOn, ...additionals })
        }
        catch (error) {
            console.log('UPDATE FAILED', error.message)

        }
    }
    else {
        return userDocRef;
    }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
    await signOut(auth);
}
export const onAuthChangedListener = (callback) => onAuthStateChanged(auth, callback)


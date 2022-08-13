import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
// Your web app's Firebase configuration
import {
    getFirestore,
    doc, //an instance of the document
    getDoc, //get data inside the document
    setDoc, //set data insid the document

} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBhWsdT92UblaPq8o_41B0QLtfkV75TPKc",
    authDomain: "react-course-db-8a7e1.firebaseapp.com",
    projectId: "react-course-db-8a7e1",
    storageBucket: "react-course-db-8a7e1.appspot.com",
    messagingSenderId: "860978242633",
    appId: "1:860978242633:web:963ac9e290153eef748b98"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: 'select_account',

  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
  export const db = getFirestore();

  
 export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); //our data is in userSnapshot

    

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        }catch (error){
            console.log('you suck at photoshop', error.message)
        }
    }

    //if data exists, return
    //if data does not exist, created/set the document with data from usersauth in my collection

    return userDocRef;
  } 


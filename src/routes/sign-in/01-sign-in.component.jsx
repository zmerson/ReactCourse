import {useEffect} from 'react'
import {getRedirectResult} from 'firebase/auth'
import { auth, signInWithGoogleRedirect, signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    useEffect(() => {
        (async () => {
          const response = await getRedirectResult(auth);
          if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
          }
        })();
      }, []);
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    const logGoogleRedirectUser = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log({user})
    };
    return (
        <div>
            <button onClick={logGoogleUser}>Sign In with google popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In with google redirect</button>
        </div>
    )
}

export default SignIn;
import {useEffect} from 'react'
import {getRedirectResult} from 'firebase/auth'
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <button onClick={logGoogleUser}>Sign In with google popup</button>
        <SignUpForm />
        </div>
    )
}

export default SignIn;
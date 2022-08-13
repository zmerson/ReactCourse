import { useState } from 'react';
import { signInWithGooglePopup, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, auth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
import Button from '../button/button.component'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields; // we control the 'value' of the form fields below

    console.log(formFields)
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
const signInWithGoogle= async () => {
  
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    
}
    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response);
        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('invalid password')
                    break
                case 'auth/user-not-found':
                    alert('User not found')
                    break
                default:
                    console.log(error);
            }
            if (error.code === 'auth/wrong-password'){
                alert('incorrect password')
            } else if ('auth/user-not-found')
            {console.error('sign-in component encounterered an error', error)}
        }
  
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target; //event.target is the thing emitting the event, 
    
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                
                <FormInput label="Email" required type="email" name="email" onChange={handleChange} value={email}/>
                <FormInput label="Password" required type="password" name="password" onChange={handleChange} value={password}/>
      <div className='button-container'>
        <Button type="submit">Sign in</Button>
        <Button type='button'buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button>
      </div>
        
            </form>
        </div>
    )
}

export default SignInForm;
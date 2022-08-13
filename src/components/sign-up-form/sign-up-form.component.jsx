import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import Button from '../button/button.component'
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields; // we control the 'value' of the form fields below

    console.log(formFields)
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword){
            alert("passwords do not match")
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();
            console.log(user)
        } catch(error) {
            if(error.code == 'auth/email-already-in-use') {
                alert("email already in use");
            }else {console.error('user creation encounterered an error', error)}
        }
  
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target; //event.target is the thing emitting the event, 
    
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" required type="text" name="displayName" onChange={handleChange} value={displayName}/> 
                
                <FormInput label="Email" required type="email" name="email" onChange={handleChange} value={email}/>
      
                <FormInput label="Password" required type="password" name="password" onChange={handleChange} value={password}/>
      
                <FormInput label="Confirm Password"required type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
        <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;
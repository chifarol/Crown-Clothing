import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase/firebase';
import FormInput from '../form-input/input-comp';
import CustomButton from '../button/button'
import './sign-up.scss';

const defaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFields);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            resetFormFields();
        }
        catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('E-mail already in use');
            }
            else { alert(err.code) }
        }
    };
    const changeHandler = (event) => {
        const { name, value } = event.target; setFormFields({ ...formFields, [name]: value });
        console.log(formFields);
    }
    return (
        <div className='sign-up-container'>
            <h2> Don't have an account?</h2>
            <span>Sign Up with E-mail and Password</span>
            <form onSubmit={submitHandler}>
                <FormInput label="Display Name" labelFor type="text" name="displayName" value={displayName} onChange={changeHandler} required />
                <FormInput label="Email" type="email" name="email" value={email} onChange={changeHandler} required />
                <FormInput label="Passsword" type="password" name="password" value={password} onChange={changeHandler} required />
                <FormInput label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} required />
                <br />
                <CustomButton type="submit" value="Sign Up" buttonType='inverted' label="Sign Up" />


            </form>
        </div>
    )
}

export default SignUpForm;
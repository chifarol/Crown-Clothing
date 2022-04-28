import { useState } from 'react';
import { signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/firebase/firebase';
import FormInput from '../form-input/input-comp';
import CustomButton from '../button/button'
import './sign-in.scss';

const defaultFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFields);
    const { email, password } = formFields;

    const googleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    }

    const resetFormFields = () => {
        setFormFields(defaultFields);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const res = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(res)
            // resetFormFields();
        }
        catch (err) {
            if (err.code === 'auth/wrong-password') {
                alert('Incorrect E-mail/Password')
            }
            else if (err.code === 'auth/user-not-found') {
                alert('E-mail Invalid');
            }
            else {
                alert('Something Went Wrong =>s', err.code);
            }
        }
    };
    const changeHandler = (event) => {
        const { name, value } = event.target; setFormFields({ ...formFields, [name]: value });
        console.log(formFields);
    }
    return (
        <div className='sign-up-container'>
            <h2> Already have an account?</h2>
            <span>Sign In with E-mail and Password</span>
            <form onSubmit={submitHandler}>
                <FormInput label="Email" type="email" name="email" value={email} onChange={changeHandler} required />
                <FormInput label="Passsword" type="password" name="password" value={password} onChange={changeHandler} required />

                <br />
                <div className="buttons-container">
                    <CustomButton type="submit" value="Sign In" buttonType='inverted' label="Sign In" />
                    <CustomButton onClick={googleSignIn} type="button" value="Sign In with Google" buttonType='googlebtn' label="Sign In with Google" />

                </div>
            </form>
        </div>
    )
}

export default SignInForm;
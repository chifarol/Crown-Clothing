import { useState } from 'react';
import { signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/firebase/firebase';
import FormInput from '../form-input/input-comp';
import CustomButton from '../button/button'
import './sign-in.scss';
// import { UserContext } from '../contexts/usercontext';


const defaultFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFields);
    const { email, password } = formFields;


    // const { setCurrentUser } = useContext(UserContext);
    const resetFormFields = () => {
        setFormFields(defaultFields);
    }
    const googleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        // setCurrentUser(user)
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // setCurrentUser(user);
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
                alert(err.code);
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
                    <CustomButton onClick={googleSignIn} type="button" value="Sign In with Google" buttonType='googlebtn' label="Google Sign-In" />

                </div>
            </form>
        </div>
    )
}

export default SignInForm;
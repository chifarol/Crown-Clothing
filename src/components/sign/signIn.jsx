import { signInWithGooglePopup, createUserDocFromAuth } from '../utils/firebase/firebase';
import { Fragment } from 'react';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDocFromAuth(response.user);
    }
    return (
        <Fragment>
            <div> sign in!</div>
            <button onClick={logGoogleUser}>
                Sign In with Google
            </button>
        </Fragment>
    )
}

export default SignIn;
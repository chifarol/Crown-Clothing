import { signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect, auth } from '../../components/utils/firebase/firebase';
import SignUpForm from '../../components/sign-up/sign-up-form';
import SignInForm from '../../components/sign-in/sign-in-form';
import { Fragment, useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import './auth.scss'

const Authentication = () => {
    useEffect(() => {
        async function retrieve() {
            const res = await getRedirectResult(auth);

            if (res) {
                const userDocRef = await createUserDocFromAuth(res.user);
                console.log(userDocRef)
            }
        }
        retrieve();

    }, []);
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDocFromAuth(response.user);
    }


    return (
        <Fragment>
            <div className='authentication-container'>
                <SignInForm />
                <SignUpForm />
                {/* <button onClick={logGoogleUser}>
                    Sign Up with Google
                </button><br /><br />
                <button onClick={signInWithGoogleRedirect}>
                    Sign Up with Google Redirect
                </button> */}
            </div>
        </Fragment>
    )
}

export default Authentication;
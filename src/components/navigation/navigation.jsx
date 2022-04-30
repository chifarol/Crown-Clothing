import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../logo/crown.svg";
import { UserContext } from '../contexts/usercontext';
import { signOutUser } from '../utils/firebase/firebase';
import './navigation.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const finalizeSignOut = async () => {
        const out = await signOutUser();
    }

    return (
        <Fragment>
            <div className="navigation">
                <div>
                    <Link className="logo-container" to="/"><CrownLogo className="logo" /> </Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop"> SHOP </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={finalizeSignOut}> SIGN OUT </span>
                    ) : (<Link className="nav-link" to="/auth"> SIGN IN/UP </Link>)
                    }



                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;
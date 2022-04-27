import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../logo/crown.svg";
import './navigation.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <div>
                    <Link className="logo-container" to="/"><CrownLogo className="logo" /> </Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/sign-in"> SIGN IN </Link>
                    <Link className="nav-link" to="/shop"> SHOP </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default Navigation;
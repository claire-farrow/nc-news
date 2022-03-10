import {Link} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContexts";

export default function Nav () {
    const {loggedInUser} = useContext(UserContext)
    return (
        <nav className="nav">
            <Link to="/" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">
                Home Page
            </Link>
            <Link to="/users" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">
                User
            </Link>
            <span>
                {loggedInUser.username}
            </span>
            
        </nav>
    )
}
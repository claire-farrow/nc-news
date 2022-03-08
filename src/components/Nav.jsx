import {Link} from "react-router-dom";

export default function Nav () {
    return (
        <nav className="nav">
            <Link to="/" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">
                Home Page
            </Link>
            
        </nav>
    )
}
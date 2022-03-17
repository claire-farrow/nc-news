import {Link} from "react-router-dom";

export default function ErrorPage ({status, msg}) {
    
    status = status ? status : 404
    return (
        <>
        <h2>{msg ? msg : "This page does not exist"}</h2>
        <Link to="/">Back to Home Page</Link>
        </>
    )
}

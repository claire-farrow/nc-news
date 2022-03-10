import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import { UserContext } from "../contexts/UserContexts";
import { useContext } from "react";

export default function PostComment () {

    const [body, setBody] = useState({username: "", body: ""})

    const {article_id} = useParams()
    const {loggedInUser} = useContext(UserContext)
  
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(body)
        api.postCommentByArticleId(article_id, body).then((commentData) => {
           alert ("comment added")
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addComment">Add Comment: </label>
                <input type="text" id="addComment" onChange={(event) => {setBody({username: loggedInUser.username, body: event.target.value})}}/>
                <label htmlFor="submit"></label>
                <button type="submit" id="submit">Submit</button>
            </form>
        </>
    )

    
}
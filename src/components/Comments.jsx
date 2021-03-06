import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import DeleteComment from "./DeleteComment";
import { UserContext } from "../contexts/UserContexts";
import { useContext } from "react";


export default function Comments () {
    const {loggedInUser} = useContext(UserContext)
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams()

    useEffect(() => {
        api.fetchCommentsByArticleId(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
            setIsLoading(false);
        })
    }, [article_id])

    return isLoading ? (
        <h1>loading...</h1>
    ) :  (
        <section className="mw7 center">
           <ul>
              
            {comments.map((comment) => {
                const commentDate = comment.created_at.slice(0, 10)
                return (
                    <article key={comment.comment_id} className="pv4 bt bb b--black-10 ph3 ph0-l">
                        
                        <p className="f5 f4-l lh-copy athelas">Author: {comment.author}</p>
                        <p className="f5 f4-l lh-copy athelas">Comment: {comment.body}</p>
                        <p className="f5 f4-l lh-copy athelas">Votes: {comment.votes}</p>
                        <p className="f5 f4-l lh-copy athelas">Date: {commentDate}</p>
                        {   loggedInUser.username === comment.author ?
                            <DeleteComment setComments={setComments} comment_id={comment.comment_id}/> : null}
                    </article>              
                )
            })}
            </ul>
        </section>
    )
}
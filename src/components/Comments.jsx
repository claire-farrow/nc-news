import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";


export default function Comments () {

    const [comments, setComments] = useState([])

    const {article_id} = useParams()

    useEffect(() => {
        api.fetchCommentsByArticleId(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
            
        })
    }, [article_id])

    return (
        <section className="article">
           <ul>
              
            {comments.map((comment) => {
                return (
                    <article key={comment.comment_id} className="article-card">
                        <p>{comment.article_id}</p>
                        <p>{comment.comment_id}</p>
                        <p>{comment.author}</p>
                        <p>{comment.body}</p>
                        <p>{comment.votes}</p>
                        <p>{comment.create_at}</p>
                    </article>              
                )
            })}
            </ul>
        </section>
    )
}
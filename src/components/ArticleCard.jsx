import {Link} from "react-router-dom";

export default function ArticleCard({article_id, title, topic, author, body, created_at, votes}) {
    return (
        <article>
            <Link to="/articles">{article_id}</Link>
            <h3>Title: {title}</h3>
            <h4>Topic: {topic}</h4>
            <h5>Author: {author}</h5>
            <p>Description: {body}</p>
            <p>Created: {created_at}</p>
            <p>Votes: {votes}</p>
        </article>
    )
   
}
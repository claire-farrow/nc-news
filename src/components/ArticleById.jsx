import * as api from "../api";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Votes from "./Votes";
import {Link} from "react-router-dom";

export default function ArticleById () {
    const [article, setArticle] = useState([])

    const {article_id} = useParams()

    useEffect(() => {
        api.fetchArticleById(article_id).then((articleFromApi) => {
            setArticle(articleFromApi)
        })
    }, [article_id])

    
    return (

        <section className="article">
            <ul>
                <article key={article.article_id} className="article-card">
                    <h3>{article.title}</h3>
                    <h4>{article.topic}</h4>
                    <h5>{article.author}</h5>
                    <p>{article.body}</p>
                    <Link key={article.article_id} to={`/articles/${article.article_id}/comments`}><p>Show Comment on Article ID: {article.article_id}</p></Link>
                    <p>{article.created_at}</p>
                    <Votes votes={article.votes} article_id={article.article_id}/>
                </article>  
            
            </ul>    
        </section>
    )

}
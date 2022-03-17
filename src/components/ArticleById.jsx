import * as api from "../api";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Votes from "./Votes";
import {Link} from "react-router-dom";
import PostComment from "./PostComment";
import ErrorPage from "./ErrorPage";

export default function ArticleById () {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    const {article_id} = useParams()

    useEffect(() => {
        api.fetchArticleById(article_id).then((articleFromApi) => {
            setArticle(articleFromApi)
            setIsLoading(false);
        }).catch(({response: {data: {msg}}, request: {status}}) => {
            setError({status, msg})

 
        })
    }, [article_id])

    if (error) {return <ErrorPage status={error.status} msg={error.msg} />}

    return isLoading ? (
        <h1>loading...</h1>
    ) :  (

        <section className="article">
            
           <ul>
                <article key={article.article_id} className="article-card">
                    <h3>{article.title}</h3>
                    <h4>{article.topic}</h4>
                    <h5>{article.author}</h5>
                    <p>{article.body}</p>
                    <Link key={article.article_id} to={`/articles/${article.article_id}/comments`}><p>Show Comments</p></Link>
                    <Votes votes={article.votes} article_id={article.article_id}/>
                    <PostComment setArticle={setArticle} />
                </article>  
            </ul>
            
        </section>
    )

}
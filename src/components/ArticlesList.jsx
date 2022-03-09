import * as api from "../api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {Link} from "react-router-dom"
import Votes from "./Votes";

export default function ArticleList () {
    const [articles, setArticles] = useState([]);
    const [searchParams] = useSearchParams()

    const topic = searchParams.get("topic")

    useEffect(() => {
        if (topic !== null) {
            api.fetchArticlesByTopic(topic).then((articlesFromApi) => {
                setArticles(articlesFromApi)
            })
        } else {
            api.fetchArticles().then((articlesFromApi) => {
                setArticles(articlesFromApi);
            })
        }
    }, [topic])
  

    
    return (
        <section className="article">
            <ul>
            {articles.map((article) => {
                const date = article.created_at.slice(0, 10)
                return (
                    <article key={article.article_id} className="article-card">
                        <Link key={article.article_id} to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
                        <h4>{article.topic}</h4>
                        <h5>{article.author}</h5>
                        <p>{article.body}</p>
                        <p>{date}</p>
                        <Votes votes={article.votes} article_id={article.article_id}/>
                    </article>              
                )
            })}
            </ul>    
        </section>
    )
}
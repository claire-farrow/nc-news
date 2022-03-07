import * as api from "../api";
import { useEffect, useState } from "react";


export default function ArticleList () {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        api.fetchArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi)
            
        })
    }, [])
    
    return (
        <section className="article">
            <ul>
            {articles.map((article) => {
                
                return (
                    <article key={article.article_id} className="article-card">
                        <h3>{article.title}</h3>
                        <h4>{article.topic}</h4>
                        <h5>{article.author}</h5>
                        <p>{article.body}</p>
                        <p>{article.created_at}</p>
                        <p>{article.votes}</p>
                    </article>              
                )
            })}
            </ul>    
        </section>
    )
}
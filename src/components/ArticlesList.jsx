import * as api from "../api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {Link} from "react-router-dom"
import Votes from "./Votes";
import { SortBy } from "./SortBy";
import Collapse from "./Collapse";


export default function ArticleList (date) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("desc");
    
    const [searchParams] = useSearchParams()
    const topic = searchParams.get("topic")

    useEffect(() => {
      
        api.fetchArticles(topic, sortBy, orderBy).then((articlesFromApi) => {
            setArticles(articlesFromApi);
            setIsLoading(false);
        })
        

    }, [topic, sortBy, orderBy])
  

  
    return isLoading ? (
        <h1>loading...</h1>
    ) :  (
        <>
        <SortBy 
            setSortBy={setSortBy}
            selectedSort={sortBy}
            setOrderBy={setOrderBy}
            selectedOrder={orderBy}
            />  
        <section className="article">
            <ul>
            {articles.map((article) => {
                const date = article.created_at.slice(0, 10)
                return (
                    <article key={article.article_id} className="article-card">
                        <Link key={article.article_id} to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
                        <h4>{article.topic}</h4>
                        <h5>{article.author}</h5>
                        <Collapse><p>{article.body}</p></Collapse>
                        <p>{date}</p>
                        <Votes votes={article.votes} article_id={article.article_id}/>
                    </article>              
                )
            })}
            </ul>
        </section>
        </> 
    )
}
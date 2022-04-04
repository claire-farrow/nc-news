import * as api from "../api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {Link} from "react-router-dom"
import Votes from "./Votes";
import { SortBy } from "./SortBy";
import Collapse from "./Collapse";
import ErrorPage from "./ErrorPage";

export default function ArticleList (date) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("desc");
    const [error, setError] = useState(null)
    
    const [searchParams] = useSearchParams()
    const topic = searchParams.get("topic")

    useEffect(() => {
      
        api.fetchArticles(topic, sortBy, orderBy).then((articlesFromApi) => {
            setArticles(articlesFromApi);
            setIsLoading(false);
        }).catch(({response: {data: {msg}}, request: {status}}) => {
            console.log()
            setError({status, msg})
        })
        

    }, [topic, sortBy, orderBy])
  
    if (error) {return <ErrorPage status={error.status} msg={error.msg} />}
  
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
        <section className="mw7 center">
            <ul>
            {articles.map((article) => {
                const date = article.created_at.slice(0, 10)
                return (
                    <article key={article.article_id} className="pv4 bt bb b--black-10 ph3 ph0-l">
                        <Link key={article.article_id} to={`/articles/${article.article_id}`}><h3 className="athelas ph3 ph0-l">{article.title}</h3></Link>
                        <h4 className="f3 athelas mt0 lh-title">{article.topic}</h4>
                        <h5 className="f6 lh-copy gray mv0">{article.author}</h5>
                        <Collapse><p className="f5 f4-l lh-copy athelas">{article.body}</p></Collapse>
                        <p className="f6 db gray">{date}</p>
                        <Votes votes={article.votes} article_id={article.article_id} />
                    </article>              
                )
            })}
            </ul>
        </section>
        </> 
    )
}
import * as api from "../api";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Topics () {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        api.fetchTopics().then((topicsFromApi) => {
            setTopics(topicsFromApi)
        })
    }, []);

    return (
        <nav>
            {topics.map((slug) => {
                return (
                    <Link key={slug.slug} to={`/articles?topic=${slug.slug}`} className="pa3 pa4-ns">
                        {slug.slug}
                    </Link>
                )
            })}
        </nav>
    )
}
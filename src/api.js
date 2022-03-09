import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://cf-nc-news.herokuapp.com/api"
})

export function fetchArticles () {
    return newsApi.get("/articles").then((res) => {
        return res.data.articles;
    })
}

export function fetchTopics () {
    return newsApi.get("/topics").then((res) => {
        return res.data.topics;
    })
}

export function fetchArticlesByTopic (topic) {
    return newsApi.get(`/articles?topic=${topic}`).then((res) => {
        return res.data.articles;
    })
}

export function fetchArticleById (article_id) {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article;
    })
}

export function patchArticleWithVotes (article_id, votes) {
    return newsApi.patch(`/articles/${article_id}`, {inc_votes:votes}).then((res) => {
        return res.data.articles
    })
}
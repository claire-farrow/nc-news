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
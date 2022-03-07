import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://cf-nc-news.herokuapp.com/api"
})

export function fetchArticles () {
    return newsApi.get("/articles").then((res) => {
        return res.data.articles;
    })
}
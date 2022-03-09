import './App.css';
import Header from "./components/Header";
import Nav from './components/Nav';
import ArticleList from './components/ArticlesList';
import Topics from './components/Topics';
import ArticleById from "./components/ArticleById";
import Comments from "./components/Comments";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Nav />
        <Topics />
        <Routes>
          <Route path="/" element={ <ArticleList />}></Route>
          <Route path="/articles" element={<ArticleList />}></Route>
          <Route path="/articles/:article_id" element={<ArticleById />}></Route>
          <Route path="/articles/:article_id/comments" element={<Comments />}></Route>
        </Routes>
       
      </main>
    </div>
  );
}

export default App;

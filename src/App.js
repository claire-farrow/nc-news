import './App.css';
import Header from "./components/Header";
import Nav from './components/Nav';
import Users from './components/Users';
import ArticleList from './components/ArticlesList';
import Topics from './components/Topics';
import ArticleById from "./components/ArticleById";
import Comments from "./components/Comments";
import {Routes, Route} from "react-router-dom";
import {UserContext} from "./contexts/UserContexts";
import {useState} from "react";
import ErrorPage from './components/ErrorPage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState ({
    username: "tickle122"
  })


  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Nav />
        <Topics />
        <Routes>
          <Route path="/" element={ <ArticleList />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="/articles" element={<ArticleList />}></Route>
          <Route path="/articles/:article_id" element={<ArticleById />}></Route>
          <Route path="/articles/:article_id/comments" element={<Comments />}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
       
      </main>
    </div>
    </UserContext.Provider>
  );
}

export default App;

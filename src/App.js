import './App.css';
import Header from "./components/Header";
import Nav from './components/Nav';
import ArticleList from './components/ArticlesList';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={ <ArticleList />}></Route>
        </Routes>
       
      </main>
    </div>
  );
}

export default App;

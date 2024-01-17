import {Nav, Footer} from './components/Nav';
import {TextForm} from './components/TextForm';
import {News} from './components/News';
import NewsFunc from './components/NewsFunc';
import {NewsScroll} from './components/NewsScroll';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {
  const pageSize = 20;  
  const [progress, setProgress] = useState(0)
  const api_key = process.env.REACT_APP_NEWS_API_KEY;
  return (
    <>
    <Router>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Nav title="Exact Support" />   
      
      <div className="container">
          <Routes>
            <Route path="/" exact element={<JobDetail name="Peeyush" salary={20000} position="PHP Dev" company="Konceive" />}  />
            <Route path="/TextForm" exact element={<TextForm />}  />
            <Route path="/NewsFunc" exact element={<NewsFunc api_key={api_key} setProgress={setProgress} key="general" country="in" pagesize={pageSize} category="general" />}  />
            {/* <Route path="/NewsScroll" exact element={<NewsScroll api_key={api_key} setProgress={setProgress} key="general" country="in" pagesize={pageSize} category="general" />}  />
            <Route path="/News" exact element={<News  setProgress={setProgress} key="general" country="in" pagesize={pageSize} category="general" />}  />
            <Route path="/news/business" exact element={<News  setProgress={setProgress} key="business" country="in" pagesize={pageSize} category="business" />}  />
            <Route path="/news/entertainment" exact element={<News  setProgress={setProgress} key="entertainment" country="in" pagesize={pageSize} category="entertainment" />}  />
            <Route path="/news/health" exact element={<News  setProgress={setProgress} key="health" country="in" pagesize={pageSize} category="health" />}  />
            <Route path="/news/science" exact element={<News  setProgress={setProgress} key="science" country="in" pagesize={pageSize} category="science" />}  />
            <Route path="/news/sports" exact element={<News  setProgress={setProgress} key="sports" country="in" pagesize={pageSize} category="sports" />}  />
            <Route path="/news/technology" exact element={<News  setProgress={setProgress} key="technology" country="in" pagesize={pageSize} category="technology" />}  /> */}
          </Routes> 
        
      </div>
    <Footer />

    </Router>
    
    </>
  );
}


const JobDetail = (props) =>{
  return(
    <div>
      <h1>{props.salary} - {props.position} - {props.company}</h1>
    </div>
  )
}
export default App;

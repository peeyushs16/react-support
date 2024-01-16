import {Nav, Footer} from './components/Nav';
import {TextForm} from './components/TextForm';
import {News} from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const pageSize = 20;
  return (
    <>
    <Router>
      <Nav title="Exact Support" />   
      
      <div className="container">
          <Routes>
            <Route path="/" exact element={<JobDetail name="Peeyush" salary={20000} position="PHP Dev" company="Konceive" />}  />
            <Route path="/TextForm" exact element={<TextForm />}  />
            <Route path="/News" exact element={<News key="general" country="in" pagesize={pageSize} category="general" />}  />
            <Route path="/news/business" exact element={<News key="business" country="in" pagesize={pageSize} category="business" />}  />
            <Route path="/news/entertainment" exact element={<News key="entertainment" country="in" pagesize={pageSize} category="entertainment" />}  />
            <Route path="/news/health" exact element={<News key="health" country="in" pagesize={pageSize} category="health" />}  />
            <Route path="/news/science" exact element={<News key="science" country="in" pagesize={pageSize} category="science" />}  />
            <Route path="/news/sports" exact element={<News key="sports" country="in" pagesize={pageSize} category="sports" />}  />
            <Route path="/news/technology" exact element={<News key="technology" country="in" pagesize={pageSize} category="technology" />}  />
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

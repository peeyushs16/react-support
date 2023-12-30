import {Nav, Footer} from './components/Nav';
import {TextForm} from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <Nav title="Exact Support" />   
      
      <div className="container">
          <Routes>
            <Route path="/" exact element={<JobDetail name="Peeyush" salary={20000} position="PHP Dev" company="Konceive" />}  />
            <Route path="/TextForm" exact element={<TextForm />}  />
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

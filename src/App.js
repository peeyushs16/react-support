import './App.css';

function App() {
  return (
    <div className="App">
      <JobDetail name="Peeyush" salary={20000} position="PHP Dev" company="Konceive" />
      <JobDetail name="Peeyush" salary={20000} position="PHP Dev" company="Konceive" />
    </div>
  );
}


const JobDetail = (props) =>{
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}
export default App;

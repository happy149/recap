import React, { useState} from'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['jashim', 'deepjol','Bapparaz']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name={nayoks[1]} age="53"></Nayok>
      <Nayok name="shakib"></Nayok>
      <Nayok name="Bapparaz"></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}
function MovieCounter(){
  const [count,setCount] =useState(0);
  console.log(count,setCount)
  return(
    <div>
      <button>Add Movie</button>
      <h3>Number of movies:</h3>
    </div>
  )
}
function Nayok(props){
  //console.log(props)
 const nayokStyle={
   border: '2px solid red',
   margin:'20px'
   
 }
  
  return (
  <div style= {nayokStyle}>
<h1> Ami khol nayok-{props.name} </h1>
<h3>i have done 5 movie in {props.age||30} years</h3>

  </div>)
  
  

}

export default App;

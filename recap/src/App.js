import React, { useEffect, useState} from'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [nayoks, setNayoks] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))

  },[])

  //const nayoks = [{name:'jashim', age:56},{name:'deepjol',age:61}, {name:'Bapparaz', age:41}, {name:'sakib', age:31}];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      
      
      {
       // nayoks.map(nayok => <li>{nayok}</li>)
       nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}
function MovieCounter(){
  const [count,setCount] =useState(0);
  const handleClick = () => setCount(count +1);
  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies:{count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count +10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
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

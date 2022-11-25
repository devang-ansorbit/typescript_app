import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import Containor from './Components/Containor';
import Parent from './Components/Parent';
import Child12 from './Components/Child1&2';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';

function App() {

  const person = {
    Person_name: "Devang K Patel"
  }

  const personList =
    [
      {name:'Devang',age:23},
      {name:'Manav',age:20},
      {name:'Arti',age:25}
    ]


  return (
    <div className="App">
      {/* <Person name={person} /> */}
      {/* <PersonList nameList={personList} /> */} 
      {/* <Containor /> */}
      <Parent />
      <Parent1 />
      <Parent2 />
    </div>
  );
}

export default App;

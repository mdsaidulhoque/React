import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from "./Todo.jsx"
import Actor from "./Actor.jsx"
import Teacher from "./Teacher.jsx"
import Bookstorage from "./Bookstorage.jsx"

function App() {

  const books = [{id: 1, name: "Fortran", price: 180},
    {id:2 , name: "Calculas-2", price: 210},
    {id: 3 , name : "Ordinary", price: 200},
    {id: 4, name: "Statistics" , price: 230}
  ];

  const teachers = [
    {id: 1,
      name: "Sahadat Kabir",
      subject: "Ordinary"
    },
    {id: 2,
      name: "Mannan",
      subject: "Calculas 2"
    },
    {
      id: 3,
      name: "Khaja",
      subject: "Fortran"
    }

];

    const actors = ["Tomas Shelbey","Tom Hiddleson","Tom Holland","Robert Downey Jr.","Chris Evans","Chris Hemsworth"];

   return(
    <div>

      <h2>React Core Concept 1</h2>

      <Tab1></Tab1>
      <Tab2></Tab2>

     <Bookstorage books = {books}></Bookstorage>
      
      {
        teachers.map(sir => <Teacher teacher = {sir}></Teacher>)
      }


    <h3>Actor names I know</h3>
      
   <Actor name = "Tom Cruise"></Actor>
   {
    actors.map(actor => <Actor name = {actor}></Actor>)
   }

   
      </div>
   )





  
 



function Tab1(){

  return(

  <div className = "college">
      <College name = "Govt City College" location="Chittagong"></College>
       <Person name = "Minhaj" age = {22}></Person>
     
    </div>
  )
}



function Tab2(){

  return(

  <div className = "college">
      <College name = "Chattogram Govt College" location="Chittagong"></College>
       <Person name = "Hamid" age = {23}></Person>
     
    </div>
  )
}
 

function Person({name,age}) {

  // console.log(props);

  const profileStyle = {
    border: "10px solid pink",
    borderRadius: "15px",
    padding: "20px",
    marging: "20px"
  }

  return (
    <div style = {profileStyle}>
    <h2>Student Profile</h2>
    <h3>Name: {name}</h3>
    <h3>Age: {age}</h3>
    </div>
  )
}

function College({name,location}) {

return(

  <div>
    <h2>This is a College</h2>
    <h3>Name: {name}</h3>
    <h3>Location: {location}</h3>
    </div>
)
}
}
 
export default App;

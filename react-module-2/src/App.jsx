import './App.css'
import Counter from "./Counter.jsx"
import Friends from "./Friends.jsx"
import Team from "./Team.jsx"
import Users from "./Users.jsx"

function App() {
  
  function eventHandler1(){
    alert("Button1 is Clicked");
  }

  const eventHandler2 = () => {
    alert("Button2 is Clicked");
  }

  const eventHandler4 = (num) => {
    alert(num + 5);
  }

  return (
    <>
      
      <h2>React Core Concept 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick = {eventHandler1}>Button1</button>
      <button onClick = {eventHandler2}>Button2</button>
      <button onClick = {() => {alert("Button3 is Clicked")}}>Button3</button>
      <button onClick = {() => eventHandler4(5)}>Button4</button> 
    </>
  )
}

export default App

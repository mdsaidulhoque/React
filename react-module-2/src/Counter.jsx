import {useState} from "react"
export default function Counter(){
    const [count,setCount] = useState(0);

    function Add(){
        const add = count + 1;
        setCount(add);
    }

    function Reduce(){
        const reduce = count - 1;  
        setCount(reduce);
  
    }

    return(
        <div style = {{border: "5px solid tomato" ,borderRadius: "15px",margin: "20px",padding: "15px"}
}>
            <h2>Counter: {count}</h2>
            <button onClick = {Add}>Add</button>
            <button onClick = {Reduce}>Reduce</button>
        </div>
    )
} 
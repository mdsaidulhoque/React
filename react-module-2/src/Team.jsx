import {useState} from "react"
export default function Team(){
    const [team,setTeam] = useState(11);

    function add(){
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    function remove(){
        setTeam(team - 1);
    }

    const teamStyle = {
        border: "5px solid purple",
        borderRadius: "15px",
        padding: "20px",
        margin: "20px"
    }
    return(
        <div style = {teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick = {add}>Add</button>
            <button onClick = {remove}>Remove</button>
        </div>
    )
}
import {useEffect,useState} from "react"
import "./Friends.css"
import Friend from "./Friend.jsx"
export default function Friends() {
    const [friends,setFriends] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    
    return(
        <div className = "box">
            <h3> Friends: {friends.length}  </h3> 
            {
                friends.map(friend => <Friend friend = {friend}></Friend>)
                // friend = {friend} 1st friend is props and 2nd one is value
            }
        </div>
    )
}
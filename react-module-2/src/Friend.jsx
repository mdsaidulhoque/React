export default function ({friend}){
    const {name,email} = friend;
    return(
        <div className = "friend">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}
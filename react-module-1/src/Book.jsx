import "./Book.css";
export default function Book({book}){
    const {name,price} = book;

    return(
        <div className = "book">
            <h3>Book name: {name}</h3>
            <h4>Price: {price}</h4>
        </div>
    )
}
import Book from "./Book.jsx"
export default function Bookstorage({books}){

    return(
        <div>
        <h3>Number of Books: {books.length}</h3>
        {
            books.map(book => <Book book = {book}></Book>)
        }
        </div>
    )

}
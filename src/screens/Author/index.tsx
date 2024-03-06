import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../../db";


function Author() {
    // path : "users/:userId", 
    const { name } = useParams();
    //console.log(name); //url정보
    const author = authors.find((one)=> one.name === name);
    //console.log(author);
    return(
        <div>
            <h1>Best seller by {name}</h1>
            <ul>
                {author?.books.map((book) => (
                    <li key={`${author.id}-${book.title}`}>
                        <Link to={book.title}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        <hr />
        {/* 해당컴포넌트/스크린의 자식이 있다면 outlet이 자식을 렌더링함 */}
        <Outlet context={author}/>
        {/* <Link to="books">See book's detail</Link> */}
        </div>
    );
}

export default Author;
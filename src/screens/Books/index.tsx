import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { authors } from "../../db";


function Books() {
    const {name, book} = useParams();
    const author = authors.find((one)=> one.name === name);
    const selected = author?.books.find((one)=> one.title === book);
    //console.log(author, selected);

    return(
        <div>
            <h1>{book}</h1>
            <h3><Link to={`/author/${name}/${book}/chapter`}>Chapter</Link></h3>
            <h3><Link to={`/author/${name}/${book}/characters`}>Characters</Link></h3>
           <Outlet />
        </div>
    );
}

export default Books;
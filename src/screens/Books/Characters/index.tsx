import { useParams } from "react-router-dom";
import { authors } from "../../../db";


function Characters() {
    const {name, book} = useParams();
    const author = authors.find((one)=> one.name === name);
    const selected = author?.books.find((one)=> one.title === book);
    console.log(author, selected);

    return(
        <div>
            <h1>Characters</h1>
            {selected?.character?.map((c, index)=> (
                <li key={`${name}_${book}_${index}`}>{c}</li>
            ))}
        </div>
    );
}

export default Characters;
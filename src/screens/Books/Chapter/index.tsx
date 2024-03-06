import { useParams } from "react-router-dom";
import { authors } from "../../../db";


function Chapter(){
    const {name, book} = useParams();
    const author = authors.find((one)=> one.name === name);
    const selected = author?.books.find((one)=> one.title === book);
    console.log(author, selected);
   
    return (
        <div>
            <h1>Chapter</h1>
             {selected?.chapter?.map((c, index)=> (
                <li key={`${name}_${book}_${index}`}>{c}</li>
            ))}
        </div>

    );

}

export default Chapter;
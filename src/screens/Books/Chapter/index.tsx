import { useParams } from "react-router-dom";
import { authors } from "../../../db";


function Chapter(){
    const {name, book : title} = useParams();
    const author = authors.find((one)=> one.name === name);
    const selected = author?.books.find((one)=> one.title === title);
    console.log(author, selected);
    console.log(title);
   
    return (
        <div>
            <h1>Chapter</h1>
             {selected?.chapter?.map((c, index)=> (
                <li key={`${name}_${title}_${index}`}>{c}</li>
            ))}
        </div>

    );

}

export default Chapter;
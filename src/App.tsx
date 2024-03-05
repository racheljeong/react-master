import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props)=> props.theme.bgColor};
  width: 200px;
  height: 200px;
`;

function App() {

  const [value, setValue] = useState("");

  const changeValue = (event : React.FormEvent<HTMLInputElement>) => {
    //event.currentTarget.value;
    const {currentTarget : {value}} = event;
    console.log(value);
    setValue(value);
  };

  const nameSubmitFunc = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`hi`,value);
  };

  return (
   <Container>
    <form onSubmit={nameSubmitFunc}>
      <input type="text" value={value} onChange={changeValue}/>
      <button>login</button>
    </form>
   </Container>
  );
}

export default App;

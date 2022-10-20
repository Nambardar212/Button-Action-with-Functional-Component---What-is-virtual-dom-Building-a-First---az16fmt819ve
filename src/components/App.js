import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {
  const [txt, setShow] = useState('')

  const handleClick = () => {
        // console.log('djgfdj')
        setShow("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
  }
  return (
    <div id="main">
       <p id="para">{txt}</p>
       <button id="click" type="submit" onClick={()=>{handleClick()}}>Click</button>
    </div>
  );
}


export default App;

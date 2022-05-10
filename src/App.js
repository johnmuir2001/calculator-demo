import { useState } from "react";
import { evaluate } from "mathjs";
import './App.css';

function App() {
  const [sum, setSum] = useState("")
  const [buttons, setButtons] = useState(["7","8","9","C","4","5","6","*","1","2","3","/","+","0","-","="])

  const handleClick = (string) => {
      if(string === "="){
          setSum(evaluate(sum))
      } else if(string === "C"){
          setSum("")
      } else {
          setSum(sum + string)
      }
  }

  return (
    <div className="app">
      <h1>{sum}</h1>
      <div className="buttonWrap">
        {buttons.map((button, index) => {
          return (
            <button onClick={() => handleClick(button)} key={index}>{button}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;

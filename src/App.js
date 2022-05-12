import { useState } from "react";
import { evaluate } from "mathjs";
import './App.css';

function App() {
  const [sum, setSum] = useState("");
  const [advanced, setAdvanced] = useState(false);
  const buttons = ["7","8","9","C","4","5","6","*","1","2","3","/","+","0","-","="];
  const advancedButtons = ["7","8","9","C","(","4","5","6","x",")","1","2","3","÷","√","+","0","-",".","="]

  const handleClick = (string) => {
      if(string === "="){
        let expression = sum;
        let changeSqrt = expression.replace("√", "sqrt");
        let changeDivide = changeSqrt.replace("÷", "/");
        let changeMultiply = changeDivide.replace("x", "*");
        setSum(evaluate(changeMultiply))
      } else if(string === "C"){
          setSum("")
      } else if(string === "√"){
        setSum(sum + string + "(")
      } else {
          setSum(sum + string)
      }
  }

  return (
    <div className="app">
      <button onClick={() => setAdvanced(!advanced)}>Advanced Calculator</button>
      <h1>{sum}</h1>
      <div className={advanced ? "advancedButtonWrap" : "buttonWrap"}>
        {advanced ? 
          advancedButtons.map((button, index) => {
            return (
              <button onClick={() => handleClick(button)} key={index}>{button}</button>
            )
          }) :

          buttons.map((button, index) => {
            return (
              <button onClick={() => handleClick(button)} key={index}>{button}</button>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

 import { useState } from "react";
import Buttons from "./Buttons";
// import "./Counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [valuebtn ,setValuebtn]= useState(false)
  const handleCounter = (pressedVal) => {
    if (pressedVal === "next") {
      setNumber(number + 1);
      if (number >= 20) {
        alert("sorry");
        setValuebtn(true)
      }
    } else if (pressedVal === "prev") {
      setNumber(number - 1);
      if (number <= -20) {
        alert("sorry");
        setValuebtn(true)
      }
    } else {
      setNumber(0);
    }
  };
  return (
    <>
    <h1 className={number > 0 ? "green" : number === 0 ? "blue" : "red"}>
        {number}
      </h1>
      <Buttons valuebtn={valuebtn} handleC={handleCounter} />
    </>
  );
};

export default Counter;



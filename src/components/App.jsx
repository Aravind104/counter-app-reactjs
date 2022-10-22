import Button from "./Button"
import DisplayCount from "./DisplayCount"
import {useState} from "react";
import './App.css';
function App(){
    let [count,setCount] =useState(0);
    function increaseCount(){
        setCount(count+1);
    }
    function decreaseCount(){
        setCount(count>0 ? count-1: count=0);
    }
    function resetCount(){
        setCount(0);
    }
    return(
        <div className="box">
            <h1>Counter App</h1>
            <DisplayCount counter={count}/>
            <Button increase={increaseCount} decrease={decreaseCount} reset={resetCount}/>
        </div>
    )
}

export default App
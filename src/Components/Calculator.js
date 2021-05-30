import react ,{useState}from "react";
import Button from "./Button";
import OutputScreen from "./OutputScreen";
import Title from "./Ttile";

let Calculator =()=>{
   let [query,setQuery]=useState("");
    let [answer,setAnswer]=useState("");
    let arr=["Clear","Delete",".","/","7","8","9","*","4","5","6","-","1","2","3","+","0","="];

    let clickHandler=(e)=>{
        let value=e.target.value;
        switch(value){
            case "=":{
                let result="";
                try{
                 result=eval(query);
                }
                catch(err){
                    setAnswer("Math Error");
                    break;
                }
                 setAnswer(result);
                break;
            }
            case "Clear":{
                setQuery("");
                setAnswer("");
                break;
            }
            case "Delete":{
                setQuery(query.substr(0,query.length-1));
                break;
            }
            default:{
                setQuery(query+=value)
            }
        }
    }

    return (
        <div className="container">
            <Title />
            <OutputScreen answer={answer} query={query}/>
            <div className="keypad">
                { arr.map(item=>(<Button clickHandler={clickHandler} value={item}/> ))}  
            </div>
        </div>
    )
}


export default Calculator

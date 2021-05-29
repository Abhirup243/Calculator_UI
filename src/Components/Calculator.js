import react ,{useState}from "react";
import Button from "./Button";
import OutputScreen from "./OutputScreen";
import Title from "./Ttile";

let Calculator =()=>{
   let [query,setQuery]=useState("");
    let [answer,setAnswer]=useState("");

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
        <div>
            <Title />
            <OutputScreen answer={answer} query={query}/>
            <div>
            <Button clickHandler={clickHandler} value="Clear"/>
            <Button clickHandler={clickHandler} value="Delete"/>
            <Button clickHandler={clickHandler} value="."/>
            <Button clickHandler={clickHandler} value="/"/>
            </div>
            <div>
            <Button clickHandler={clickHandler} value="7"/>
            <Button clickHandler={clickHandler} value="8"/>
            <Button clickHandler={clickHandler} value="9"/>
            <Button clickHandler={clickHandler} value="*"/>
            </div>
            <div>
            <Button clickHandler={clickHandler} value="4"/>
            <Button clickHandler={clickHandler} value="5"/>
            <Button clickHandler={clickHandler} value="6"/>
            <Button clickHandler={clickHandler} value="-"/>
            </div>
            <div>
            <Button clickHandler={clickHandler} value="1"/>
            <Button clickHandler={clickHandler} value="2"/>
            <Button clickHandler={clickHandler} value="3"/>
            <Button clickHandler={clickHandler} value="+"/>
            </div>
            <div>
            <Button clickHandler={clickHandler} value="0"/>
            <Button clickHandler={clickHandler} value="="/>
            </div>
        </div>
    )
}


export default Calculator
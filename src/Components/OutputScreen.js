const { default: Output } = require("./Output")

const OutputScreen =(props)=>{
return (
    <div>
        <Output value={props.query}/>
        <Output value={props.answer}/>
    </div>
)
}

export default OutputScreen
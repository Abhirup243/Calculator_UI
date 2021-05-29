const Button=(props)=>{
return(
    <input type="button" onClick={props.clickHandler}   value={props.value}/>
)
}

export default Button;
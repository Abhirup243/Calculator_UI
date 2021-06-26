const Button=(props)=>{
return(
    <input type="button" onClick={props.clickHandler}  id={props.value} value={props.value}/>
)
}

export default Button;

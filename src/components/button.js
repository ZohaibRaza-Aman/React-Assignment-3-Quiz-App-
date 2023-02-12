function Button(props){
return <button onClick={props.Click} className={props.className ? props.className :"Primary-btn"}
>
{props.lebel}
button</button>
}
export default Button;


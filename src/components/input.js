import { useState } from "react";

function Input(props) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    props.text(value)
    
  };

  return (
    <>
      <input onChange={onChange} placeholder="Enter text"></input>
      <br/>
      <button onClick={onClick}>Search</button>
    </>
  );
}
export default Input;

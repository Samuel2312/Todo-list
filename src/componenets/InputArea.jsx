import React,{useState} from "react";

  function Input(props){
    const [tasks,setTasks ] = useState("")
    function handleChange(event){
        const name=event.target.value;
        setTasks(name);
    }
    return (
        <div className="form">
           <input type="text" onChange={handleChange} value={tasks}/>
           <button onClick={()=>{
                props.onAdd(tasks);
                setTasks("");
                }}
                >
                <span>Add</span>
           </button>
        </div>
    )
}
export default Input;


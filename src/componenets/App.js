import React, { useState } from 'react';
import Todo from './ToDoItems';
import Input from './InputArea'
function App() {
 
 const [items , setItems] = useState([]);


 function handleClick(tasks){
    setItems((prevValue)=> {
      return [
        ...prevValue, tasks
       
      ]
    })
    
 }
 function delelteItem(id){
   
   setItems(prevValue => {
      return prevValue.filter(
         (item, index)=>{
             return index !==id;
         }
      )
   })
 }
  return (
    <div className='container'>
       <div className='title'>
          <h1>Todo App</h1>
       </div>
       <div className='form'>
          <Input 
             onAdd={handleClick}
          />
       </div>
       <div className='lists'>
          <ul >
             {items.map((item, index) =>(
               <Todo 
                  key= {index}
                  id= {index}
                  text= {item}
                  onChecked= {delelteItem}
               />
              ))}
             
               
          </ul>
       </div>
    </div>
  )
  }
export default App;

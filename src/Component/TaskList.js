import React, { useState } from 'react'

function TaskList(props) {
  const handleEnterPress = (e)=>{
    if(e.keyCode===13){
      props.addList(inputText)
      outputText("")
    }
  }
  const [inputText,outputText] = useState('');
  return (
   <div className='input-container'>
    <input type='text'
     className='input-box-todo'
     placeholder='Add a Todo'
     value={inputText}
     onChange={(e)=>{
      outputText(e.target.value)
     }}
     onKeyDown={handleEnterPress}
 //    onKeyDown={handleEnterPress}
     />
   <button className='add-btn' onClick={()=>{
   props.addList(inputText)
   outputText("")
   }}>+</button>
   </div>
  );
}

export default TaskList
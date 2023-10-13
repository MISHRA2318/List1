// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './Component/TaskList';
import Todo from './Component/Todo';
function App() {
  const storedItems = JSON.parse(localStorage.getItem('listTodo'))
    
  const [listTodo,todoOut]=useState(storedItems)
    const TextInp=(inputText)=>{
      if(inputText!='')
      todoOut([...listTodo,inputText])
    }
const deletetodo =(key)=>{
  let newTodo = [...listTodo];
  newTodo.splice(key,1)
  todoOut([...newTodo])
}

useEffect(()=>{
  localStorage.setItem('listTodo',JSON.stringify(listTodo))
},[listTodo])

  return (
   
      <div className='main-container'>
        <div className='center-container'>
        <TaskList addList={TextInp}/>
       <h1 className= 'app-heading'>TODO</h1>
       <hr/>
        {listTodo.map((listItem,i)=>{
        return (
          <Todo key={i} index={i} item={listItem} deletetodo={deletetodo}/>
        )
       }) 
      }
       
        </div>

      </div>
  )
}

export default App;

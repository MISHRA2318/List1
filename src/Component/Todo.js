import React from 'react'

function Todo(props) {
  return (
<li className='list-item'>
    {props.item}
    <span className='icons'>
    <i class="fa-solid fa-trash icon-delete" onClick={(e)=>{
      props.deletetodo(props.index)
    }}></i>
    </span>
</li>
  )
}

export default Todo
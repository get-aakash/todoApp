import React, { useState } from 'react'


let globalId = 0
const ToDo = () => {
    const [task , setTask] = useState("")
    const [todos, setTodos] = useState([])

    const handleOnChange = (e)=>{
        setTask(e.target.value)
         
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        setTodos([...todos, {todo:task, id: globalId++}])
        setTask("")
    }

    const handleOnDelete = (id)=>{
        setTodos(oldTodo => oldTodo.filter((item)=>item.id !== id))
    }
  return (
    <div className='container'>
      Best ToDo App Ever!!!
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" value={task} onChange={handleOnChange}  />
        <button type='submit' >Create</button>
      </form>
      
      {
        todos.map((item)=>(
            <div key={item.id} className="table">
            <li>{item.todo}</li>
            <button onClick={()=>handleOnDelete(item.id)}>Delete</button>
            </div>
        ))
      }

      
      
    </div>
  )
}

export default ToDo

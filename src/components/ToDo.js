import React, { useState } from 'react'
let globalID = 0
const ToDo = () => {
    
    const [task, setTask] = useState("")
    const [todos, setTodo] = useState([])
    

    const createToDo = (e)=>{
        
        e.preventDefault()
        setTodo([...todos, {todo: task, id: globalID++ }])
        setTask("")
        

    }
    const handleChange = (e)=>{
        setTask(e.target.value)
    }
    
    const deleteItem = (id)=>{
        console.log(id)
    }
    

  return (
    <div className='form'>
      <h1>Best ToDo App Ever</h1>
      <form onSubmit={createToDo}>
      <input type="text" value={task}  onChange={handleChange} />
      <button type='submit'>Create ToDo</button>
      </form>
      <ul>
        {todos.map((item) =>{
            return <div key={item.id}>
                <li >{item.todo}{item.id}</li>
                <button onClick={() =>deleteItem(item.id)}>Delete</button>

            </div> 
        })}
      </ul>

      
      
    </div>
  )
}

export default ToDo

import React, { useState } from 'react'
import DefaultLayout from './layout/DefaultLayout'
let globalId = 0
const ToD0 = () => {
  const [task, setTask] = useState("")
  const [todo, setTodo] = useState([])

  const handleOnchange = (e) => {
    setTask(e.target.value)


  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setTodo([...todo, {todo: task, id:globalId++}])
    setTask("")
  }

  const handleOnDelete = (dataId)=>{
    setTodo(todo.filter(item=>item.id !==dataId))
  }

  return (
    <DefaultLayout>
      <form onSubmit={handleOnSubmit}>
        <input type="text" value={task} onChange={handleOnchange} />
        <button type='submit' >Submit</button>
      </form>
      <ul>
        {todo.map((data, index) => {
          return(
          <div key={data.id}>
            <li >{data.todo}{data.id}</li>
            <button onClick={()=>handleOnDelete(data.id)}>Delete</button>
          </div>)
        }
        )}
      </ul>
    </DefaultLayout>
  )
}

export default ToD0

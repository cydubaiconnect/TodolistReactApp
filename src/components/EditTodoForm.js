import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("")
    //prevent default submission
    const hanldeSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);
        setValue("")


    }
  return (
    <form className='TodoForm' onSubmit={hanldeSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update task</button>
    </form>
  )
}

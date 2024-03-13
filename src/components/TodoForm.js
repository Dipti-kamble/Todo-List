import React , {useState} from 'react'


export const TodoForm = ({addTodo}) => {

    const [value ,setValue] = useState()

    const HandleSubmit = event => {
      event.preventDefault()

      addTodo(value)

      setValue("")
    }
  return (
    


    <form className='TodoForm' onSubmit={HandleSubmit}>
        <input type='text ' className='todo-input' value={value} placeholder='What is the task today' onChange={(event)=>setValue(event.target.value)} />
        <button type='submit' className='todo-btn btn-info rounded-pill '>Add task !</button>
 </form>
    
  )
}

export default TodoForm
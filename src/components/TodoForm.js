import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [taskValue, setTaskValue] = useState("New Task")

    const handleTaskSubmit = e => {
        e.preventDefault();
        addTodo(taskValue);
        setTaskValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleTaskSubmit}>
            <input type="text" className="todo-input" placeholder="What is the task today?"
             value={taskValue}
             onChange={(e) => setTaskValue(e.target.value)}/>
            <button className="todo-btn" type="submit">Add Task</button>
        </form>
    )
}

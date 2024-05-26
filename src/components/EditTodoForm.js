import React, {useState} from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [taskValue, setTaskValue] = useState(task.task)

    const handleTaskSubmit = e => {
        e.preventDefault();
        editTodo(taskValue, task.id);
        setTaskValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleTaskSubmit}>
            <input type="text" className="todo-input" placeholder="Update Task"
                   value={taskValue}
                   onChange={(e) => setTaskValue(e.target.value)}/>
            <button className="todo-btn" type="submit">Update Task</button>
        </form>
    )
}

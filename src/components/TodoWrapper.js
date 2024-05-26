import React, {useState} from 'react'
import {TodoForm} from "./TodoForm";
import { v4 as uuidv4  } from 'uuid';
import {Todo} from "./Todo";
import {EditTodoForm} from "./EditTodoForm";

uuidv4();
export const TodoWrapper = () => {
    const [todoTasks, setTodoTasks] = useState([])
    const addTodo = todo => {
            setTodoTasks([...todoTasks, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }

    const toggleComplete = id => {
        setTodoTasks( todoTasks.map( todo => todo.id === id ? { ... todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodoTasks(todoTasks.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodoTasks( todoTasks.map( todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
    }

    const editTask = (task, id) => {
        setTodoTasks( todoTasks.map( todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo ))
    }

    return (
        <div className="TodoWrapper">
            <h1>Sohrannay dey Sohrannay kamm!</h1>
            <TodoForm addTodo={addTodo} />
            { todoTasks.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={ editTask } task={ todo } />
                ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo = {deleteTodo} editTodo={ editTodo }/>
                )
            ) )}
        </div>
    )
}

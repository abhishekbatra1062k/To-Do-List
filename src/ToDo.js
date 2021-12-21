import React from 'react'

export default function ToDo({todo, toggleTodo, deleteTodo}) {
    
    function handleDeleteTodo(){
        deleteTodo(todo.id);
    }

    function handleToggleTodo(){
        toggleTodo(todo.id);
    }

    return (
        <div>
            <input className='checkbox' onChange={handleToggleTodo} type='checkbox' checked={todo.complete} />
            <label>{todo.name}</label>
            <button onClick={handleDeleteTodo}>Delete</button>
        </div>
    )
}

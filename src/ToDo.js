import React from 'react'

export default function ToDo({todo, toggleTodo, deleteTodo}) {
    
    function handleDeleteTodo(){
        deleteTodo(todo.id);
    }

    function handleToggleTodo(){
        toggleTodo(todo.id);
    }

    return (
        <div className='checkboxes'>
            <label htmlFor={todo.name}><input className='checkbox' onChange={handleToggleTodo} type='checkbox' checked={todo.complete} id={todo.name}/><span>{todo.name}</span></label>
            <button className='delete' onClick={handleDeleteTodo}>Delete</button>
        </div>
    )
}

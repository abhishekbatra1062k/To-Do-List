import { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList';
import {v4 as uuidv4} from 'uuid';
import './styles.css';

const LOCAL_STORAGE_KEY='todoApp.todos';

function App() {
  const [todos, setTodos]=useState([]);
  const todoNameRef=useRef();

  useEffect(() => {
    const storedTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id){
    const newTodos=todos.filter(todo => todo.id!==id);
    setTodos(newTodos);
  }

  function toggleTodo(id){
    const newTodos=[...todos];
    const todo=newTodos.find(todo => todo.id===id);
    todo.complete=!todo.complete;
    setTodos([...newTodos]);
  }

  function handleAddTodo(){
    const name=todoNameRef.current.value.trim();
    const alreadyThere=todos.find(todo => todo.name.toLowerCase()===name.toLowerCase());
    if(name==='' || alreadyThere) return;
    setTodos([...todos, { id: uuidv4(), name: name, complete: false}])
    todoNameRef.current.value=null;
  }

  function handleDeleteCompletedTodos(){
    const newTodos=todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  function handleDeleteAll(){
    setTodos([]);
  }

  return (
    <div className='content'>
      <div className='header'>
        <h1>To-Do List</h1>
        <a href='https://github.com/abhishekbatra1062k/'>Made By Abhishek Batra</a>
      </div>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <div className='task'>
        <input className='input' ref={todoNameRef} type='text' placeholder='Enter Task'></input>
        <button onClick={handleAddTodo}>Add</button>
      </div>  
      <p>{todos.filter(todo => !todo.complete).length} left to do!</p>
      <div>
        <button onClick={handleDeleteCompletedTodos}>Delete Completed</button>
        <button onClick={handleDeleteAll}>Delete All</button>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  const mdate = new Date().toString();

  //Self note: These three dots are called the spread syntax or spread operator.
  //The spread syntax is a feature of ES6, and it's also used in React.
  //Spread syntax allows you to deconstruct an array or object into separate variables.

  const addTodo = (text) => {

    const newTodo = { id:mdate, text, date:mdate};
    setTodos([...todos, newTodo]);
    console.log("todo added last: " + mdate);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log("todo deleted last: " + mdate);
  };

  return (
    <div className='content'>
        <h1 className='text-center'>Todo List Application</h1>
        <div className='input-style bg-warning-subtle my-3'>
          <div className='d-flex flex-column p-3'>
                <input type="text" placeholder="Add new todo and hit enter" onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addTodo(e.target.value);
                    e.target.value = '';
                  }
                  }}
                />
          </div> 
        </div>
          <div className='card-style bg-warning-subtle'>
           
            <div className='d-flex flex-column flex-row p-3'>
              <TodoList todos={todos} onDelete={deleteTodo} />
            </div>
          
          </div>
    </div>
  );
}

export default App;

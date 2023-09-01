import React from 'react';
import {Button} from 'react-bootstrap';

function TodoItem({todo,onDelete}){

    return(
        <>
        <div className='d-flex justify-content-between'>
            <div className='p-1 m-2 h2'>{todo.text}</div>
          
        </div>
        <div className='p-1 m-2 h6'>{todo.date}</div>
        <Button className='p-1 m-2' variant="danger" onClick={() => onDelete(todo.id)}>Delete</Button>
        </>
   
        
    )
}

export default TodoItem;

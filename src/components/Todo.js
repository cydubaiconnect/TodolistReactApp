import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete , deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? 'completed' : ''}
      >
        {task.task}
      </p>

      <div className='catch'>
        <FontAwesomeIcon icon={faPenToSquare} className='pen'onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} className='trash' 
        onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
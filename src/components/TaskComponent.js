import React from 'react'
import { connect } from 'react-redux';
import { deleteTasks, isEditig, toggleDoneTask } from '../actions/tasksActions';

function TaskComponent({ title, description, id, done, deleteTasks, isEditig, toggleDoneTask }) {

  const handleDelete = (id) => {
    deleteTasks(id)
  }

  const handleEdit = (id) => {
    isEditig(id)
  }

  const handleToggleDone = (id, done) => {
    console.log(!done)
    toggleDoneTask(id, done)
  }

  return (
    <li><span><input type='checkbox' onClick={() => handleToggleDone(id, done)} checked={done} /> </span>  {title} <span>{description}</span>
      <button onClick={() => handleDelete(id)} >Delete</button>
      <button onClick={() => handleEdit(id)} >Edit</button>   </li>
  )
}

export default connect(null, { deleteTasks, isEditig, toggleDoneTask })(TaskComponent)
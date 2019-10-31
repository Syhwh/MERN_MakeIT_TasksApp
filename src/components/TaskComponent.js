import React from 'react'
import { connect } from 'react-redux';
import { deleteTasks, editTasks } from '../actions/tasksActions';

function TaskComponent({ title, description, id, deleteTasks, editTasks }) {

  const handleDelete = (id) => {
    deleteTasks(id)
  }

  const handleEdit = (id) => {
    editTasks(id)
  }

  return (
    <li>{title} <span>{description}</span>
      <button onClick={() => handleDelete(id)} >Delete</button>
      <button onClick={() => handleEdit(id)} >Edit</button>   </li>
  )
}

export default connect(null, { deleteTasks, editTasks })(TaskComponent)
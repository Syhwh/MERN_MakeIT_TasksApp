import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postTasks } from '../actions/tasksActions'


function TaskFormComponent({postTasks}) {
  const [task, newTask] = useState([{ title: '', description: '' }])

  const updateField = e => {
    newTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    postTasks(task)
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit} >
        <div>
          <label>Name</label>
          <input
            type='text'
            name='title'
            placeholder='Task Name'
            value={task.title}
            onChange={updateField}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            row='3'
            placeholder='Task Description'
            name='description'
            value={task.description}
            onChange={updateField}
          /> 
        </div>
        <button type='submit'> save task </button>
      </form>
    </div>
  )
}

export default connect(null, { postTasks })(TaskFormComponent)
//export default TaskFormComponent
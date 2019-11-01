import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postTasks, editTasks } from '../actions/tasksActions'


function TaskFormComponent({ postTasks, edit, taskToEdit, editTasks }) {
  const [task, newTask] = useState('')

  useEffect(() => {
    if (edit) {
      newTask({
        ...task,
        _id: taskToEdit._id,
        title: taskToEdit.title,
        description: taskToEdit.description
      });
    }
  }, [edit]);

  const updateField = e => {
    newTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (edit) {
      editTasks(task)     
    } else {
      postTasks(task)
    }
    newTask({
      ...task,
      title:'',
      description:''
    })
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
const mapStateToProps = (store) => {
  return {
    edit: store.tasks.edit,
    taskToEdit: store.tasks.task[0]
  }
}

export default connect(mapStateToProps, { postTasks, editTasks })(TaskFormComponent)

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../actions/tasksActions';
import TaskComponent from '../components/TaskComponent';

function ShowTasksComponent({ tasks, getTasks }) {

  useEffect(() => {
    getTasks();
  }, [])


  return (
    <div >
       <ul>
      {tasks.length > 0 && tasks.map(({ _id, title, description }) =>
        (
         <TaskComponent key={_id}
         id={_id} 
         title={title} 
         description={description} />
        ))}
    </ul>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    tasks: store.getTasks.tasks,
  }
}

export default connect(mapStateToProps, { getTasks })(ShowTasksComponent);

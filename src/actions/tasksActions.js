import axios from 'axios';
import tasksApi from '../utils/ApiConfig'
import { GET_TASKS, POST_TASKS, EDIT_TASKS, DELETE_TASKS } from './types';


export function getTasks() { // export const gettasks=()=>dispatch=>{}
  return function (dispatch) {   
    tasksApi.get('/')
      .then(({ data }) => {
        dispatch({
          type: GET_TASKS,
          payload: data
        })
      });
  }
}

export function postTasks(task) { 
  return function (dispatch) {  
    tasksApi.post('/task', task)
    .then(({data}) => {     
        dispatch({
          type: POST_TASKS,
          payload: data.task
        })
      });
  }
} 

export function deleteTasks(id) {
  return function (dispatch) {    
    tasksApi.delete(`/task/${id}`)
    .then(() => {     
        dispatch({
          type: DELETE_TASKS,
          payload:id
        })
      });
  }
} 

export function editTasks(id) {
  return function (dispatch) {  
    console.log(id)
    // tasksApi.delete(`/task/${id}`)
    // .then(() => {     
    //     dispatch({
    //       type: DELETE_TASKS
    //     })
    //   });
  }
} 
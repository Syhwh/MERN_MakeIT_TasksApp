import tasksApi from '../utils/ApiConfig'
import { GET_TASKS, POST_TASKS, EDIT_TASKS, DELETE_TASKS, IS_EDITING, TOGGLE_DONE_TASKS } from './types';


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
      .then(({ data }) => {
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
          payload: id
        })
      });
  }
}

export function editTasks(task) {
  return function (dispatch) {
    tasksApi.patch(`/task/${task._id}`, task)
      .then(({ data }) => {
        dispatch({
          type: EDIT_TASKS,
          payload: data.task
        })
      });
  }
}
export function isEditig(id) {
  return function (dispatch) {
    dispatch({
      type: IS_EDITING,
      payload: id
    })
  }
}

export function toggleDoneTask(id, done) {
  return function (dispatch) {
    tasksApi.patch(`/task/status/${id}`, { done: !done })
      .then(() => {
        dispatch({
          type: TOGGLE_DONE_TASKS,
          payload: id
        })
      });

  }
}
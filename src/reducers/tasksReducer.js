import { GET_TASKS, POST_TASKS, EDIT_TASKS, DELETE_TASKS, IS_EDITING, TOGGLE_DONE_TASKS } from '../actions/types';

const initialState = {
  tasks: [],
  task: '',
  edit: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case POST_TASKS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case DELETE_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(({ _id }) => _id !== action.payload)
      }
    case EDIT_TASKS:
      return {
        ...state,
        edit: false,
        tasks: state.tasks.map((task) => {
          if (task._id === action.payload._id) {
            return action.payload
          } else {
            return task;
          }
        })
      }
    case IS_EDITING:
      return {
        ...state,
        edit: true,
        task: state.tasks.filter(({ _id }) => _id === action.payload)
      }
    case TOGGLE_DONE_TASKS:
      return {
        ...state,
        tasks: state.tasks.map((task) => {         
          if (task._id === action.payload) {
            task.done = !task.done           
            return task
          } else {
            return task;
          }
        })
      }
    default:
      return state;
  }
}
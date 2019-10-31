import { GET_TASKS, POST_TASKS, EDIT_TASKS, DELETE_TASKS } from '../actions/types';

const initialState = {
  tasks: [],
  task: {}
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
        tasks: state.tasks.filter(({ _id }) => _id != action.payload)
      }
    default:
      return state;
  }
}
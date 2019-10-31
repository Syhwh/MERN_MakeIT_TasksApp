import React from 'react';
import TaskFormComponent from './components/TaskFormComponent'
import ShowTasksComponent from './components/ShowTasksComponent'
import './App.css';

function App() {
  return (
    <div className="App">
    <TaskFormComponent/>
    <ShowTasksComponent/>
    </div>
  );
}

export default App;

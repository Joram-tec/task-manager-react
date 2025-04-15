import { useState } from 'react';
import './App.css';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import Footer from './Footer';
import { myTasks } from './tasks';

function App() {
  const [tasks, setTasks] = useState(myTasks);
  console.log(tasks);

  const addTask = (newTask) => {
    setTasks((previousTasks) => [newTask, ...previousTasks]);
  };

  return (
    <div>
      <h1>Gladiator's Task Manager</h1>
      <TaskInputForm addTask={addTask} />
      <h2>Task List</h2>
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;

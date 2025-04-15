import { useEffect, useState } from 'react';
import './App.css';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import Footer from './Footer';
import { myTasks } from './tasks';


function App() {
  const apiUrl = ("http://localhost:3001/tasks")
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  fetch(apiUrl)
   .then(response => response.json())
   .then((data) => {
    console.log(data)
     setTasks(data)
    //  console.log(data)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
   })
}, []);

const addTask = (newTask) => {
    setTasks((previousTasks) => [newTask, ...previousTasks]);
  };
  return (
    <div>
      <h1>Gladiator's Task Manager</h1>
      <TaskInputForm addTask={addTask} />
      <h2>Task List</h2>
      {isLoading ? <h3>Loading...</h3> : <TaskList tasks={tasks}/>}
      <Footer />
    </div>
  );
}

export default App;

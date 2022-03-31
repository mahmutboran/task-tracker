
import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false)

  //!ADDTASK
  const addTask = (newTask) => {
    const id = tasks.length>0 ? (tasks.slice(-1)[0].id)+1 : 1
    const addNewTask = { id, ...newTask }
    setTasks([...tasks, addNewTask])
  }



  //!DELETE TASK

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((x) => x.id !== deletedTaskId))
  }


  //!DELETE ALL TASK 

const deleteAllTask = ()=>{
  setTasks([])
}


  //!TOGGLE DONE
  const toggleDone = (id) => {
    setTasks(tasks.map((x) =>
      x.id === id ? { ...x, isDone: !x.isDone } : x
    ))
  }

  //!TOGGLE SHOW ADD TASK BAR

  const toggleShow = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow} />

      {showAddTask && <AddTask addTask={addTask} />}


      {tasks.length > 0 ?
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} deleteAllTask={deleteAllTask} /> :
        <h2 style={{ textAlign: "center" }}>No Task To Show</h2>}

    </div>
  );
}

export default App;

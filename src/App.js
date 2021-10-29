import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Meeting with the boss',
        day: 'Nov 5th at 2.30AM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Birthday of X',
        day: 'Nov 20th at 11.00AM',
        reminder: true,
    },
    {
    id: 3,
        text: 'Project deadline',
        day: 'Dec 12th at 11.00PM',
        reminder: true,
    }
])
//Add Task
const addTask = (task) =>{
  const id=Math.floor(Math.random()*10000)+1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id!==id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id===id ? {...task,reminder: !task.reminder}: task))
}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>
      }
      {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
      : (<p>No Tasks To Show</p>)
      }
    </div>
  );
}

export default App;

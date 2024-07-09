import { useState } from 'react'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'

function App() {
  const [task, setTask] = useState([])

  const addTask = (task) => {
    setTask(prevTask => [...prevTask, task]);
  }
  return (
  <div className="container">
    <header>
      <h1>My Task List</h1>
    </header>
    <CustomForm addTask={addTask}/>
    {task && <TaskList tasks={task}/> }
  </div>
  )
}


export default App

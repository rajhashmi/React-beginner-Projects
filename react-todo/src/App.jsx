import { useState } from 'react'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'

function App() {
  const [task, setTask] = useState([])
  const [editTask, setEditedTask] = useState(null)
  const [isEditing, setisEditing] = useState(false)

  const addTask = (task) => {
    setTask(prevTask => [...prevTask, task]);
  }

  const deleteTask = (id) => {
    setTask(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) =>{
    setTask(prevTask => prevTask.map(t => (
      t.id === id
        ? {...t, checked: !t.checked}
        : t
    )))
  }

  const updateTask = (task) =>{
    setTask(prevTask => prevTask.map(t => (
      t.id === task.id
        ? {...t, name: task.name}
        : t
    )))
    closeEditMode()
  }

  const closeEditMode = () => {
    setisEditing(false);

  }

  const enterEditMode = (task) => {
    setEditedTask(task)
    setisEditing(true)
  }

  return (
  <div className="container">
    <header>
      <h1>My Task List</h1>
      {
        isEditing && (
          <EditForm 
          editedTask= {editTask}
          updateTask= {updateTask}
          />
        )
      }
    </header>

    <CustomForm addTask={addTask}/>
    {task && (
      <TaskList 
      tasks={task}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
      enterEditMode={enterEditMode}
      /> 
    )}
  </div>
  )
}


export default App

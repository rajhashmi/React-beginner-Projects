import { useState } from 'react'
import styles from './TaskList.module.css'


import { CheckIcon, PencilIcon, TrashIcon,  } from '@heroicons/react/24/outline'

const TaskItem = ({tasks, deleteTask, toggleTask, enterEditMode}) => {
    const [isChecked, setIsChecked] = useState(tasks.checked)

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked)
        toggleTask(tasks.id)
    }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
    <input 
    type="checkbox" 
    className={styles.checkbox}
    checked = {isChecked}
    onChange={handleCheckboxChange}
    name={tasks.name}
    id={tasks.id}
    />
    <label 
    htmlFor={tasks.id}
    className={styles.label}
    >
        {tasks.name}
        <p className={styles.checkmark}>
            <CheckIcon stroke={2}
            width={24}
            height={24}/>
        </p>
    </label>
      </div>
      <div className={styles["task-group"]}>
        <button 
        className="btn" 
        aria-label={`Update ${tasks.name} Tasks`}
        onClick={() => enterEditMode(tasks)}
        >
        <PencilIcon 
            width={24}
            height={24}/>
        </button>
        <button 
        className={`btn ${styles.delete}`}
        aria-label={`Delete ${tasks.name} Tasks`}
        onClick={()=> deleteTask(tasks.id)}
        >
        <TrashIcon 
            width={24}
            height={24}/>
        </button>
      </div>
    </li>
  )
}

export default TaskItem

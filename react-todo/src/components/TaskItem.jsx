import { useState } from 'react'
import styles from './TaskList.module.css'


import { CheckIcon } from '@heroicons/react/24/outline'

const TaskItem = ({tasks}) => {
    const [isChecked, setIsChecked] = useState(tasks.checked)

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked)
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
    </li>
  )
}

export default TaskItem

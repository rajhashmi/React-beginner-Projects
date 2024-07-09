import TaskItem from "./TaskItem"
import styles from './TaskList.module.css'  

const TaskList = ({tasks}) => {
  return (
    <ul className={styles.tasks}>
      {
        tasks.sort((a,b) => b.id - a.id).map(task => (
            <TaskItem
                key={task.id}
                tasks={task}
            />
        ))
      }
    </ul>
  )
}

export default TaskList

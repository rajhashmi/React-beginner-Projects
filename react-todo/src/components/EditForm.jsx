import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const  EditForm = ({editedTask, updateTask}) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name)

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        updateTask({...editedTask, name: updatedTaskName})
        
    }
  return (
    <div role='dialog' aria-label='editTask' 
    // onClick={}
    >
        <form className='todo'
    onSubmit={handleFormSubmit}>

    <div className="wrapper">
        <input
         type="text"
         id="edittask"
         className="input"
         value={updatedTaskName}
         onInput={(e)=> setUpdatedTaskName(e.target.value)}
        required
        autoFocus
        maxLength={60}
        placeholder="Update Task"
         />
        <label htmlFor="editTask"
        className="label"
        >Enter Task</label>
    </div>
    <button className="btn" aria-label={`COnfirm edited task to now read ${updatedTaskName}`} type="submit">
        <CheckIcon stroke={2} width={24} height={24}/>
    </button>
    </form>
    </div>
  )
}

export default EditForm

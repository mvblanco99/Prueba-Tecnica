import Button from './Button';
import PropTypes from 'prop-types';
import './List.css'

const List = ({tasks, updateTask, deleteTask, checked}) => {


    const handleChecked = (e,taskParam) => {
        checked({taskParam})
    }
  return (
    <div className="container-list">
        <h2>Task List</h2>
        <ul>
            {tasks.length > 0 &&
                tasks.map(task => (
                    <li key={task.id} className='list'>
                        <p>{task.taskName }</p>
                        <form id='form-checked'>
                            <input 
                                type="checkbox" 
                                name="completedTask" 
                                id="completedTask"
                                onChange={(e) => { handleChecked(e,task) }} 
                                checked = {task.completedTask}
                            />
                        </form>
                        <Button name='Update' fun={updateTask} task={task}/>
                        <Button name='Delete' fun={deleteTask} task={task}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

List.propTypes = {
    tasks: PropTypes.array.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    checked: PropTypes.func.isRequired
};

export default List
import List from "./List";
import { useTodo } from "../../hooks/useTodo";
import './TodoList.css'

// Controlar el ingreso de texto mediante el input (Lista)
// Validar la tarea ingresada (Lista)
// Guardar la nueva Tarea (Lista)
// Renderizar todas las tareas (Lista)
// Eliminar tarea (Lista)
// Modificar Tarea (Lista)
// Estilar Componente

const TodoList = () => {

    const{ saveTask, updateTask, deleteTask,handleChange, checked ,tasks, task, action } = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault();
        saveTask({task})
    }

  return (

    <div className="container-todo-list">
        
        <div className="container-form">
            <h2>New Task</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskName">New task:</label><br />
                <input 
                    type="text" 
                    name="taskName" 
                    id="taskName"
                    value={task.taskName}
                    onChange={handleChange}
                    className="input"
                />
                <input type="submit" value={action} className="input"/>
            </form>

            <List tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} checked={checked}/>
        </div>
        
        
    </div>
  )
}

export default TodoList
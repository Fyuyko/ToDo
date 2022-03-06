import "./tasks.css";

const Tasks = ({ task, toggleTask, removeTask }) => {
   return (
         <div key={task.id} className="tasks">
            <div
               onClick={() => toggleTask(task.id)}
               className={task.complete ? "strike" : ""}
               >
               {task.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(task.id)}>
               x
            </div>
         </div>   
   );
}

export default Tasks;
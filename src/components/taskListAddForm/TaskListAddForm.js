import TasksAddForm from "../tasksAddForm/TasksAddForm";

import "./taskListAddForm.css";

const svg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z"/></svg>


const TaskListAddForm = ({boards, createBoard, deleteBoard, updateTasksNum}) => { 
   return (
      <div className="taskListBox">
         <div className="taskListAddForm" onClick={createBoard}>
            <button className="btn btn-light">{svg} Новый список</button> 
         </div>   
         <div className="boards">
            {boards.map((board) => {
               return (
                  <TasksAddForm
                     board={board}
                     key={board.id}
                     deleteBoard={deleteBoard}
                     updateTasksNum={updateTasksNum}
                  />
               );
            })}
         </div>              
      </div>   
   )
}

export default TaskListAddForm;
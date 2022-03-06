import AppInfo from "../appInfo/AppInfo";
import TaskListAddForm from "../taskListAddForm/TaskListAddForm";

const MainPage = ({boards, tasks, createBoard, deleteBoard, updateTasksNum}) => {
   return (
      <>
         <AppInfo 
            boards={boards} 
            tasks={tasks}
         />
         <TaskListAddForm 
            boards={boards}
            createBoard={createBoard}
            deleteBoard={deleteBoard}
            updateTasksNum={updateTasksNum}
         />
      </>
   )
}

export default MainPage;
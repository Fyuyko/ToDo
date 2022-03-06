import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Tasks from "../tasks/Tasks";

import "./tasksAddForm.css";

const TasksAddForm = ({deleteBoard, board, updateTasksNum}) => {
   const [userInput, setUserInput] = useState("");
   const [tasks, setTasks] = useState([]);
   

   const handleChange = (e) => { 
      setUserInput(e.currentTarget.value);
   };

   const handleSubmit = (e) => {   //добавление таска
      e.preventDefault();     
      if (userInput && tasks.length<5) {
         const newItem = {
         id: uuidv4(),
         task: userInput,
         complete: false
         };
         setTasks([...tasks, newItem]);
      }
      setUserInput("");
      updateTasksNum(tasks);
      console.log(tasks);
   };

   const removeTask = (id) => {     //удаление таска
      setTasks([...tasks.filter((task) => task.id !== id)]);
      updateTasksNum(tasks);
   };

   const handleToggle = (id) => {   //выполнение таска
      setTasks([
         ...tasks.map((task) =>
            task.id === id ? { ...task, complete: !task.complete } : { ...task }
         )
      ]);
   };

   const handleKeyPress = (e) => {  //добавление таска клавишей enter
      if (e.key === "Enter") {
         handleSubmit(e);        
      } 
      updateTasksNum(tasks);    
   };
   
   
   return (
      <div className="taskList"> 
         <div className="taskListInner">
            <div className="delete-board" onClick={() => deleteBoard(board.id)}>x</div>
            {tasks.map((task) => {
               return (
                  <Tasks
                     task={task}
                     key={task.id}
                     toggleTask={handleToggle}
                     removeTask={removeTask}
                  />
               );
            })}
            <form className="input-group mb-3 taskAddForm" onSubmit={handleSubmit} >
               <button 
                  className="btn btn-outline-secondary" 
                  type="submit"                   
               >
                  Добавить
               </button>
               <input 
                  type="text" 
                  className="form-control" 
                  placeholder="новый элемент" 
                  aria-label="новый элемент" 
                  aria-describedby="button-addon2"
                  value={userInput} 
                  onChange={handleChange}
                  onKeyDown={handleKeyPress} 
               />
            </form>         
         </div>  
      </div>     
   )
}

export default TasksAddForm;
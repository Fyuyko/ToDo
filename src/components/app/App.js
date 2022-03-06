import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import AboutPage from "../aboutPage/AboutPage";
import Footer from "../footer/Footer";
import Page404 from "../Page404/Page404";

import "./app.css";



function App() {

  const [boards, setBoards] = useState([]);
  const [tasks, setTasks] = useState([]);

  /* Работа с досками */
  const createBoard = () => {    //создать доску
    if (boards.length < 4) {
      const newItem = {
          id: uuidv4(),
          /* complete: false, */
          tasks: tasks,
      };
      setBoards([...boards, newItem]);
    }    
  };

  const deleteBoard = (id) => {  //удалить доску
    setBoards([...boards.filter((board) => board.id !== id)]);
  };

  /* Работа с тасками */
  const updateTasksNum = (value) => {  //поднятие числа тасков (!доработать)
    setTasks(value);    
  };

  return (
    <Router>
      <div className="wrapper">
        <Header/>
        
          <div className="app"> 
          <Routes>
            <Route path='/' 
              element={
                <MainPage 
                tasks={tasks} 
                boards={boards} 
                createBoard={createBoard} 
                deleteBoard={deleteBoard} 
                updateTasksNum={updateTasksNum}/>}
              />    
            <Route path='/about' element={<AboutPage/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>     
          </div>  
        
        
        <Footer/> {/* Прижать футер к низу */}
      </div> 
    </Router>   
  );
}

export default App;

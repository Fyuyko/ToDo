import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink 
                     style={({isActive}) => ({color: isActive ? "#fff" : "#D6D6D6"})}
                     to="/"
                  >
                     Главная страница
                  </NavLink>
               </li>
               <li>
                  <NavLink 
                     style={({isActive}) => ({color: isActive ? "#fff" : "#D6D6D6"})}
                     to="/about"
                  >
                     Описание проекта
                  </NavLink>
               </li>
            </ul>
         </nav>         
      </header>
   )
}

export default Header;
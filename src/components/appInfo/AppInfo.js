import "./appInfo.css";

const AppInfo = ({boards, tasks}) => {
   return (
      <div className="appInfo">
            <h3>Учет активных списков</h3>
            <p>колличество списков: {boards.length}</p>
            {/* <p>колличество задач: {tasks.length}</p>  //Доработать  */}
      </div>
   )
}

export default AppInfo; 
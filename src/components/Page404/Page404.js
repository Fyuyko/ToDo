import { Link } from "react-router-dom";

const Page404 = () => {
   return (
      <>
         <div>
            Такая страница не найдена!                 
         </div>
         <div>
            <Link to="/">Вернитесь на главную страницу</Link>
         </div>
      </>
      
   )
}

export default Page404;
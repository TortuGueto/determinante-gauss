import { Link } from "react-router-dom"
import DarkModeIcon from '@mui/icons-material/DarkMode';

function NavBar() {
   return (
      <div className="dark:bg-gray-600 dark:text-white flex flex-row rounded-3xl justify-around items-center shadow-md p-2 text-md">
         <div className="flex flex-row">
            <Link to="/">
               <p className="mx-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 ">
                  Home
               </p>
            </Link>
            <Link to="/determinante3x3">
               <p className=" mx-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 ">
                  Determinante 3 x 3
               </p>
            </Link>
            <Link to="/determinante2x2">
               <p className=" mx-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 ">
                  Determinante 2 x 2
               </p>
            </Link>
            <Link to="/gauss">
               <p className=" mx-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 ">
                  Método de gauss
               </p>
            </Link>
         </div>
         <div className='flex flex-row'>
            <p className="pointer-events-none px-3 select-none">por Tiago Gueto</p>
            <button className="hidden">
               <DarkModeIcon
               />
            </button>
         </div>
      </div>
   );
}

export default NavBar;

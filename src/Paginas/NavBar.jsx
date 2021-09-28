import React from "react";
import { Link } from "react-router-dom"
import DarkModeIcon from '@mui/icons-material/DarkMode';

function NavBar() {
   return (
      <div className="dark:bg-gray-600 dark:text-white flex flex-row rounded-xl justify-around items-center shadow-md p-2 h-12 text-lg">
         <div className="flex flex-row">
            <Link to="/">
               <p className="m-2 p-2 rounded-xl border-opacity-0 border hover:shadow-xl hover:border-opacity-100">
                  Home
               </p>
            </Link>
            <Link to="/determinante3x3">
               <p className=" m-2 p-2 rounded-xl border-opacity-0 border hover:shadow-xl hover:border-opacity-100 ">
                  Determinante 3 x 3
               </p>
            </Link>
            <Link to="/determinante2x2">
               <p className=" m-2 p-2 rounded-xl border-opacity-0 border hover:shadow-xl hover:border-opacity-100 ">
                  Determinante 2 x 2
               </p>
            </Link>
         </div>
         <div className='flex flex-row'>
            <p className="deactivated px-3">por Tiago Gueto</p>
            <button>
               <DarkModeIcon
               />
            </button>
         </div>
      </div>
   );
}

export default NavBar;

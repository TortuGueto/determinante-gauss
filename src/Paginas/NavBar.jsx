import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function NavBar() {
   const [dropDown, setDropDown] = useState(false);

   function handlerDropDown() {
      setDropDown(!dropDown);
   }

   function Drop() {
      if (dropDown === true) {
         return (
            <> 
               <button className='fixed right-0 left-0 top-0 bottom-0 h-full w-full bg-black bg-opacity-30'
                  onClick={()=>{handlerDropDown()}} />
               <div className="mt-2 flex flex-row absolute bg-gray-100 dark:bg-gray-500 border-2 border-green-400 rounded-xl shadow-xl active:outline-none text-black dark:text-white">
                  <Link to="/determinante2x2" onClick={()=>{handlerDropDown()}}>
                     <p className="transition easy-in duration-200 m-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-300 hover:bg-opacity-40 ">
                        Determinante 2 x 2
                     </p>
                  </Link>
                  <Link to="/determinante3x3" onClick={()=>{handlerDropDown()}}>
                     <p className="transition easy-in duration-200 m-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-300 hover:bg-opacity-40 ">
                        Determinante 3 x 3
                     </p>
                  </Link>
                  <Link to="/determinante4x4" onClick={()=>{handlerDropDown()}}>
                     <p className="transition easy-in duration-200 m-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-300 hover:bg-opacity-40 ">
                        Determinante 4 x 4
                     </p>
                  </Link>
               </div>
            </>
         );
      } else {
         return <></>;
      }
   }
   return (
      <div className="dark:bg-gray-600 bg-white dark:text-white flex flex-row rounded-3xl justify-around items-center shadow-md p-2 text-md">
         <div className="flex flex-row">
            <Link to="/">
               <p className="transition easy-in duration-200 mx-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 ">
                  Home
               </p>
            </Link>
            <div v-if="dropDown" className="relative">
               <div>
                  <button
                     className=" mx-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 "
                     onClick={() => {
                        handlerDropDown();
                     }}
                  >
                     Determinante
                  </button>
               </div>
               <div className="flex justify-center ">
                  <Drop />
               </div>
            </div>
            <Link to="/gauss">
               <p className="transition easy-in duration-200 mx-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 ">
                  Método de gauss
               </p>
            </Link>
         </div>

         <div className="flex flex-row">
            <p className="pointer-events-none px-3 select-none">
               por Tiago Gueto
            </p>
            <button className="hidden">
               <DarkModeIcon />
            </button>
         </div>
      </div>
   );
}

export default NavBar;

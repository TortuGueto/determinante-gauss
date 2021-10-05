import { Link } from "react-router-dom";
import { Seta, Seta2 } from "../assets/svgs";

function MainPage() {
   return (
      <div className="flex flex-row justify-center p-5 px-7 m-2 ">
         <div className="flex flex-col items-center w-7/12 ">
            <h2 className="dark:text-gray-100 text-gray-800 ring-1 w-8/12 dark:bg-gray-600 rounded-xl shadow-lg ring-gray-500 p-2 m-1 text-xl">
               Esse site tem como objetivo realizar automaticamente as operações
               de Determinante e Eliminassão Gaussaniana (ou eliminação de
               Gauss).
            </h2>
            <p className="dark:text-gray-100 text-gray-800 p-2 m-1 text-base pointer-events-none select-none">
               por Tiago de Souza Gueto
            </p>
         </div>

         <div className="w-4/12 flex flex-col justify-center dark:bg-gray-500 bg-opacity-40 rounded-xl ring-2 ring-yellow-400 ring-opacity-80 dark:text-gray-100 text-gray-800 text-base ">
            <p className="text-base">Navegação</p>
            <Link to="/determinante2x2">
               <p className="flex flex-row justify-center items-center m-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-2xl hover:border-opacity-100 bg-yellow-100 bg-opacity-30 hover:bg-opacity-30 transition easy-in duration-200">
                  Determinante 2 x 2
                  <Seta />
               </p>
            </Link>
            <Link to="/determinante3x3">
               <p className="flex flex-row justify-center items-center m-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-2xl hover:border-opacity-100 bg-yellow-100 bg-opacity-30 hover:bg-opacity-30 transition easy-in duration-200">
                  Determinante 3 x 3
                  <Seta />
               </p>
            </Link>
            <Link to="/determinante4x4">
               <p className="flex flex-row justify-center items-center m-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-xl hover:border-opacity-100  bg-yellow-100 bg-opacity-30 hover:bg-opacity-30 transition easy-in duration-200">
                  Determinante 4 x 4
                  <Seta />
               </p>
            </Link>
            <Link to="/gauss">
               <p className="flex flex-row justify-center items-center m-2  p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-2xl hover:border-opacity-100 bg-yellow-100 bg-opacity-30 hover:bg-opacity-30 transition easy-in duration-200">
                  Método de gauss
                  <Seta />
               </p>
            </Link>
         </div>
      </div>
   );
}

export default MainPage;

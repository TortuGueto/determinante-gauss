import { Link } from "react-router-dom";

function MainPage() {
   return (
      <div className="flex flex-col items-center p-5 px-7 m-2">
         <div className="flex flex-col items-center w-10/12 ">
            <h2 className="text-gray-200 ring-1 w-8/12 bg-gray-600 rounded-xl shadow-lg ring-gray-500 p-2 m-1 text-3xl">
               Esse site tem como objetivo realizar automaticamente as operações
               de Determinante e Eliminassão Gaussaniana (ou eliminação de
               Gauss).
            </h2>
            <p className="text-gray-200 p-2 m-1 text-base pointer-events-none select-none">
               por Tiago de Souza Gueto
            </p>
         </div>

         <div className="flex flex-row justify-center text-gray-200 text-xl">
            <Link to="/determinante3x3">
               <p className=" m-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-2xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 ">
                  Determinante 3 x 3
               </p>
            </Link>
            <Link to="/determinante2x2">
               <p className=" m-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-2xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 ">
                  Determinante 2 x 2
               </p>
            </Link>
            <Link to="/gauss">
               <p className=" m-2 p-2 rounded-xl border-opacity-0 border-2 border-yellow-400 hover:shadow-2xl hover:border-opacity-100 hover:bg-yellow-50 hover:bg-opacity-10 ">
                  Método de gauss
               </p>
            </Link>
         </div>
      </div>
   );
}

export default MainPage;

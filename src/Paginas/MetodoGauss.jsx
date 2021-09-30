import React, { useState } from "react";
import Gauss from "./Gauss";
import ResGauss from "./ResGauss";

function MetodoGauss() {
   const [responder, setResponder] = useState(false);
   const [input, setInput] = useState([
      [2, 2, 3, 2],
      [0, 2, 0, 1],
      [4, -3, 0, 1],
      [6, 1, -6, -5],
   ]);

   let clone = [
      [2, 2, 3, 2],
      [0, 2, 0, 1],
      [4, -3, 0, 1],
      [6, 1, -6, -5],
   ];
   
   const b = [-2, 0, -7, 6];
   const amostraB = [-2, 0, -7, 6];
   const n = b.length;
   
   
   function handlerRespostas(res) {
      if (res === true) {
         return (
            <>
               { ResGauss( Gauss(clone, b, n) ) }
            </>
         )
      } else {
         return <></>;
      }
   }
   
   return (
      <div className="px-24 text-gray-800 m-4 mt-6 max-h-60 dark:text-white">
         <form
            className="flex flex-col dark:bg-gray-600 p-2 rounded-xl items-center shadow-xl"
            onSubmit={(e) => {
               e.preventDefault();
               setResponder(true);
               handlerRespostas(responder);
            }}
         >  
            <p>*Esse função tem um exemplo ja proposto e checado</p>
            <div className='flex flex-row'>
               <div className="p-2 ">
                  {input.map((val, index) => {
                     return (
                        <div
                           className="grid grid-cols-4 inset-y-0 right-0 "
                           key={index}
                        >
                           {val.map((inside, index) => {
                              return (
                                 <input
                                    className="w-auto m-2 p-2 bg-gray-500 w-10 ring-2 ring-yellow-400 rounded-lg outline-none"
                                    defaultValue={inside}
                                    key={index}
                                 ></input>
                              );
                           })}
                        </div>
                     );
                  })}
               </div>
               <div className="grid grid-cols-1 p-1 m-1 flex flex-col border-l  border-left border-gray-500">
                  {amostraB.map((val,index) => {
                     return (
                        <input
                           className="w-auto m-2 p-2 bg-gray-500 w-10 ring-2 ring-yellow-400 rounded-lg active:outline-none"
                           defaultValue={val}
                           type="number"
                           key={index}
                        />
                     );
                  })}
               </div>
            </div>
            <button
               className="rounded-full bg-green-300 ring-2 ring-green-500 p-2 px-6 m-1 hover:shadow-lg transition-all shadow-lg hover:shadow-xl font-medium mt-6 "
               type="submit"
            >
               Enviar
            </button>
         </form>
         <div className='bg-gray-700 mt-6 mb-6'>
            {handlerRespostas(responder)}
         </div>
      </div>
   );
}

export default MetodoGauss;

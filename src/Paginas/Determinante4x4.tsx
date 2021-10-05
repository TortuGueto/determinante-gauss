import React, { useState } from "react";
import { produce } from "immer";
import ResolucaoDet4 from "./ResolucaoDet4.jsx";

interface ArrayValores {
   id: String;
   valor: Number;
}

function Determinante4() {
   const [responder, setResponder] = useState(false);
   const [valores, setValores] = useState<ArrayValores[]>([
      { id: "1", valor: 0 },
      { id: "2", valor: 0 },
      { id: "3", valor: 0 },
      { id: "4", valor: 0 },
      { id: "5", valor: 0 },
      { id: "6", valor: 0 },
      { id: "7", valor: 0 },
      { id: "8", valor: 0 },
      { id: "9", valor: 0 },
      { id: "10", valor: 0 },
      { id: "11", valor: 0 },
      { id: "12", valor: 0 },
      { id: "13", valor: 0 },
      { id: "14", valor: 0 },
      { id: "15", valor: 0 },
      { id: "16", valor: 0 },
   ]);

   function handlerRespostas(res: boolean) {
      if (res === true) {
         return (
            <div className='text-white'>
               <ResolucaoDet4 valores={valores} />
            </div>
         );
      } else {
         return <></>;
      }
   }

   return (
      <div className="text-gray-700 h-5/12 flex flex-col p-2 items-center mt-4">
         <form
            className="flex flex-col w-7/12 items-center"
            onSubmit={(e) => {
               e.preventDefault();
               setResponder(true);
               handlerRespostas(responder);
            }}
         >
            <div className="grid grid-cols-4 dark:bg-gray-500 bg-white w-full shadow-lg p-5 px-7 rounded-3xl gap-1 m-2">
               {valores.map((p, index) => {
                  return (
                     <div
                        className="flex flex-row dark:bg-gray-600 bg-gray-100 p-1 justify-around items-center rounded-xl w-full "
                        key={Number(p.id)}
                     >
                        <input
                           className="dark:bg-yellow-200 dark:shadow-xl shadow-md bg-yellow-100 rounded-xl w-10/12 p-2 m-2 ring-yellow-400 focus:ring outline-none focus:outline-none focus:shadow-xl hover:shadow-xl hover:ring-2 hotransition-all easy-out duration-200"
                           onChange={(e) => {
                              if (Number(e.target.value) > 100)
                                 e.target.value = "100";
                              if (Number(e.target.value) < -100)
                                 e.target.value = "-100";
                              const valor = Number(e.target.value);
                              setValores((campoAtual) =>
                                 produce(campoAtual, (v) => {
                                    v[index].valor = valor;
                                 })
                              );
                           }}
                           type="number"
                           value={String(p.valor)}
                           placeholder="first name"
                        />
                     </div>
                  );
               })}
            </div>
            <button
               className="rounded-full bg-green-300 ring-2 ring-green-500 p-2 px-6 m-1 mt-6 hover:shadow-lg transition-all shadow-lg hover:shadow-xl font-medium"
               type="submit"
            >
               Enviar
            </button>
         </form>
         <div className="w-7/12">{handlerRespostas(responder)}</div>
      </div>
   );
}

export default Determinante4;

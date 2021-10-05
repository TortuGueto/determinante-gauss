import { useEffect } from "react";
import Res4 from "./Res4";

function ResolucaoDet4(valores) {
   let respostas = Res4(valores);
   console.log(valores);

   let resultadoFinal =
      valores.valores[0].valor * (1 * respostas.resultados[0]) +
      valores.valores[1].valor * (-1 * respostas.resultados[1]) +
      valores.valores[2].valor * (1 * respostas.resultados[2]) +
      valores.valores[3].valor * (-1 * respostas.resultados[3]);

   useEffect(()=>{
      let ultimo = document.getElementById("9")
      ultimo.className = "flex flex-row justify-center items-center"
   }, [])

   return (
      <div className="my-6 flex flex-col rounded-3xl shadow-xl dark:bg-gray-600 dark:text-gray-200 text-gray-700 bg-white py-4">
         <p>Utilizando a 1ª linha temos:</p>
         <div className="flex flex-row ">
            <div className="w-8/12 p-2">
               {respostas.matrizes.map((matriz, index) => {
                  return (
                     <div
                        className="flex flex-row justify-center items-center border-b border-gray-400 "
                        key={index}
                        id={index * index}
                     >
                        <div className="w-8/12 grid grid-cols-3 gap-1 p-2 m-2 dark:bg-gray-500 bg-gray-100 rounded-xl">
                           {matriz.map((val, index) => {
                              return (
                                 <p
                                    className="rounded-lg dark:bg-gray-600"
                                    key={index}
                                 >
                                    {val}
                                 </p>
                              );
                           })}
                        </div>
                        <div className="w-full">
                           <p className="m-1">
                              Usando o {index + 1}º termo: {valores.valores[index].valor}
                           </p>
                           <div className="m-1">
                              Determinante = {respostas.resultados[index]}
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className="border-l border-gray-400 flex flex-col justify-center content-center p-1 pl-10 m-2">
               <p className="my-1">A resolução é:</p>
               <p className="my-6">a11*A11 + b11*B12 + c13*C13 + d14*D14</p>
               <p className="my-1">
                  {valores.valores[0].valor} * ( 1 * {respostas.resultados[0]} )
                  +
               </p>
               <p className="my-1">
                  {valores.valores[1].valor} * ( -1 * {respostas.resultados[1]}
                  ) +
               </p>
               <p className="my-1">
                  {valores.valores[2].valor} * ( 1 * {respostas.resultados[2]} )
                  +
               </p>
               <p className="my-1">
                  {valores.valores[3].valor} * ( -1 * {respostas.resultados[3]}
                  )
               </p>
               <p className="my-6 rounded-xl bg-yellow-200 ring-2 ring-yellow-400 p-1 text-gray-700">Determinante final = {resultadoFinal} </p>
            </div>
         </div>
      </div>
   );
}
export default ResolucaoDet4;

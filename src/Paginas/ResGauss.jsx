
function ResGauss({ a, b }) {
   return (
      <div className="dark:bg-gray-600 rounded-xl justify-around shadow-xl mb-10">
         <div className='flex flex-col'>
         <h3 className='pt-2'>Resolvido</h3>
         <div className="flex flex-row px-2">
            <div className="flex flex-row w-full m-1 border-gray-500">
               {a.map((val, index) => {
                  return (
                     <div className="w-full my-2" key={index}>
                        {val.map((inside, index) => {
                           return (
                              <p
                                 className="w-10/12 m-4 p-2 bg-gray-500 w-10 ring-2 ring-yellow-400 rounded-lg outline-none"
                                 key={index}
                              >
                                 {inside}
                              </p>
                           );
                        })}
                     </div>
                  );
               })}
            </div>
            <div className=" p-4 pr-6 pt-5 w-3/12 flex flex-col border-l  border-left border-gray-500">
               {b.map((val, index) => {
                  return (
                     <p
                        className="w-full m-2 p-2 bg-gray-500 w-10 ring-2 ring-yellow-400 rounded-lg outline-none overflow-hidden font-bold"
                        type="number"
                        key={index}
                     >
                        {val}
                     </p>
                  );
               })}
            </div>
         </div>
         <div className="flex flex-row justify-around bg-gray-600 items-center pt-4 px-20 rounded-xl shadow-xl font-bold ">
            <div className="p-2 bg-gray-500 rounded-2xl w-5/12 ">
               <p className="p-2">Resposta do programa</p>
               {b.map((val, index) => {
                  console.log(val);
                  return (
                     <p
                        className="m-2 bg-yellow-100 w-auto rounded-xl p-1 overflow-hidden ring-2 ring-yellow-400 text-gray-600 font-medium"
                        key={index}
                     >
                        {val}
                     </p>
                  );
               })}
            </div>
            <div className="p-3 bg-gray-500 rounded-2xl flex flex-col items-center w-5/12 ">
               <p className="p-2">Solução checada</p>
               <p className="m-1 bg-gray-400 w-full rounded-xl p-1">-0,5</p>
               <p className="m-1 bg-gray-400 w-full rounded-xl p-1">1</p>
               <p className="m-1 bg-gray-400 w-full rounded-xl p-1">0,3333</p>
               <p className="m-1 bg-gray-400 w-full rounded-xl p-1">-2</p>
            </div>
         </div>
      </div>
      </div>
   );
}

export default ResGauss;

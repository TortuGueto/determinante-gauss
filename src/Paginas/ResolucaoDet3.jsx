function Resolucao3(val) {
   const linha = []
   val.valores.map((v) => {
      return(linha.push(v.valor))
   })
   const a = (linha[0]*linha[4]*linha[8])
   const b = (linha[1]*linha[5]*linha[6])
   const c = (linha[2]*linha[3]*linha[7])

   const x = -1*(linha[2]*linha[4]*linha[6])
   const y = -1*(linha[0]*linha[5]*linha[7]) 
   const z = -1*(linha[1]*linha[3]*linha[8])


   return (
      <>
         <div className="flex flex-row justify-around p-2 my-3 shadow-md rounded-3xl m-1 dark:bg-gray-500">
            <div 
               className='flex flex-row flex-wrap w-full justify-around'
            >
               {linha.map((val, index) => {
                  return (
                     <>
                        <p 
                           className='ring-1 ring-gray-100 dark:ring-gray-600 dark:bg-gray-400 p-2 m-1 w-3/12 rounded-xl shadow-sm'
                           key={index}
                        > {val} </p>
                     </>
                  )
               })}
            </div>
            <div
               className='flex flex-row flex-wrap border-l border-gray-700 w-9/12 justify-around'
            >
               {linha.map((val, index) => {
                  if(index === 0 || index === 1 || index === 3 || index === 4 || index === 6 || index === 7){
                  return (
                     <>
                        <p 
                           className='bg-purple-0 dark:bg-gray-400 ring-1 ring-gray-100 dark:ring-gray-600 p-2 m-1 w-4/12 rounded-xl shadow-sm'
                           key={index}
                        > 
                           {val} 
                        </p>
                     </>
                  )} else {return(<></>)}
               })}
            </div>
         </div>
         <div className='flex flex-row flex-grow justify-between items-center my-3 shadow-lg rounded-full m-1 ring-2 ring-yellow-400 mt-10 pl-4 dark:bg-gray-400 font-medium'>
               <p className='p-3' >{a}</p><p className='p-2'>+</p>
               <p className='p-3' >{b}</p><p className='p-2'>+</p>
               <p className='p-3' >{c}</p><p className='p-2'>-</p><p className='p-3'>(</p>
               <p className='p-3' >{x}</p><p className='p-2'>+</p>
               <p className='p-3' >{y}</p><p className='p-2'>+ </p>
               <p className='p-3' >{z}</p><p className='p-2'>)</p>
               <p className='rounded-full bg-yellow-400 p-3 font-medium ' >Determinante = {a+b+c+x+y+z}</p>
         </div>
      </>
   );
}

export default Resolucao3;

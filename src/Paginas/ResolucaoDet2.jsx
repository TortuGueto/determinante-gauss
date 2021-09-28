function Resolucao2(val) {
   const linha = []
   val.valores.map((v) => {
      return(linha.push(v.valor))
   })
   const a = (linha[0])
   const b = (linha[1])
   const x = (linha[2])
   const y = (linha[3])

   return (
      <>
         <div className='flex flex-row flex flex-row flex-grow justify-between items-center my-3 shadow-lg rounded-full m-1 ring-2 ring-yellow-400 mt-10 pl-4 dark:bg-gray-400 font-medium'>
               <p className='p-3' >{a}</p><p className='p-2'>*</p>
               <p className='p-3' >{y}</p>
               <p className='p-2'>-</p><p className='p-3'>(</p>
               <p className='p-3' >{b}</p><p className='p-2'>*</p>
               <p className='p-3' >{x}</p> <p className='p-2'>)</p>
               <p className='rounded-full bg-yellow-400 p-3 font-medium ' >Determinante = {a*y-b*x}</p>
         </div>
      </>
   );
}

export default Resolucao2;

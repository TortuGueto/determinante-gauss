function Res4(val) {
   let listaMatrizes = []

   function Resultado4x4(matriz) {
      let listaDeterminantes = [];
      let linha;
      for (let col = 0; col < 4; col++) {
         linha = Retorna3x3(matriz, 0, col);
         listaDeterminantes.push(Determinante(linha));
      }

      return listaDeterminantes;
   }

   function Matrização() {
      let numeros = val.valores.map((item) => {
         return item.valor;
      });

      let matriz = [];
      matriz.push(
         [...numeros.slice(0, 4)],
         [...numeros.slice(4, 8)],
         [...numeros.slice(8, 12)],
         [...numeros.slice(12, 16)]
      );
      return matriz;
   }

   function Retorna3x3(arr, lin, col) {
      let temp = [];
      for (let i = 0; i < 4; i++) {
         if (!(i === lin)) {
            for (let j = 0; j < 4; j++) {
               if (!(j === col)) {
                  temp.push(arr[i][j]);
               }
            }
         }
      }
      
      listaMatrizes.push(temp)
      return temp;
   }

   function Determinante(linha) {
      let determinant;

      const a = linha[0] * linha[4] * linha[8];
      const b = linha[1] * linha[5] * linha[6];
      const c = linha[2] * linha[3] * linha[7];

      const x = -1 * (linha[2] * linha[4] * linha[6]);
      const y = -1 * (linha[0] * linha[5] * linha[7]);
      const z = -1 * (linha[1] * linha[3] * linha[8]);

      determinant = a + b + c + x + y + z;
      return determinant;
   }

   let matriz4x4 = Matrização();

   return {resultados: Resultado4x4(matriz4x4), matrizes: listaMatrizes}
}

export default Res4;

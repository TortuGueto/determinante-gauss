function Gauss(inputA, inputB, n) {
   let b = inputB;
   let a = inputA
   for (let k = 0; k < n; k++) {
      // Declara o pivot, e já o transforma em 1
      let pivot = a[k][k];

      console.log(k);
      b[k] = b[k] / a[k][k];
      for (let i = 0; i < n; i++) {
         a[k][i] = a[k][i] / pivot;
      }

      for (let i = 0; i < n; i++) {
         if (!(i === k || a[i][k] === 0)) {
            const cel = a[i][k];

            for (let j = 0; j < n; j++) {
               if (!(j < k)) {
                  a[i][j] = a[i][j] - cel * a[k][j];
               }
            }
            b[i] = b[i] - cel * b[k];
            console.log(i + " -- " + b[i]);
         }
      }

      console.log(b);
   }
   let resposta = {a, b}
   console.log(resposta);
   return resposta;
}

export default Gauss
// Função para calcular a sequência de Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Número a ser verificado
const numeroVerificar = 21;

// Variável para armazenar se o número foi encontrado na sequência de Fibonacci
let encontrado = false;

// Verifica se o número informado pertence à sequência de Fibonacci
for (let i = 0; i <= numeroVerificar; i++) {
  if (fibonacci(i) === numeroVerificar) {
    encontrado = true;
    break;
  }
}

// Imprime o resultado na tela
if (encontrado) {
  console.log(`O número ${numeroVerificar} pertence à sequência de Fibonacci`);
} else {
  console.log(
    `O número ${numeroVerificar} NÃO pertence à sequência de Fibonacci`
  );
}

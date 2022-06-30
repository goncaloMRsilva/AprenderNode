const num1 = 5;
const num2 = 10;

function addValues(){
console.log(`the sum is: ${num1 + num2}`);
}

addValues();  //funcao invocada nao necessita de export. Basta require() no modulo onde necessitamos e temos o resultado da funcao
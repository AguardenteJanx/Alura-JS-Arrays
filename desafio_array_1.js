//Um professor acidentalmente passou apenas 3 das 4 notas no sistemas para um aluno:
// - 10, 6, 8
//Para a correção é necessário adicionar a nota 7 e calcular a média

const notas = [10, 6, 8];  //7
//O comando push insere um valor na ultima posição do array
//Caso não seja passado nenhum valor no push() -> Retornara um NaN, caso o array seja de numbers
notas.push(7); 
console.log(notas);

let media =  (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; 

console.log("A média é: ", media); 
console.log("A média é: " + media); 
console.log(`A média é: ${media}`);

//Nota pessoal: Pode-se concatenar a media com o texto utilizando ',' / '+' ou a template String; 
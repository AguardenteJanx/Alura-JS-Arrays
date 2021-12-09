//Um professor acidentalmente lançou 5 notas de um aluno e nós temos que tirar a última nota que foi lançada no sistema,
//que foi uma nota lançada a mais.
//É necessario remover a última nota e fazer o cálculo da média

const notas = [10, 7, 8, 5, 10];
//O pop remove o último elemento do array.
//Não aceita nenhum parâmetro 
notas.pop(); 
console.log(notas);  

//Caso você não declare a media, o JS transforma ela em uma var
//Isso não é uma boa-prática! 
//O var pode bugar o código. 
//media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; 

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; 
console.log(`A média é: ${media}`);

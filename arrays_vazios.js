const arrayVazio = [];

console.log(arrayVazio); //Exibe [], pois está vazio
console.log(arrayVazio.length); //Seu tamanho é 0 
console.log(arrayVazio[0]); //Retorna undefined, pois não há nenhum valor ali

const arrayVazia = [,,,];
console.log(arrayVazia.length);
arrayVazia.push(50);
console.log(arrayVazia);
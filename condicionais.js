/* const idade = 17.9;

if (idade >= 18) {
    console.log('Entrada permitida.')
} else {
    console.log('Entrada não permitida.')
} */



/* const temperatura = 45;

if (temperatura > 26)
{
    console.log('quente')
} else if (temperatura >= 22 && temperatura <=26 ) {
    console.log('Agradável')
} else {
    console.log('frio')
} */


/* /const idade = 13;

if (idade <= 12) {
    console.log('Infantil')
} else if (idade > 12 && idade < 18 ) {
    console.log('Juvenil')
} else {
    console.log('Adulto')
} */

/* const diaSemana = 9
;

switch (diaSemana) {
    case 0: 
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda-feira")
        break
    case 2:
        console.log("Terça-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quinta-feira")
        break
    case 5:
        console.log("Sexta-feira")
        break
    case 6:
        console.log("Sábado")
        break

    default:
        console.log("Dia não encontrado")
        break;
}    */



/* Neste desafio, podemos utilizar o operador ternário para tornar o código mais conciso e legível. 
Mas por que usar o operador ternário em vez de um if tradicional?
A resposta está na simplicidade do cenário. Quando temos apenas duas possibilidades — 
como um verdadeiro ou falso, permitido ou negado — o operador ternário nos ajuda a escrever essa decisão em uma única linha, 
facilitando a leitura e evitando blocos desnecessários de código.
 */

/* const usuario = "admi";

const pessoa = usuario == "admi" ? "Login bem sucedido!" : "Usuário invalido."

console.log(pessoa) */


/* //Neste exercício, usamos o operador estritamente diferente (!==) para garantir que a fruta fornecida não seja "laranja" nem "abacaxi". 
Ou seja, se for qualquer outra fruta, o sistema considera como incompatível para a receita. */

/* const fruta = "maçã";
if (fruta !== "laranja" && fruta !== "abacaxi") {
  console.log("Fruta incompatível para a receita.");
} else {
  console.log("Fruta compatível para a receita.");
} */



/* Esse exercício foca no uso do operador de negação (!) para inverter uma condição. 
Quando temos a variável carrinhoVazio, ela já nos diz se o carrinho está vazio ou não.
 Mas a gente quer permitir a compra apenas quando ele não está vazio.
Por isso, usamos !carrinhoVazio no if. Isso quer dizer: "se o carrinho não está vazio". 
É aí que mostramos a mensagem de sucesso. Caso contrário, a compra não pode ser finalizada.
const carrinhoVazio = false; */

/* if (!carrinhoVazio) {
  console.log("Compra finalizada com sucesso!");
} else {
  console.log("Não é possível finalizar a compra: carrinho vazio.");
} */
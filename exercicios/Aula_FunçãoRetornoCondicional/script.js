//Retorno  função condicional

function maiorIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

let idade = 15;
let verificacao = maiorIdade(idade);

if (verificacao) {
  console.log("é maior de idade");
} else {
  console.log("é menor de idade");
}

//EXERCICIO 1
function porcentagem(n1, n2) {
  let pct = (n1 / n2) * 100;
  return pct;
}

let y = 40;
let x = 10;
let pct = porcentagem(x, y);

console.log(`${pct}% de ${y} é ${x}`);

//EXERCICIO 2
function calcularImovel(quartos, metragem) {
  let m2 = 3000;
  let preco = 0;

  if (quartos == 1) {
    preco = metragem * m2;
  }
  if (quartos == 2) {
    preco = metragem * m2 * 1.2;
  }
  if (quartos == 3) {
    preco = metragem * m2 * 1.5;
  }

  return preco;
}
let quartos = 1;
let metragem = 123;
let preco = calcularImovel(quartos, metragem);

console.log(`o preco do imovel é ${preco}`);

//EXERCICIO 3
function validacao(usuario, senha) {
  if (usuario === "Renan Vigarani" && senha === "Camilinha") {
    return true;
  }
  console.log("ACESSO NEGADO");
  return false;
}

let usuario = "Renan Vigarani";
let senha = "Camilinha";
let validar = validacao(usuario, senha);

if (validar) {
  console.log("ACESSO PERMITIDO");
}

//introdução array

let colors = ["blue", "red", "green"];
console.log(colors[0]);

let lista = ["algo", 30, "blabla", true];

console.log(lista[0]);

let nomes = ["renan", "camila", "leo"];
let lista2 = ["blabla", nomes];

console.log(lista2[1]);

let lista3 = ["blabla", ["xx", "yy"]];

let segundo = lista3[1];
console.log(segundo[0]);

let lista4 = ["blabla", ["30", "40"]];

console.log(lista4[1][0]);

//Operações basicas de array

let ingredientes = ["agua", "farinha", "ovo", "corante", "sal"];

ingredientes.push("cebola");

console.log(`total de ingredientes: ${ingredientes.length}`);

let carros = ["BMW", "FERRARI", "MERCDES"];
let x = 1;
console.log("1." + carros[x]);

carros[1] = "Audi";
console.log("2. Lista com Audi:");
console.log(carros);

carros[3] = "VOLVO";
console.log("3. Lista com VOLVO");
console.log(carros);

console.log("4. Itens no array");
console.log(carros.length);

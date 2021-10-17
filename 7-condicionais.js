console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 21;
console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1); //Removendo item
} else {
  console.log("Comprador menor de idade");
}
console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);

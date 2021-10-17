console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`); //Push = Adiciona item a lista já declarada
console.log("Destinos possíveis");
console.log(listaDeDestinos);
// console.log(salvador, saoPaulo, rioDeJaneiro);

listaDeDestinos.splice(1, 1); //Splice = Usado para remover item da lista (Indice, quantidade de itens)
listaDeDestinos.unshift(`Cabo Frio`); // Unshift = Adiciona item no início do array
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[3]);

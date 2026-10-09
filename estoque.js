const categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];
console.log('Q1.1 - Array categorias:', categorias);

const codigosProdutos = [101, 102, 103, 104];
const fornecedores = new Array('TechSupply', 'Moda Express', 'SuperFoods');
console.log('Q1.2 - Codigos:', codigosProdutos);
console.log('Q1.2 - Fornecedores:', fornecedores);

console.log('Q1.3 - Primeira categoria:', categorias[0]);
categorias[1] = 'Calçados';
console.log('Q1.3 - Categorias atualizadas:', categorias);

categorias.push('Livros');
categorias.pop();
categorias.unshift('Brinquedos');
categorias.shift();
console.log('Q2.1 - Categorias após manipulações:', categorias);

console.log('Q2.2 - Tamanho total (length):', categorias.length);

const indiceCalcados = categorias.indexOf('Calçados');
console.log("Q2.3 - Índice de 'Calçados':", indiceCalcados);

const possuiEletronicos = categorias.includes('Eletrônicos');
console.log("Q2.3 - Possui 'Eletrônicos'?:", possuiEletronicos);

console.log('Q3.1 - Iteração com laço for tradicional:');
for (let i = 0; i < categorias.length; i++) {
  console.log(`- ${categorias[i]}`);
}

console.log('Q3.2 - Iteração com laço for...of:');
for (const categoria of categorias) {
  console.log(`- ${categoria}`);
}

const produtos = [
  { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
  { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
  { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

console.log('Q4.1 - Nome do primeiro produto:', produtos[0].nome);

const produtosBaratos = produtos.filter(prod => prod.preco < 300.00);
console.log('Q4.2 - Produtos com preço < 300.00:', produtosBaratos);

const precosAmostra = [50, 150, 200, 350, 400];
const multiplosDe100 = precosAmostra.filter(preco => preco % 100 === 0);
console.log('Q4.2 - Múltiplos de 100:', multiplosDe100);

const quantidades = [2, 3, 5, 10];
const totalItens = quantidades.reduce((acc, qte) => acc + qte, 0);
console.log('Q4.3 - Total de itens:', totalItens);

const valorTotalEstoque = produtos.reduce((acc, prod) => acc + (prod.preco * prod.estoque), 0);
console.log('Q4.3 - Valor total imobilizado no estoque: R$', valorTotalEstoque.toFixed(2));

const precosOriginais = [100, 200, 300];
const precosComDesconto = precosOriginais.map(preco => preco * 0.9);
console.log('Q4.4 - Preços com 10% de desconto:', precosComDesconto);

const nomesProdutos = produtos.map(prod => prod.nome);
console.log('Q4.4 - Lista de nomes dos produtos:', nomesProdutos);

const produtosCopiaOrdenada = produtos
  .slice()
  .sort((a, b) => a.preco - b.preco);
console.log('Q4.5 - Cópia ordenada por preço:', produtosCopiaOrdenada);

const temEstoqueBaixo = produtos.some(prod => prod.estoque < 5);
console.log('Q4.6 - Existe produto com estoque < 5?:', temEstoqueBaixo);

const inventarioVariado = [
  { nome: 'Teclado', estoque: 15 },
  { nome: 'Mouse', estoque: 2 },
  { nome: 'Headset', estoque: 10 }
];

const temEstoqueCritico = inventarioVariado.some(prod => prod.estoque < 5);
console.log('Q4.6 - Existe estoque crítico (< 5) no novo inventário?:', temEstoqueCritico);

if (temEstoqueCritico) {
  const produtoCritico = inventarioVariado.find(prod => prod.estoque < 5);
  console.log('Q4.6 - Primeiro produto em situação crítica:', produtoCritico);
}
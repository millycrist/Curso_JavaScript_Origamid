// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll ('p');

const totalCaracteres = Array.prototype.reduce.call (acumulador, item =>{
    return acumulador + item.innerText.length ;
}, 0)

console.log(totalCaracteres);
console.log(paragrafos);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento (tog, classe, conteudo){
    const elemento = document.createElement(tag);
    classe ? elemento.classeList.add(classe) : null;
    classe ? elemento.inneHTML = conteudo : null;
    return elemento;
}

console.log (criarElemento('li', 'azul', 'Esse é o conteudo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');  

const cursos35 = h1Titulo('Cursos de JavaScript')
const cursosHTML = h1Titulo('Cursos de HTML')

console.log()
console.log(h1Titulo('Cursos de HTML'))

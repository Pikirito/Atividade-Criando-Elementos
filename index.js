//Exercicio 1

/* const body = document.querySelector("body");
const tag = document.createElement("p");
tag.innerText = "Olá, eu sou uma tag criada pelo JS";
body.appendChild(tag);
console.log(tag);
 */

//Exerciocio 2

/* const tagInput = document.createElement("input");
tagInput.placeholder = "Digite seu texto aqui";

const form = document.querySelector("form");
form.appendChild(tagInput); */

//Exerciocio 3

const body = document.querySelector("body");

const article = document.createElement("article");

const title1 = document.createElement("h1");
title1.innerText = "Título do Post";

const paragraph = document.createElement("p");
paragraph.innerText = "Descrição do Post";

const links = document.createElement("a");
links.innerText = "Ver post completo";

body.appendChild(article);
article.appendChild(title1);
article.appendChild(paragraph);
article.appendChild(links);

let fondo = document.querySelector('body')
let container = document.querySelector(".container");
let caja1 = document.querySelector(".caja1");
let caj2 = document.querySelector(".caja2");
let caja3 = document.querySelector(".caja3");
container.addEventListener("click", function () {
	caja1.classList.toggle("active1");
	caja3.classList.toggle("active2")
	fondo.classList.toggle('Fondo');
});

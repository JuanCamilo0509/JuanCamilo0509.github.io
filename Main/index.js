//objetos del document
const body = document.querySelector("body");
const contenedorCarga = document.querySelector(".Contenedor_carga");
const boxAirplane = document.querySelector(".boxAirplane");
const container = document.querySelector(".container");
const caja1 = document.querySelector(".active1");
const caja3 = document.querySelector(".active2");
const numero_month = document.querySelector(".numero_month");
const container_year = document.querySelector(".year");
const dosPuntos = document.querySelector(".dosPuntos");
const titulo_month = document.querySelector(".titulo_month");
const numero_year = document.querySelector(".numero_year");
const titulo_year = document.querySelector(".titulo_year");
const flecha = document.querySelector(".flecha");
const Img1 = document.querySelector(".imagen1");
const Img2 = document.querySelector(".imagen2");
const solLuna = document.querySelector(".solLuna");
const Luna = document.querySelector(".Luna");
const Sol = document.querySelector(".Sol");

//contador

//Se define la fecha
let fecha = new Date("May 14 2022");
let date = fecha.getDate();
let year = fecha.getFullYear()-2022;
// Si el numero es menor a la fecha estimada se resta uno, sino, se mantiene la fecha con los meses
if (fecha.getDate() < 14) {
	cantidad = fecha.getMonth() + 2;
} else if (fecha.getDate() >= 14) {
	cantidad = fecha.getMonth() + 3;
}





if (cantidad == 12){ 
	numero_month.innerHTML = 1 + " AÑO";	
} else if (cantidad < 12 & year == 0) {
	numero_month.innerHTML = cantidad + " MESES";	
}else if (cantidad < 12 & year > 0){
	numero_month.innerHTML = year + " AÑOS Y " + cantidad + " MESES";	
} else if (cantidad > 12 ) {
	cantidad = cantidad;
	numero_month.innerHTML = year + " AÑO ";	
} 





















container.addEventListener("click", function () {
	if (
		document.documentElement.style.getPropertyValue("--fondo") ===
		"#f7f7f7"
	) {
		document.documentElement.style.setProperty(
			"--fondo",
			"#000000"
		);
		boxAirplane.classList.remove("boxAirplane");
		boxAirplane.classList.add("boxAirplane2");
		body.style.color = "white";
		caja3.classList.remove("active2");
		caja3.classList.add("caja3");
		caja1.classList.remove("caja1");
		caja1.classList.add("active1");
	} else {
		document.documentElement.style.setProperty(
			"--fondo",
			"#f7f7f7"
		);
		boxAirplane.classList.add("boxAirplane");
		boxAirplane.classList.remove("boxAirplane2");
		body.style.color = "black";
		caja1.classList.add("caja1");
		caja1.classList.remove("active1");
		caja3.classList.add("active2");
		caja3.classList.remove("caja3");
	}
});
solLuna.addEventListener("click", function () {
	if (
		document.documentElement.style.getPropertyValue("--fondo") ===
		"#f7f7f7"
	) {
		document.documentElement.style.setProperty(
			"--fondo",
			"#000000"
		);
		boxAirplane.classList.remove("boxAirplane");
		boxAirplane.classList.add("boxAirplane2");
		body.style.color = "white";
		Luna.style.display = "flex";
		Sol.style.display = "none";
	} else {
		document.documentElement.style.setProperty(
			"--fondo",
			"#f7f7f7"
		);
		boxAirplane.classList.add("boxAirplane");
		boxAirplane.classList.remove("boxAirplane2");
		body.style.color = "black";
		Luna.style.display = "none";
		Sol.style.display = "flex";
	}
});

//bloqueo del scroll
window.onscroll = function () {
	//console.log("Vertical: " + window.scrollY);
	//console.log("Horizontal: " + window.scrollX);
	if (window.scrollY >= 800) {
		contenedorCarga.style.display = "none";
		document.documentElement.style.setProperty("--height", "200vh");
	}
};
flecha.addEventListener("click", function () {
	contenedorCarga.style.display = "flex";
	window.scroll(0, 0);
});

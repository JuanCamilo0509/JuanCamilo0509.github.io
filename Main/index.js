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
let fecha2 = new Date("10/14/2021");
let fecha = new Date();
let date = fecha.getDate();
let month1 = Math.floor((fecha - fecha2) / (1000 * 60 * 60 * 24 * 7 * 4));
let year = Math.floor((fecha - fecha2) / (1000 * 60 * 60 * 24 * 7 * 4 * 12));
if (date == 14) {
}
if (year == 0) {
	container_year.style.display = "none";
	dosPuntos.style.display = "none";
}
if (year == 1) {
	var month = month1 - 12;
	titulo_year.textContent = "AÑO";
	titulo_month.textContent = "MES";
	container_year.style.display = "initial";
	dosPuntos.style.display = "initial";
} else if (year == 2) {
	var month = month1 - 24;
} else {
	var month = month1;
}
numero_month.textContent = month;
numero_year.textContent = year;

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
		Luna.style.display = "flex"
		Sol.style.display = "none"
	} else {
		document.documentElement.style.setProperty(
			"--fondo",
			"#f7f7f7"
		);
		boxAirplane.classList.add("boxAirplane");
		boxAirplane.classList.remove("boxAirplane2");
		body.style.color = "black";
		Luna.style.display = "none"
		Sol.style.display = "flex"
	}
});


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

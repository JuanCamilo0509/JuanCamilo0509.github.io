let cuerpo = document.querySelector('body')
//(function idk() {
	//let actualizarHora = function () {
		//let fecha2 = new Date(11/3/2021)
		//console.log(fecha2)
		//let fecha = new Date(),
			//days = fecha.getDay(),
			//meses = fecha.getMonth(),
			//year = fecha.getFullYear();
		let pdays = document.querySelector(".days");
		//let pmonths = document.querySelector(".month");
		//let pyear = document.querySelector(".year");
		//pdays.textContent = days;
		//pyear.textContent = (2021-year);
	//};
	//actualizarHora();
//})();

//mes/dia/año
let fecha = new Date();
let aniversario = fecha.getDate();
if (aniversario == 14){
	cuerpo.style.background = "#000000"
} else {
	cuerpo.style.background = "#f7f7f7"
}
pdays.textContent = aniversario

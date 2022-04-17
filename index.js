const body = document.querySelector("body");
const container = document.querySelector(".container");
const caja1 = document.querySelector(".active1");
const caja3 = document.querySelector(".active2");
container.addEventListener("click", function () {
	if (
		document.documentElement.style.getPropertyValue("--fondo") ===
		"#f7f7f7"
	) {
		document.documentElement.style.setProperty(
			"--fondo",
			"#000000"
		);
		body.style.color = "white";
		caja3.classList.remove("active2")
		caja3.classList.add("caja3");
		caja1.classList.remove('caja1');
		caja1.classList.add("active1");
	} else {
		document.documentElement.style.setProperty(
			"--fondo",
			"#f7f7f7"
		);
		body.style.color = "black";
		caja1.classList.add('caja1');
		caja1.classList.remove("active1");
		caja3.classList.add("active2")
		caja3.classList.remove("caja3");
	}
});

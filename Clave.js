const confirmar = document.querySelector(".Confirmar");
confirmar.addEventListener("click", function () {
	if (
		((document.querySelector(".User").value == "luna" || document.querySelector(".User").value == "Luna" || document.querySelector(".User").value == "Luna " || document.querySelector(".User").value == "luna " ) ||(document.querySelector(".User").value == "camilo" || document.querySelector(".User").value == "Camilo" || document.querySelector(".User").value == "Camilo " || document.querySelector(".User").value == "camilo "
)) &
		(document.querySelector(".Password").value == "14.9"
	)) {
		window.location = "/Main/main.html";
	} else {
		alert("Intentalo de nuevo")
	}
});

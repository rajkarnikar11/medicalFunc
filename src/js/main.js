const menu = document.querySelector(".navbar__burgercontainer");
let toggler = 0;
function toggleMenu() {
	if (toggler === 0) {
		toggler = 1;
		document.querySelector(".navbar__listcontainer--small").style.opacity =
			"1";
		document.querySelector(".navbar__right--small").style.display = "flex";
		console.log(toggler);
	} else {
		toggler = 0;
		document.querySelector(".navbar__listcontainer--small").style.opacity =
			"0";
		document.querySelector(".navbar__right--small").style.display = "none";
		console.log(toggler);
	}
}
menu.addEventListener("click", toggleMenu);

document.querySelector("#menu-icon").addEventListener("click", (event) => {
	const navOptions = document.querySelector("#nav-options");
	const display = navOptions.style.display;
	navOptions.style.display = display == "flex" ? "none" : "flex";
});

function download() {
	let link = document.createElement("a");
	link.href = "Sudip Chowdhury_Full Stack Web Developer.pdf";
	link.download = "Sudip Chowdhury_Full Stack Web Developer.pdf";
	link.click();
	link.remove();
}

function redirect() {
	window.open("Sudip Chowdhury_Full Stack Web Developer.pdf");
}

document.getElementById("resume-button-1").addEventListener("click", function() {
	redirect()
	download()
});

document.getElementById("resume-button-2").addEventListener("click", function() {
	redirect()
	download()
});

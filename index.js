document.querySelector("#menu-icon").addEventListener("click", (event) => {
	const navOptions = document.querySelector("#nav-options");
	const display = navOptions.style.display;
	navOptions.style.display = display == "flex" ? "none" : "flex";
});

function download() {
	let link = document.createElement("a");
	link.href = "SudipChowdhury_fw22_0295.pdf";
	link.download = "SudipChowdhury_fw22_0295.pdf";
	link.click();
	link.remove();
}

function redirect() {
	window.open("SudipChowdhury_fw22_0295.pdf");
}

document.getElementById("resume-button-1").addEventListener("click", function() {
	redirect()
	download()
});

document.getElementById("resume-button-2").addEventListener("click", function() {
	redirect()
	download()
});

GitHubCalendar(".calendar", "Sudip-C", {
    responsive: true
  });

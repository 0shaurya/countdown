window.onload=function() {

	var targetTime = 1667192400000;

	const title = document.getElementById("title");
	const days = document.getElementById("days");
	const hours = document.getElementById("hours");
	const minutes = document.getElementById("minutes");
	const seconds = document.getElementById("seconds");

	const button1 = document.getElementById("titleButton");
	const button2 = document.getElementById("changeBackground");

	const body = document.getElementById("body");

	function write() {
		const currentDate = new Date();

		currentTime = currentDate.getTime();
		diff = (targetTime - currentTime)/1000;
		days.textContent    = Math.floor(diff/60/60/24);
		hours.textContent   = Math.floor((diff/60/60/24-days.textContent)*24);
		minutes.textContent = Math.floor((diff/60/60-Math.floor(diff/60/60))*60);
		seconds.textContent = Math.floor(diff%60);
	}
	
	write();
	var run = setInterval(write, 1000);

	button1.addEventListener("click", () => {
		title.textContent = prompt("Title?");
		targetTime = new Date(prompt("New date? ex Syntax: 14 Apr 2045"));
	})

	button2.addEventListener("click", () => {
		body.style = "background-image: url(" + prompt("Image URL?") + ")";
	})
}


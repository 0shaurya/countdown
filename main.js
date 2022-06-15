window.onload=function() {

	//var targetTime = 1667192400000;

	const title = document.getElementById("title");
	const days = document.getElementById("days");
	const hours = document.getElementById("hours");
	const minutes = document.getElementById("minutes");
	const seconds = document.getElementById("seconds");

	const daysWord = document.getElementById("daysWord");
	const hoursword = document.getElementById("hoursWord");
	const minutesWord = document.getElementById("minutesWord");
	const secondsWord = document.getElementById("secondsWord");

	const button1 = document.getElementById("titleButton");
	const button2 = document.getElementById("changeBackground");

	const dateInput = document.getElementById("dateInput");
	const timeInput = document.getElementById("timeInput");

	const body = document.getElementById("body");

	function write() {
		const currentDate = new Date();
		targetTime = ((dateInput.valueAsNumber+timeInput.valueAsNumber)+(currentDate.getTimezoneOffset()*60000))
		
		if (!(targetTime > 0 || targetTime <1)) {
			targetTime = 1687284000000;
		}


		currentTime = currentDate.getTime();

		diff = (targetTime - currentTime)/1000;


		if (diff <= 0) {
			days.textContent    = " ";
			hours.textContent   = " ";
			minutes.textContent = " ";
			seconds.textContent = "​";
			daysWord.textContent = "​";
			hoursWord.textContent = "​";
			minutesWord.textContent = "​";
			secondsWord.textContent = "​";
			hereMessage.textContent = "It's here! 🥳🎈🎊";
		} else {
			days.textContent    = Math.floor(diff/60/60/24);
			hours.textContent   = Math.floor((diff/60/60/24-Math.floor(diff/60/60/24))*24);
			minutes.textContent = Math.floor((diff/60/60-Math.floor(diff/60/60))*60);
			seconds.textContent = Math.floor(diff%60);
			daysWord.textContent = "days";
			hoursWord.textContent = "hours";
			minutesWord.textContent = "minutes";
			secondsWord.textContent = "seconds";
			hereMessage.textContent = "​";
		}
	}
	
	write();
	var run = setInterval(write, 100);

	button1.addEventListener("click", () => {
		let x = prompt("Title?");
		if (x === "") {
		
		} else if (x.trim().length === 0) {
			title.textContent = "​";
		} else {
			title.textContent = x;
		}
	})

	button2.addEventListener("click", () => {
		let x = prompt("Image URL?");
		if (x === "" || x.trim().length === 0) {
		} else {
		body.style = "background-image: url(" + x + ")";
		}
	})
}

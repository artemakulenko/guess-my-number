"use strict";

let defaultScore = 20;
let currentScore = defaultScore;
const getSecretNumber = () => Math.trunc(Math.random() * defaultScore) + 1;
let secretNumber = getSecretNumber();

const score = document.querySelector(".score");
const message = document.querySelector(".message");
const button = document.querySelector("button.check");
const input = document.querySelector("input.guess");
const hidenNumber = document.querySelector(".number");
const body = document.querySelector("body");
const labelHighscore = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");

const decreaseScore = () => {
	currentScore--;
	displayMessage(score, currentScore);
};

const displayMessage = (target, text) => (target.textContent = text);

const youWin = () => {
	body.classList.add("victory");

	displayMessage(message, "🏆 You Win!!!");
	displayMessage(hidenNumber, secretNumber);

	hidenNumber.style.width = "30rem";

	if (currentScore > labelHighscore.textContent) {
		displayMessage(labelHighscore, currentScore);
	}
};

const youLose = () => {
	displayMessage(message, "you lose, click again btn");
	currentScore = 0;
	displayMessage(score, currentScore);
};

// Start application
displayMessage(score, currentScore);

// Events
button.addEventListener("click", function () {
	let inputValue = Number(input.value);

	if (!inputValue) {
		displayMessage(message, "No number 🌜");
	} else if (currentScore > 1) {
		if (inputValue == secretNumber) {
			youWin();
		} else {
			inputValue > secretNumber ? displayMessage(message, "👇 try lower") : displayMessage(message, "👆 try higher");
			decreaseScore();
		}
	} else {
		youLose();
	}
});

againBtn.addEventListener("click", function () {
	if (body.classList.contains("victory")) body.classList.remove("victory");

	currentScore = defaultScore;
	secretNumber = getSecretNumber();

	displayMessage(score, currentScore);
	displayMessage(hidenNumber, "?");
	displayMessage(message, "Start guessing...");
});

import { gameOver, jump, mario, resetMarioDefaults } from "./components/Mario";
import { pipe, resetPipeDefaults } from "./components/Pipe";

const gameLoop = setInterval(() => {
	const pipePos = pipe.offsetLeft;
	const marioPos = +window.getComputedStyle(mario).bottom.replace("px", "");

	if (pipePos <= 120 && pipePos > 0 && marioPos < 80) {
		pipe.style.animation = "none";
		pipe.style.left = `${pipePos}px`;

		mario.style.animation = "none";
		mario.style.bottom = `${marioPos}px`;

		gameOver();

		clearInterval(gameLoop);
	}
}, 10);

const restart = () => {
	resetMarioDefaults();
	resetPipeDefaults();
	const gameLoop = setInterval(() => {
		const pipePos = pipe.offsetLeft;
		const marioPos = +window.getComputedStyle(mario).bottom.replace("px", "");

		if (pipePos <= 120 && pipePos > 0 && marioPos < 80) {
			pipe.style.animation = "none";
			pipe.style.left = `${pipePos}px`;

			mario.style.animation = "none";
			mario.style.bottom = `${marioPos}px`;

			gameOver();

			clearInterval(gameLoop);
		}
	}, 10);
};

const controlMap = (key: string) => {
	console.log(key);
	switch (key) {
		case "ArrowUp":
			jump();
			break;
		case " ":
			jump();
			break;
		case "r":
			restart();
			break;
	}
};

document.addEventListener("keydown", (event) => controlMap(event.key));

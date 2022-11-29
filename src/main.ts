import { jump, mario } from "./components/Mario";
import { pipe } from "./components/Pipe";

const gameLoop = setInterval(() => {
	const pipePos = pipe.offsetLeft;
	const marioPos = +window.getComputedStyle(mario).bottom.replace("px", "");

	if (pipePos <= 120 && pipePos > 0 && marioPos < 80) {
		pipe.style.animation = "none";
		pipe.style.left = `${pipePos}px`;

		mario.style.animation = "none";
		mario.style.bottom = `${marioPos}px`;
	}
}, 10);

document.addEventListener("keydown", jump);

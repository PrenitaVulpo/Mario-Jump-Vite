import { jump } from "./components/Mario";
import { pipe } from "./components/Pipe";

const gameLoop = setInterval(() => {
	const pipePos = pipe.offsetLeft;
}, 10);

document.addEventListener("keydown", jump);

const mario = document.querySelector(".mario") as HTMLImageElement;

const jump = () => {
	mario.classList.add("jump");

	console.log(mario.classList);

	setTimeout(() => {
		mario.classList.remove("jump");
	}, 500);
};

const gameOver = () => {
	mario.src = "./images/game-over.png";
	mario.style.removeProperty("animation");
	mario.classList.remove("mario");
	mario.classList.remove("jump");
	mario.classList.add("mario-game-over");
};

const resetMarioDefaults = () => {
	mario.src = "./images/mario.gif";
	mario.style.bottom = "0px";
	mario.classList.remove("mario-game-over");
	mario.classList.remove("jump");
	mario.classList.add("mario");
};

export { mario, jump, gameOver, resetMarioDefaults };

const mario = document.querySelector(".mario") as HTMLImageElement;

const jump = () => {
	mario?.classList.add("jump");

	setTimeout(() => {
		mario?.classList.remove("jump");
	}, 500);
};

export { mario, jump };

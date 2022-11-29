const pipe = document.querySelector(".pipe") as HTMLImageElement;

const resetPipeDefaults = () => {
	pipe.style.removeProperty("left");
	pipe.style.animation = "pipe-animation 2s infinite linear";
};

export { pipe, resetPipeDefaults };

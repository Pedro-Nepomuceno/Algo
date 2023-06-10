const debounceTextDom = document.querySelector("element");

const debounceText = debounce((text) => {
	debounceTextDom.textContent = text;
});

input.addEventListener("input", (e) => {
	debounceText(e.target.value);
});

function debounce(callback, delay = 2000) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			callback(...args);
		}, delay);
	};
}

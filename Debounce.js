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
// debounce from algoExpert.io

function debounce(callback, delay, immediate = false) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		const checkImmediate = timer == null && immediate;
		if (checkImmediate) {
			callback.apply(this, args);
		}
		timer = setTimeout(() => {
			if (!immediate) {
				callback.apply(this, args);
			}
			timer = null;
		}, delay);
	};
}

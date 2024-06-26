class Api {
	constructor({ baseUrl, headers }) {
		this.headers = headers;
		this.baseUrl = baseUrl;
	}

	getQuestions() {
		return fetch(this.baseUrl).then(this.handleServerResponse);
	}

	handleServerResponse(res) {
		res.ok ? res.json() : Promise.reject(`error ${res.status}`);
	}
	postSubmission() {
		return fetch(`${this.baseUrl}/postAnswer`, {
			method: "POST",
			headers: this.headers,
			body: JSON.stringify(),
		}).then(this.handleServerResponse);
	}
}

export const api = new Api({});

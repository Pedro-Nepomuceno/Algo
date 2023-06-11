import React from "react";

const QUESTIONS_API_BASE_URL = "https://api.frontendexpert.io/api/fe/questions";
const SUBMISSIONS_API_BASE_URL =
	"https://api.frontendexpert.io/api/fe/submissions";

export default function QuestionList() {
	const [questions, submissions] = getQuestionsAndSubmissions();

	return <></>;
}
function getQuestionsAndSubmissions() {
	useEffect(() => {
		const getQuestions = async () => {
			return fetch(QUESTIONS_API_BASE_URL);
		};
	}, []);
}

// given an array of pairs representing the team and the result of a game, where 0 represent that the away team won
// and 1 represent the home team won. find the team that won the tournament
function tournamentWinner(competitions, results) {
	let winner = { score: 0, name: "" };
	const scoreMap = {};

	for (let i = 0; i < competitions.length; i++) {
		let homeTeam = competitions[i][0];
		let awayTeam = competitions[i][1];

		if (results[i] === 0) {
			scoreMap[awayTeam] = (scoreMap[awayTeam] || 0) + 3;
		} else {
			scoreMap[homeTeam] = (scoreMap[homeTeam] || 0) + 3;
		}
		if (scoreMap[awayTeam] >= winner.score) {
			winner = { score: scoreMap[awayTeam], name: awayTeam };
		} else if (scoreMap[homeTeam] >= winner.score) {
			winner = { score: scoreMap[homeTeam], name: homeTeam };
		}
	}
	return winner.name;
}

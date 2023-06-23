// given an array of pairs representing the team and the result of a game, where 0 represent that the away team won
// and 1 represent the home team won. find the team that won the tournament
function tournamentWinner(competitions, results) {
	let totalResult = {};
	let total = 0;
	let win = "";
	for (let i = 0; i <= results.length; i++) {
		const winner = results[i] === 0 ? competitions[i][1] : competitions[i][0];
		totalResult[winner] = (totalResult[winner] || 0) + 3;
		if (total[winner] > total) {
			total = totalResult[winner];
			win = winner;
		}
	}

	return win;
}

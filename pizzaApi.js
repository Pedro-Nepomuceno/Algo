// app that will download orders directly from http://files.olo.com/pizzas.json and output the top 20 most frequently ordered pizza topping combinations. List the toppings for each popular pizza topping combination along with its rank and the number of times that combination has been ordered.

// Step 1: Fetch pizza orders from the URL
fetch("http://files.olo.com/pizzas.json")
	.then((response) => response.json())
	.then((data) => {
		// Step 2: Parse the JSON response
		const orders = data.orders;

		// Step 3: Extract unique pizza topping combinations
		const toppingCombinations = {};
		orders.forEach((order) => {
			const toppings = order.toppings.sort().join(","); // Normalize the order of toppings
			if (toppings in toppingCombinations) {
				toppingCombinations[toppings]++;
			} else {
				toppingCombinations[toppings] = 1;
			}
		});

		// Step 4: Sort topping combinations by count
		const sortedCombinations = Object.entries(toppingCombinations)
			.sort((a, b) => b[1] - a[1])
			.slice(0, 20); // Retrieve top 20 combinations

		// Step 6: Output the top 20 combinations
		sortedCombinations.forEach((combination, index) => {
			const toppings = combination[0].split(",");
			const count = combination[1];
			const rank = index + 1;
			console.log(`Rank ${rank}: ${toppings.join(", ")} (${count} orders)`);
		});
	})
	.catch((error) => {
		console.error("Error fetching pizza orders:", error);
	});

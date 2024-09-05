// represent a graph with the airporters and the possible routes each plane can make for given airport

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split("");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIN"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

const adjancencyList = new Map();

function addNode(airport) {
  adjancencyList.set(airport, []);
}

function addEdge(origin, destination) {
  adjancencyList.get(origin).push(destination);
  adjancencyList.get(destination).push(origin);
}
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// now find out if there is a route between LAX TO BKK

function bfs(start) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjancencyList.get(airport);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log("found it ");
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

function dfs(start, visited = new set()) {
  visited.add(start);
  const destinations = adjancencyList.get(start);
  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log("found it bkk");
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

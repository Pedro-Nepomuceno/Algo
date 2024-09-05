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

const graph = new set();

function addNewNode(airport) {
  graph.set(airport, []);
}

function addRoute(origin, destination) {
  graph.get(origin).push(destination);
  graph.get(destination).push(origin);
}
airports.forEach(addNewNode);
routes.forEach((route) => addRoute(...route));

// graph = {
// 'PHX' : [LAX, JFK]
// 'LAX': PHX
//  }

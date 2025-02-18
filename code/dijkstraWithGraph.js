function dijkstra(graph, start) {
	// Create an object to store the shortest distance from the start node to every other node
	const distance = {};

	// A set to keep track of all visited nodes
	const visited = new Set();

	// Get all the nodes of the graph
	const nodes = Object.keys(graph);

	for (let node of nodes) {
		distance[node] = Infinity;
	}

	distance[start] = 0;

	while (nodes.length > 0) {
		// Sort nodes by distance and pick the closest unvisited node
		nodes.sort((a, b) => distance[a] - distance[b]);
		const closestNode = nodes.shift();

		// If the shortest distance to the closest node is still Infinity, then remaining nodes are unreachable and we can break
		if (distance[closestNode] === Infinity) break;

		// Mark the chosen node as visited
		visited.add(closestNode);

		for (let neighbor in graph[closestNode]) {
			// If the neighbor hasn't been visited yet
			if (!visited.has(neighbor)) {
				// Calculate tentative distance to the neighboring node
				const newDistance = distance[closestNode] + graph[closestNode][neighbor];

				if (newDistance < distance[neighbor]) {
					// Update the shortest distance to this neighbor
					distance[neighbor] = newDistance;
				}
			}
		}
	}

	return distance;
}

const graph = {
	A: { B: 1, C: 4 }, // Node A is connected to Node B with a weight of 1 and Node C with a weight of 4
	B: { A: 1, C: 2, D: 5 }, // ... and so on for other nodes
	C: { A: 4, B: 2, D: 1 },
	D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, 'A'));

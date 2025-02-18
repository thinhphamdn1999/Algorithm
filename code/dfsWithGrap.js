function dfs(graph, start) {
	const stack = [start];
	const visited = new Set();
	const result = [];

	while (stack.length > 0) {
		const vertex = stack.pop();

		if (!visited.has(vertex)) {
			visited.add(vertex);
			result.push(vertex);

			for (let neighbor of graph[vertex]) {
				stack.push(neighbor);
			}
		}
	}

	return result;
}

const graph = {
	A: ['B', 'D'],
	B: ['A', 'C', 'E'],
	C: ['B'],
	D: ['A', 'E'],
	E: ['B', 'D', 'F'],
	F: ['E']
};

console.log(dfs(graph, 'A'));

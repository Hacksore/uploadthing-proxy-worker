const API_URL = "https://utfs.io";

const handler: ExportedHandler = {
	async fetch(request) {
		async function handleRequest(request: Request) {
			const url = new URL(request.url);
			const urlToFile = `${API_URL}${url.pathname}`;

			const response = await fetch(urlToFile);
			return new Response(response.body, {});
		}

		if (request.method === "GET") {
			return handleRequest(request);
		} else {
			return new Response(null, {
				status: 405,
				statusText: "Method Not Allowed",
			});
		}
	},
};

export default handler;

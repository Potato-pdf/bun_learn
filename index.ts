

const server = Bun.serve({
    port: 3000,
    fetch(request) {
        const url = new URL(request.url);
            return new Response("Hello bun", { status: 200 });
    },
});

console.log(`Server running at http://localhost:${server.port}`);

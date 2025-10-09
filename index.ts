
import { serve } from "bun";

const server = serve({
    port: 3000,
    async fetch(request) {
        const url = new URL(request.url);

        // Servir archivos estáticos
        if (url.pathname === "/" || url.pathname === "/index.html") {
            const html = await Bun.file("index.html").text();
            return new Response(html, {
                headers: { "Content-Type": "text/html" },
            });
        }

        if (url.pathname === "/globals.css") {
            const css = await Bun.file("globals.css").text();
            return new Response(css, {
                headers: { "Content-Type": "text/css" },
            });
        }

        if (url.pathname === "/bun-logo.svg") {
            const svg = await Bun.file("Bun Logo.svg").text();
            return new Response(svg, {
                headers: { "Content-Type": "image/svg+xml" },
            });
        }

        return new Response("Not found", { status: 404 });
    },
});

console.log(`🚀 Server running at http://localhost:${server.port}`);

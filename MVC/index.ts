import { serve } from "bun";
import { user_routes } from "./src/route/user.route";
import { conect_db } from "./src/db/mongo.conection";
import { URL } from "whatwg-url";
const puerto = 2550
  
await conect_db();
Bun.serve({
  port: puerto,
  fetch(req) {
    const url = new URL(req.url);

    const routes = [user_routes];

    for (const route of routes) {
      const res = route(url, req);
      if (res) return res;
    }

    return new Response("404 Not Found", { status: 404 });
  },
});
console.log(`server running at ${puerto}`);
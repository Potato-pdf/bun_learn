import { glob } from "glob";
import { Hono } from "hono";
import { H } from "hono/types";
import path from "path";

export function register_routes (app:Hono){
    const routes = glob.sync(`${__dirname}/**/*.route.*`);
    routes.map(route => register(route, app))

}

function register(routePath:string,app:Hono){
    const absolute_path = path.resolve(routePath)
    const {register} = require(absolute_path) satisfies{register: (app:Hono)=>void};
    register(app)
}
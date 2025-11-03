import { Hono } from 'hono';
import "reflect-metadata";
import { register_routes } from './infrestructure/routes';
import { logger } from 'hono/logger';
const app = new Hono().basePath("saltillo")

app.use("*", logger())

register_routes(app);

export default app

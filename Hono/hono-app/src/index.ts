import { Hono } from 'hono';
import "reflect-metadata";
const app = new Hono()

app.get('/', (c) => {
  return c.text('Gente pendja')
})

export default app

import { controller, response } from "./controller";
import HttpStatus  from "http-status";
import {Context, TypedResponse} from "hono";
import { StatusCode } from "hono/utils/http-status";
export default class health_check_controller implements controller{
    async run(c:Context): Promise<Response & TypedResponse<response,StatusCode, "json">>{
        return c.json({ message: "ok" }, HttpStatus.OK)
    }
}
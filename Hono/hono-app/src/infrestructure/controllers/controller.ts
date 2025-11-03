import { Context, TypedResponse } from "hono";
import { StatusCode } from "hono/utils/http-status";

export interface response{
    message : string
}
export interface controller {
    run(c:Context): Promise<Response & TypedResponse<response,StatusCode, "json">>
}
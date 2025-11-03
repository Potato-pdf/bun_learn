import {Hono} from "hono";
import container from "../config/dependency-injection/inversify.config";
import health_check_controller from "../controllers/health.check.controller";
import { TYPES } from "../config/dependency-injection/types.inversufy";

export const register = (app:Hono): void => {
    const health_check_controller = container.get<health_check_controller>(TYPES.health_check_controller)

    app.get("/health", (c) => health_check_controller.run(c))
}
    
import {Container } from "inversify"
import health_check_controller from "../../controllers/health.check.controller"
import { TYPES } from "./types.inversufy"

const container = new Container()

//Controllers
container.bind<health_check_controller>(TYPES.health_check_controller).to(health_check_controller).inSingletonScope

//Application

//Domain

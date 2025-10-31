import { register, get_by_id} from "../controller/user.controller";

export function user_routes(url: URL, req : Request){
    const path = url.pathname
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    if (path.startsWith("/user/") && req.method === "GET"){
        const id = path.split("/")[2]
        return get_by_id(id)
        }
}
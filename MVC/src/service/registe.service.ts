import user_model from "../model/user"
import type {User}  from "../types/user"

const register_user = async (user:User) =>{
    const response = await user_model.create(user)
    return response
}

const get_user = async(id:string) =>{
    const response = await user_model.findOne({id})
    return response
}

export{register_user, get_user} 
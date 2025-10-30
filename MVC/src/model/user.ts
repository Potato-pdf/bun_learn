import { Schema, model } from "mongoose"

const user_schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const user_model = model("User", user_schema)

export default user_model
import mongoose from "mongoose"
    const url = "mongodb://localhost:27017"

export async function connection_db (){
    try {
        await mongoose.connect(url);
        console.log ("Conect to mongooDB")
    }
    catch{
        console.log(`error to conecto whith${url}`)
    }
}
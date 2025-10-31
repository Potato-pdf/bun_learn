import mongoose from "mongoose";

export async function conect_db() {
try{
    const url = "mongodb://localhost:27017"
    await mongoose.connect(url);
    console.log("connection sucesfull whith mongodb")
}
catch{
    console.error(err);
    
}
}
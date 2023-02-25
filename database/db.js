import mongoose from "mongoose";

export const Connection = async (Url) => {
    // const Url = `mongodb://${username}:${password}@ac-c8oawuf-shard-00-00.bouabmm.mongodb.net:27017,ac-c8oawuf-shard-00-01.bouabmm.mongodb.net:27017,ac-c8oawuf-shard-00-02.bouabmm.mongodb.net:27017/?ssl=true&replicaSet=atlas-110j7b-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        // connect take two paramerter 1 url, 2 object
        await mongoose.connect(Url, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("data base connnected sucessfully")
    } catch (err) {
        console.log(`Error while connecting with the database`, err.message);
    }
}


export default Connection;
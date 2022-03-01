import { connect , connection } from "mongoose";

const uri = process.env.LocalDB; //process.env.REMOTE_MONGODB;
const options = {
    useNewUrlParser: true,
    autoIndex: false,
    keepAlive: true,
    useUnifiedTopology: true,
    keepAliveInitialDelay: 5e6,
    serverSelectionTimeoutMS: 10e3,
    socketTimeoutMS: 5000,
};
const launchDB = async () => {
    try {
        await connect("mongodb://localhost:27017/nodetypescript", options);
        
        connection.on("connected", () => {
            console.log("Connected to the database");
        });
        connection.on("disconnected", () => {
            console.log("Disconnected from the database");
        });
        connection.on("error", () => {
            console.log("An Error occured");
        });
        process.on("SIGINT", () => {
            connection.close(() => {
                console.log("Mongoose terminated. Process ended");
            });
            process.exit(0);
        });
        return 
    } catch (error) {
        console.error(error);
    }
};

export default launchDB;

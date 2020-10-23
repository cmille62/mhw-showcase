import Mongoose from "mongoose";
import { MONGO_URL } from "../utils";


Mongoose.Promise = global.Promise;

/**
 * Handles the connection to the MongoDB Database.
 * @param db the database name
 */
export const establishMongoDBConnection = async (db: string) => {
  try {
    await Mongoose.connect(`${MONGO_URL}/${db}`, {
      useNewUrlParser: true,
    });
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.error(`Count not connect to MongoDB at: ${MONGO_URL}/${db}`);
  }
};

export default establishMongoDBConnection;

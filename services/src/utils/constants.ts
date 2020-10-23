import dotenv from "dotenv";
dotenv.config();

const _port = process.env.PORT;
const _mongo_url = process.env.MONGO_URL;
const _mongo_db = process.env.MONGO_DB;

export const PORT = _port || 8080;

// MongoDB Variables -- 
export const MONGO_URL = _mongo_url || "mongodb://mongo:27017";
export const DB_NAME = _mongo_db || "showcasedb";

export const environment = {
  PORT,

  MONGO_URL,
  DB_NAME,
};

export default environment;

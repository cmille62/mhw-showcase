import dotenv from "dotenv";
dotenv.config();

const _port = process.env.PORT;
const _mongo_url = process.env.MONGO_URL;
const _mongo_db = process.env.MONGO_DB;

const _br_endpoint = process.env.BR_ENDPOINT;
const _br_username = process.env.BR_USERNAME;
const _br_password = process.env.BR_PASSWORD;
const _br_customer = process.env.BR_CUSTOMER;


export const PORT = parseInt(_port) || 8080;

// MongoDB Variables -- 
export const MONGO_URL = _mongo_url || "mongodb://mongo:27017";
export const DB_NAME = _mongo_db || "showcase";

// API Endpoints -- 
export const BR_ENDPOINT = _br_endpoint || "";
export const BR_USERNAME = _br_username || "";
export const BR_PASSWORD = _br_password || "";
export const BR_CUSTOMER = _br_customer || "";

export const environment = {
  PORT,

  MONGO_URL,
  DB_NAME,

  BR_ENDPOINT,
  BR_USERNAME,
  BR_PASSWORD,
  BR_CUSTOMER,
};

export default environment;

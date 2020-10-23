import express from "express";
import bodyParser from "body-parser";
import bodyParserXml from "body-parser-xml";
import cors from "cors";
import routes from "./routes";
import { establishMongoDBConnection } from "./db";
import { DB_NAME } from "./utils";

establishMongoDBConnection(DB_NAME);

const app = express().use("*", cors());

bodyParserXml(bodyParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("*", async (req: any, res: any, next: any) => {
  console.log("Accessing '" + req.hostname + "' At:  ", req.originalUrl);

  next();
});

app.use("/api", routes.router);

export const start = (port: number) => {
   app.listen(port);
};

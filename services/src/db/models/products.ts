import Mongoose from "mongoose";
import { ProductSchema } from "../schema";
import { ProductType } from "../types";


const schema = new Mongoose.Schema(ProductSchema, { collection: "products" });

export const Groups = Mongoose.model<ProductType>("products", schema);

export default Groups;

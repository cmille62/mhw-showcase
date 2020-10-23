import Mongoose from "mongoose";
import { ProductsSchema } from "../schema";
import { ProductsType } from "../types";


const schema = new Mongoose.Schema(ProductsSchema, { collection: "products" });

export const Products = Mongoose.model<ProductsType>("products", schema);

export default Products;

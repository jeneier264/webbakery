import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
    },
    picture: {
        type: String,
    },
})

const Product = models.Product || model("Product", ProductSchema);

export default Product;
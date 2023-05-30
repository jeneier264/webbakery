import { Schema, model, models } from "mongoose";

const BakewareSchema = new Schema({
    name: {
        type: String,
    },
    brand: {
        type: String,
    },
    link: {
        type: String,
    },
    picture: {
        type: String,
    },
})

const Bakeware = models.Bakeware || model("Bakeware", BakewareSchema);

export default Bakeware;
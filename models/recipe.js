import { Schema, model, models } from "mongoose";
import Bakeware from "./bakeware";

const RecipeSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  creatorName: String,
  recipe: String,
  tag: String,
  steps: {
    type: Array,
    default: [],
  },
  time: Number,
  servings: Number,
  products: {
    type: Array,
    default: [],
  },
  equipment: [{ type: Schema.Types.ObjectId, ref: "Bakeware" }],
  picture: String,
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;

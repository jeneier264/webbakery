import { Schema, model, models } from 'mongoose';

const RecipeSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
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
  equipment: {
    type: Array,
    default: [],
  },
  picture: String,
});

const Recipe = models.Recipe || model('Recipe', RecipeSchema);

export default Recipe;
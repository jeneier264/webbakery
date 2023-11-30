import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const recipe = await Recipe.findById(params.id).populate("equipment");

    return new Response(JSON.stringify(recipe), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { recipe, tag, steps, time, servings, products, equipment, picture } = await request.json();

  try {
    await connectToDB();

    // Find the existing recipe by ID
    const existingRecipe = await Recipe.findById(params.id);

    if (!existingRecipe) {
      return new Response("Recipe not found", { status: 404 });
    }

    // Update the recipe with new data
    if (existingRecipe.recipe !== recipe) existingRecipe.recipe = recipe;
    if (existingRecipe.steps !== steps) existingRecipe.steps = steps;
    if (existingRecipe.tag !== tag) existingRecipe.tag = tag;
    if (existingRecipe.time !== time) existingRecipe.time = time;
    if (existingRecipe.servings !== servings) existingRecipe.servings = servings;
    if (existingRecipe.products !== products) existingRecipe.products = products;
    if (existingRecipe.equipment !== equipment) existingRecipe.equipment = equipment;
    if (existingRecipe.picture !== picture) existingRecipe.picture = picture;

    await existingRecipe.save();

    return new Response("Successfully updated the recipes", { status: 200 });
  } catch (error) {
    return new Response("Error Updating recipe", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the recipe by ID and remove it
    await Recipe.findByIdAndRemove(params.id);

    return new Response("Recipe deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting recipe", { status: 500 });
  }
};

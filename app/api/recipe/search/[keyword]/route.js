import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  const keyword  = params.keyword;
  try {
    await connectToDB();

    const recipes = await Recipe.find({
        $or: [
            {tag: {$regex: new RegExp(keyword, 'i')}},
            {recipe: {$regex: new RegExp(keyword, 'i')}},
        ]
    });
    recipes.reverse();

    return new Response(JSON.stringify(recipes), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

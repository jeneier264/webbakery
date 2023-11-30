"use client";
import React from "react";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import { useRouter } from "next/navigation";

const RecipeCard = ({ recipe, feed=false }) => {
  const router = useRouter();
  return (
    <div className={feed ? "recipeCardWrap border-contrast1 text-contrast1" : "recipeCardWrap border-primary text-primary"}>
        <img
          src={recipe.picture}
          alt="recipe"
          className="object-cover w-[300px] h-[200px] rounded-t-3xl"
        />
      <div className="w-full flex flex-col justify-start p-4">
        <p className="font-sen font-bold text-[32px] ">
          {recipe.recipe}
        </p>
        <div className="flex flex-row gap-6"><p className="font-sen text-[12px]">{recipe.time} min</p>
        <p className="font-sen text-[12px]">
          {recipe.servings} servings
        </p></div>
        
      </div>

      <div className="flex flex-row w-full items-center justify-between p-4 ">
        <p className="font-sen text-[12px]">{recipe.tag}</p>
        <button onClick={() => router.push(`/recipe/${recipe._id}`)} className="transition ease-in-out delay-150 hover:scale-125">
          <DoubleArrowRoundedIcon sx={{ fontSize: 25 }} />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

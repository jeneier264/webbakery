'use client';
import React from "react";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import { useRouter } from "next/navigation";

const RecipeCard = ({ recipe }) => {
  const router = useRouter();
  return (
    <div className="p-2 w-[360px] rounded-3xl flex flex-col items-start bg-contrast4">
      <div className="w-full">
        <img
          src={recipe.picture}
          alt="profile"
          className="object-contain rounded-3xl p-3"
        />
      </div>

      <div className="w-full rounded-3xl items-start p-3">
        <p className="font-sen font-bold text-primary text-[32px]">
          {recipe.recipe}
        </p>
        <p className="font-sen text-primary text-[12px]">{recipe.time} min</p>
        <p className="font-sen text-primary text-[12px]">
          {recipe.servings} servings
        </p>
        <div className="flex flex-row w-full text-primary items-center justify-between">
          <p className="font-sen text-[12px]">{recipe.tag}</p>
          <button onClick={()=>router.push(`/recipe/${recipe._id}`)}><DoubleArrowRoundedIcon sx={{fontSize: 20}}/></button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

"use client";
import React from "react";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import { useRouter } from "next/navigation";

const RecipeCard = ({ recipe }) => {
  const router = useRouter();
  return (
    <div className="w-[300px] h-[370px] flex flex-col items-center rounded-3xl border border-primary ">
        <img
          src={recipe.picture}
          alt="profile"
          className="object-cover w-[300px] h-[200px] rounded-t-3xl"
        />
      <div className="w-full flex flex-col justify-start p-4">
        <p className="font-sen font-bold text-primary text-[32px] ">
          {recipe.recipe}
        </p>
        <p className="font-sen text-primary text-[12px]">{recipe.time} min</p>
        <p className="font-sen text-primary text-[12px]">
          {recipe.servings} servings
        </p>
      </div>

      <div className="flex flex-row w-full text-primary items-center justify-between p-4">
        <p className="font-sen text-[12px]">{recipe.tag}</p>
        <button onClick={() => router.push(`/recipe/${recipe._id}`)} className="transition ease-in-out delay-150 hover:scale-125">
          <DoubleArrowRoundedIcon sx={{ fontSize: 25 }} />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import wreath from "@public/assets/wreath2.png";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import RecipeCard from "./RecipeCard";

const Profile = ({ profilePic, name, recipes, isMyProfile = false }) => {
  const router = useRouter();

  return (
    <section>
      <div className="flex justify-between items-center w-[450px] p-8">
        <div className="flex justify-center items-center">
          <Image
            src={wreath}
            width={200}
            height={200}
            alt="profile"
            className="absolute z-0"
          />
          <Image
            src={profilePic}
            width={150}
            height={150}
            alt="profile"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-3 justify-between">
          <p className="font-sen text-[15px]">{name}</p>
          <p className="font-sen text-[12px]">{recipes.length} recipes</p>
          {isMyProfile && (
            <button
              className="flex justify-around px-4 py-2 bg-contrast1 rounded-full gap-3 items-center font-sen text-[13px] text-primary"
              onClick={() => router.push("/create-recipe")}
            >
              <p>create new recipe</p>{" "}
              <CreateRoundedIcon sx={{ fontSize: 20 }} />
            </button>
          )}
        </div>
      </div>
      <div className="mt-10 px-8 grid grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe}/>
        ))}
      </div>
    </section>
  );
};

export default Profile;

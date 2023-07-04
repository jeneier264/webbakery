"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import list from "@public/assets/list.png";
import wreath from "@public/assets/wreath2.png";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import RecipeCard from "./RecipeCard";

const Profile = ({
  profilePic,
  name,
  recipes,
  shopList,
  isMyProfile = false,
  setProduct,
}) => {
  const router = useRouter();
  const [section, setSection] = useState("posts");

  
  return (
    <section>
      <div className="flex justify-between items-center w-[450px] p-8">
        <div className="flex justify-center items-center">
          <Image
            src={wreath}
            width={160}
            height={160}
            alt="profile"
            className="absolute z-0"
          />
          <Image
            src={profilePic}
            width={120}
            height={120}
            alt="profile"
            className="rounded-full"
          />
        </div>

        <div className="flex w-[200px] flex-col gap-3 justify-between">
          <div className="flex w-full justify-between items-center">
            <p className="font-sen text-[15px]">{name}</p>
            {isMyProfile && (
              <button
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000/login" })
                }
              >
                <LogoutRoundedIcon sx={{ fontSize: 20 }} />
              </button>
            )}
          </div>
          <p className="font-sen text-[12px]">{recipes.length} recipes</p>
          {isMyProfile && (
            <button
              className="flex w-[180px] justify-around px-4 py-2 bg-contrast1 rounded-full gap-3 items-center font-sen text-[13px] text-primary"
              onClick={() => router.push("/create-recipe")}
            >
              <p>create new recipe</p>{" "}
              <CreateRoundedIcon sx={{ fontSize: 20 }} />
            </button>
          )}
        </div>
      </div>
      <div className="mt-10 flex w-full justify-between">
        {section === "posts" ? (
          <>
            <div className=" px-8 py-12 w-full bg-contrast4 flex justify-between z-10 shadow">
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full">
                {recipes.map((recipe) => (
                  <RecipeCard recipe={recipe} />
                ))}
              </div>
              <div className="writing-vertical hover:cursor-default">
                my posts
              </div>
            </div>
            <button
              onClick={() => setSection("list")}
              className="w-[50px] bg-constrast5 writing-vertical py-12 flex items-center transition ease-in-out delay-100 hover:-translate-x-3"
            >
              shopping list
            </button>
          </>
        ) : (
          <>
            <div className="w-full bg-constrast5 flex justify-between z-10 shadow">
              <div className="flex w-full justify-center items-start">
                <Image
                  src={list}
                  width={600}
                  alt="profile"
                  className="relative ml-4"
                />
                <div className="pt-20 absolute flex flex-col">
                  <p className="p-3 font-reem text-[22px]">My grocery list</p>
                  {shopList.map((item) => (
                    <div className="flex justify-start gap-6 items-center pb-1">
                      <button
                        className="text-contrast2"
                        onClick={() => {
                          if (!item.isChecked) {
                            setProduct({ ...item, isChecked: true });
                            item.isChecked = true;
                          } else {
                            setProduct({ ...item, isChecked: false });
                            item.isChecked = false;
                          }
                        }}
                      >
                        {item.isChecked ? (
                          <CheckCircleOutlineRoundedIcon sx={{ size: 15 }} />
                        ) : (
                          <PanoramaFishEyeRoundedIcon sx={{ size: 15 }} />
                        )}
                      </button>
                      <div className="flex gap-2 font-sen text-[15px]">
                        <p>{item.amount}</p>
                        <p>{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" px-8 py-12 writing-vertical hover:cursor-default">
                shopping list
              </div>
            </div>
            <button
              onClick={() => setSection("posts")}
              className="w-[50px] bg-contrast4 writing-vertical py-12 flex items-center transition ease-in-out delay-100 hover:-translate-x-3"
            >
              my posts
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Profile;

"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import list from "@public/assets/list.png";
import wreath from "@public/assets/wreath2.png";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
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
  const [isHover, setIsHover] = useState(-1);

  return (
    <section>
      <div className="flex sm:justify-start justify-center gap-6 items-center  w-auto py-8 px-4">
        <div className="flex justify-center items-center">
          <Image
            src={wreath}
            width={160}
            height={160}
            alt="profile"
            className="absolute z-0 sm:w-[160px] w-[120px] sm:h-[160px] h-[120px]"
          />
          <img
            src={profilePic}
            width={120}
            height={120}
            alt="profile"
            className="rounded-full sm:w-[120px] w-[90px] sm:h-[120px] h-[90px]"
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
              <div className="transition hover:-rotate-90">
                <CreateRoundedIcon sx={{ fontSize: 20 }} />
              </div>
            </button>
          )}
        </div>
      </div>

      <div className="mt-10 flex w-full justify-between sm:flex-row flex-col">
        {section === "posts" ? (
          <>
            {/* mobile screen bookmarks*/}
            <div className="sm:hidden flex flex-row gap-1">
              <div className="bookmark opened bg-contrast4">my posts</div>
              <button
                onClick={() => setSection("list")}
                className="bookmark closed bg-constrast5 hover:translate-y-2 duration-300"
              >
                <ChecklistRoundedIcon />
              </button>
            </div>

            <div className={isMyProfile ? "px-8 py-12 w-full bg-contrast4 flex justify-between z-10 sm:rounded-l-3xl" : "px-8 py-12 w-full bg-contrast4 flex justify-between z-10 sm:rounded-3xl"}>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-8 py-8 w-full">
                {recipes.map((recipe) => (
                  <RecipeCard recipe={recipe} />
                ))}
              </div>
              {/* descktop screen sections */}
              <div className="sm:flex writing-vertical hidden hover:cursor-default font-sen text-primary ">
                {isMyProfile ? "my posts" : "posts"}
              </div>
            </div>
            {isMyProfile && (
              <button
                onClick={() => setSection("list")}
                className="w-[50px] bg-constrast5 sm:rounded-r-3xl py-12 sm:flex hidden justify-center transition ease-in-out delay-100 hover:-translate-x-3 "
              >
                <p className="writing-vertical text-primary">shopping list</p>
              </button>
            )}
          </>
        ) : (
          <>
            {/* mobile screen bookmarks */}
            <div className="sm:hidden flex flex-row gap-1">
              <button
                onClick={() => setSection("posts")}
                className="bookmark closed  bg-contrast4 hover:translate-y-2 duration-300"
              >
                <MenuBookRoundedIcon />
              </button>
              {isMyProfile && (
                <div
                  onClick={() => setSection("list")}
                  className="bookmark opened bg-constrast5 "
                >
                  shopping list
                </div>
              )}
            </div>
            {/* desktop screnn sections */}
            <div className="w-full bg-constrast5 flex justify-between z-10 sm:rounded-l-3xl">
              <div className="flex w-full justify-center items-start">
                <Image
                  src={list}
                  width={600}
                  alt="profile"
                  className="relative ml-4"
                />
                <div className="pt-20 absolute flex flex-col">
                  <p className="p-3 font-reem text-[22px]">My grocery list</p>
                  {shopList.map(
                    (item, index) =>
                      !item.toBeDeleted && (
                        <div
                          className="flex w-full justify-start gap-6 items-center pb-1"
                          onMouseOver={() => setIsHover(index)}
                        >
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
                              <CheckCircleOutlineRoundedIcon
                                sx={{ size: 15 }}
                              />
                            ) : (
                              <PanoramaFishEyeRoundedIcon sx={{ size: 15 }} />
                            )}
                          </button>
                          <div className="flex gap-2 font-sen text-[15px]">
                            <p>{item.amount}</p>
                            <p>{item.name}</p>
                          </div>
                          {isHover === index && (
                            <button
                              className="text-contrast2"
                              onClick={() =>
                                setProduct({ ...item, toBeDeleted: true })
                              }
                            >
                              <DeleteOutlineRoundedIcon sx={{ size: 15 }} />
                            </button>
                          )}
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className="sm:flex hidden px-8 py-12 writing-vertical hover:cursor-default text-primary">
                shopping list
              </div>
            </div>
            <button
              onClick={() => setSection("posts")}
              className="sm:flex hidden w-[50px] bg-contrast4 sm:rounded-r-3xl justify-center py-12 transition ease-in-out delay-100 hover:-translate-x-3"
            >
              <p className="writing-vertical text-primary">my posts</p>
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Profile;

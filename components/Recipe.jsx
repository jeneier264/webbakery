"use client";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Print from "./Print";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

const Recipe = ({ recipe, isAuthor = false, handleDelete, handleEdit }) => {
  const [tags, setTags] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <div className=" flex items-center gap-6">
      <button
        className="text-contrast2 font-sen"
        onClick={() => handleDelete(true)}
      >
        Delete
      </button>
      <button onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </button>
    </div>
  );

  useEffect(() => {
    if (recipe) {
      setTags(recipe.tag.split(" "));
      setIngredients(recipe.products);
      setInstructions(recipe.steps);
      setEquipment(recipe.equipment);
    }
  }, [recipe]);

  return (
    <section className="w-full bg-primary">
      <div className="hidden">
        <Print
          recipe={recipe?.recipe}
          picture={recipe?.picture}
          creatorName={recipe?.creatorName}
          time={recipe?.time}
          servings={recipe?.servings}
          steps={recipe?.steps}
          products={recipe?.products}
          ref={componentRef}
        />
      </div>
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={handleClose}
          message="Are you sure you want to delete the post?"
          action={action}
        />
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-between sm:gap-x-3 gap-y-4 sm:px-3 py-14">
        <div className="flex w-full justify-center ">
          {recipe ? (
            <img src={recipe?.picture} alt="recipe" className=" w-[500px]" />
          ) : (
            <div className="w-[500px] h-[360px] bg-white animate-pulse"></div>
          )}
        </div>
        <div className="flex flex-col items-center w-full gap-y-1 justify-center ">
          <p className="font-sen text-contrast1 max-[380px]:text-[30px] text-[40px] font-bold">
            {recipe?.recipe}
          </p>
          <div className="flex justify-between gap-x-4 font-sen text-black text-[13px]">
            <p>{`time: ${recipe ? recipe.time : "0"} min`}</p>
            <p>{`servings: ${recipe ? recipe.servings : "0"}`}</p>
          </div>
          <div className="flex font-sen text-black text-[13px]">
            {tags.length > 0 &&
              tags.map((tag) => (
                <a
                  onClick={() => router.push(`/feed/${tag.replace("#", "")}`)}
                  className="px-2 cursor-pointer hover:text-contrast2"
                >
                  {tag}
                </a>
              ))}
          </div>
          <div className="flex font-sen text-black text-[13px] justify-self-end">
            <div className="flex flex-row">
              {recipe && (
                <p>
                  by{" "}
                  <span
                    onClick={() =>
                      router.push(
                        isAuthor ? `/profile` : `/profile/${recipe.creator}`
                      )
                    }
                    className="cursor-pointer hover:text-contrast2"
                  >
                    {recipe && recipe.creatorName}
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between text-black gap-x-4">
            {isAuthor && (
              <>
                <button
                  className="transition duration-300 ease-in-out hover:scale-110"
                  onClick={() => handleEdit()}
                >
                  <ModeEditOutlineRoundedIcon style={{ fontSize: 22 }} />
                </button>
                <button
                  className="transition duration-300 ease-in-out hover:scale-110"
                  onClick={() => handleClick()}
                >
                  <DeleteRoundedIcon style={{ fontSize: 22 }} />
                </button>
              </>
            )}
            <button
              className="transition duration-300 ease-in-out hover:scale-110"
              onClick={() => handlePrint()}
            >
              <LocalPrintshopRoundedIcon style={{ fontSize: 22 }} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-[50px]">
        <div className="flex w-full justify-between gap-20 p-8 sm:flex-row flex-col">
          <div classname="flex w-[200px]">
            <h1 className="font-reem text-contrast3 text-[20px]">
              Ingredients
            </h1>
            <ul>
              {ingredients?.map((item) => (
                <li className="font-sen text-[14px] py-1">
                  {item.count !== undefined && item.measure === undefined
                    ? `${item.count}   ${item.name}`
                    : item.count !== undefined && item.measure !== undefined
                    ? `${item.count}   ${item.measure}   ${item.name}`
                    : `${item.name}`}
                </li>
              ))}
            </ul>
          </div>
          <div classname="flex">
            <h1 className="font-reem text-contrast2 text-[20px]">
              {" "}
              Instructions
            </h1>
            {instructions?.map(
              (item, index) =>
                item !== "" && (
                  <div className="flex flex-row w-full gap-3 py-1">
                    <div className="border border-black rounded-full w-[20px] h-[20px] p-2 text-[12px] flex items-center justify-center font-sen">
                      {index + 1}
                    </div>
                    <p className="font-sen text-[14px]">{item}</p>
                  </div>
                )
            )}
          </div>
        </div>
        {equipment && (
          <div className="flex flex-col w-full justify-between gap-20 p-8">
            <h1 className="font-reem text-contrast1 text-[20px]">Equipment</h1>
            <div className="w-full flex overflow-x-auto sm:justify-center gap-12">
              {equipment.map((item) => (
                <div className="flex flex-col justify-center items-center w-[200px] ">
                  <a target="_blank" rel="noreferrer" href={item.link}>
                    <div className=" w-[150px] transition duration-300 ease-in-out hover:translate-y-6">
                      <img
                        className=" object-contain"
                        src={item.picture}
                        alt="bakeware"
                      />
                    </div>
                  </a>
                  <h1 className="text-[15px] font-sen pt-4">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Recipe;

"use client";
import { forwardRef } from "react";

const Print = forwardRef((props, ref) => {
  const { recipe, picture, creatorName, time, servings, steps, products } =
    props;
  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-between sm:gap-x-3 gap-y-4 sm:px-3 py-14"
    >
      <div className="flex w-full flex-row justify-around">
        <div className="flex flex-col items-center gap-y-1 justify-center ">
          <p className="font-sen text-[30px] font-bold">{recipe}</p>
          <div className="flex justify-between gap-x-4 font-sen  text-[13px]">
            <p>{`time: ${time} min`}</p>
            <p>{`servings: ${servings}`}</p>
          </div>
          <div className="flex font-sen  text-[13px] justify-self-end">
            <p>{`by ${creatorName}`}</p>
          </div>
          <div className="flex w-full justify-center ">
            <img src={picture} alt="recipe" className=" w-[200px]" />
          </div>
        </div>
        <div classname="flex">
            <h1 className="font-reem  text-[20px]">Ingredients</h1>
            <ul>
              {products?.map((item) => (
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
      </div>

      <div className="flex flex-colrounded-[50px]">
        <div className="flex w-full justify-between gap-20 p-8 sm:flex-row flex-col">
          <div classname="flex">
            <h1 className="font-reem text-[20px]"> Instructions</h1>
            {steps?.map(
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
      </div>
    </section>
  );
});

export default Print;

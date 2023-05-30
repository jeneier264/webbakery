"use client";
import { useState, useEffect } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";


const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [steps, setSteps] = useState([""]);
  const [products, setProducts] = useState([{}]);
  const [dropdown, setDropdown] = useState(-1);
  const [measurment, setMeasurment] = useState("");
  const measurments = ["", "cup", "tsp", "tbsp", "gr", "ml"];
  const [allBakeware, setAllBakeware] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [file, setFile] = useState(null);

  const fetchBakeware = async () => {
    const response = await fetch("/api/bakeware");
    const data = await response.json();

    setAllBakeware(data);
  };

  const handleAddSteps = () => {
    setSteps((prevValues) => [...prevValues, ""]);
  };

  const handleRemoveInput = (index, array, setArray) => {
    setArray((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues.splice(index, 1);
      return updatedValues;
    });
  };

  const handleStepsChange = (index, value) => {
    setSteps((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value;
      return updatedValues;
    });
    setPost({ ...post, steps: steps });
  };

  const handleAddProducts = () => {
    setProducts((prevValues) => [...prevValues, {}]);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };

  useEffect(() => {
    fetchBakeware();
  }, []);

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setPost({ ...post, picture: result });
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  useEffect(() => {
    if (equipment.length > 1) setPost({...post, equipment: equipment})
  }, [equipment]);

  useEffect(() => {
    if (products.length > 1) setPost({...post, products: products})
  }, [products]);

  return (
    <section className="w-full">
      <div className="font-sen text-contrast1 text-[45px] px-12 py-2">
        {type} recipe
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around pt-20 pb-12">
          <div className="flex flex-col">
            <div>
              <label for="recipe" className="logLabel">
                Recipe name
              </label>
              <input
              required
                className="logInput"
                name="recipe"
                onChange={(e) => setPost({ ...post, recipe: e.target.value })}
              />
            </div>
            <div>
              <label for="tag" className="logLabel">
                Tag(s)
              </label>
              <input
                className="logInput"
                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                type="text"
                name="tag"
              />
            </div>
            <label className="logLabel py-2">
              <p className="pb-2">Picture</p>
              <input
                type="file"
                hidden
                accept=".png, .jpg, .jpeg"
                onChange={handleFile}
              />
              <div className="flex justify-center">
                {post.picture ? (
                  <img
                    src={post.picture}
                    alt=""
                    className="rounded pb-2 cursor-pointer h-[210px] hover:scale-110 duration-300"
                  />
                ) : (
                  <div className="w-full h-11  rounded flex items-center justify-center border border-black border-dashed cursor-pointer">
                    <span>Select Image</span>
                  </div>
                )}
              </div>
            </label>

            <div>
              <div className="flex justify-between">
                <label className="logLabel">Steps</label>
                <button type="button" onClick={handleAddSteps}>
                  <AddRoundedIcon />
                </button>
              </div>
              {steps.map((value, index) => (
                <div className="flex items-center relative pb-3" key={index}>
                  <p className="absolute font-sen text-[13px]">{index + 1}</p>
                  <textarea
                    className="logInput"
                    onChange={(event) =>
                      handleStepsChange(index, event.target.value)
                    }
                    value={value}
                    rows={1}
                  />
                  {index !== 0 && (
                    <button
                      className="absolute right-0 mb-1"
                      type="button"
                      onClick={() => handleRemoveInput(index, steps, setSteps)}
                    >
                      <RemoveRoundedIcon />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col  w- 1/2">
            <div className="flex flex-row gap-4">
              <div>
                <label for="time" className="logLabel">
                  Time
                </label>
                <div className="flex items-center relative pb-3">
                  <input
                    type="number"
                    className="logInput2"
                    value={post.time}
                    name="time"
                    onChange={(e) => setPost({ ...post, time: e.target.value })}
                  />
                  <p className="absolute right-2 mb-1 font-sen text-[13px]">
                    min
                  </p>
                </div>
              </div>
              <div>
                <label for="servings" className="logLabel">
                  Servings
                </label>
                <div className="flex items-center relative pb-3">
                  <input
                    type="number"
                    className="logInput2"
                    value={post.servings}
                    name="servings"
                    onChange={(e) =>
                      setPost({ ...post, servings: e.target.value })
                    }
                  />
                  <p className="absolute right-2 mb-1 font-sen text-[13px]">
                    pcs
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <label for="ingidients" className="logLabel">
                  Ingridients
                </label>
                <button type="button" onClick={handleAddProducts}>
                  <AddRoundedIcon />
                </button>
              </div>
              {products.map((value, index) => (
                <div className="flex relative py-2">
                  <input
                    className="w-[60px] font-sen text-[15px] px-4 py-2 mb-3 text-neutral-800 bg-transparent border-b border-r border-black  focus:outline-none"
                    onChange={(e) => {
                      let arr = [...products];
                      arr[index].count = e.target.value;
                      setProducts(arr);
                    }}
                    type="number"
                  />
                  <div className="flex items-center relative ">
                    <input
                      className="w-[110px] font-sen text-[15px] px-4 py-2 mb-3 text-neutral-800 bg-transparent border-b border-r border-black  focus:outline-none"
                      type="button"
                      value={value.measure}
                    />
                    <button
                      type="button"
                      onClick={() => setDropdown(dropdown === -1 ? index : -1)}
                      className="absolute right-1 mb-3 hover:animate-bounce "
                    >
                      {dropdown === index ? (
                        <ArrowDropUpRoundedIcon />
                      ) : (
                        <ArrowDropDownRoundedIcon />
                      )}
                    </button>
                    {dropdown === index && (
                      <div className="dropdownProd">
                        {measurments.map((option) => (
                          <button
                            onClick={() => {
                              setMeasurment(option);
                              setDropdown(false);
                              let arr = [...products];
                              arr[index].measure = option;
                              setProducts(arr);
                            }}
                            className="font-sen text-[15px]"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    className="logInput"
                    onChange={(e) => {
                      let arr = [...products];
                      arr[index].name = e.target.value;
                      setProducts(arr);
                    }}
                    type="text"
                  />
                  {index !== 0 && (
                    <button
                      className="absolute right-0 mb-1"
                      type="button"
                      onClick={() =>
                        handleRemoveInput(index, products, setProducts)
                      }
                    >
                      <RemoveRoundedIcon />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="relative">
              <label for="equipment" className="logLabel">
                Equipment
              </label>
              <div className="w-full grid grid-cols-3 gap-2 py-4">
                {equipment.map((tool, index) => (
                  <div className="flex justify-between p-1 bg-transparent border items-center border-black">
                    <p className="font-sen text-[13px] pr-2">{tool.name}</p>
                    <button
                      type="button"
                      className="pb-1"
                      onClick={() =>
                        handleRemoveInput(index, equipment, setEquipment)
                      }
                    >
                      <CloseRoundedIcon sx={{ fontSize: 20 }} />
                    </button>
                  </div>
                ))}
              </div>
              <input
                className="logInput"
                name="equipment"
                //onChange={(e) => setPost({ ...post, recipe: e.target.value })}
                placeholder="Add quipment"
              />
              <button
                type="button"
                onClick={() => setDropdown(dropdown === -1 ? -2 : -1)}
                className="absolute right-1 mb-3 hover:animate-bounce "
              >
                {dropdown === -2 ? (
                  <ArrowDropUpRoundedIcon />
                ) : (
                  <ArrowDropDownRoundedIcon />
                )}
              </button>
              {dropdown === -2 && (
                <div className="dropdownEquip">
                  {allBakeware.map((option) => (
                    <button
                      type="button"
                      onClick={() => {setEquipment([...equipment, option]);}}
                      className="font-sen text-[15px]"
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-32 px-12 items-center">
          <Link href="/profile" className="font-sen text-[15px]">
            cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="font-sen text-[15px] rounded-3xl bg-contrast2 text-primary px-4 py-2"
          >
            {submitting ? "creating..." : "create"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

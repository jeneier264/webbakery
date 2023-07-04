"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";


const ProductCard = ({ item, index, setProduct, list, setSnackbar }) => {
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);
  const {data: session} = useSession();

  const handleMouseOver = (i) => {
    setIsHovering(i);
  };

  const handleMouseOut = () => {
    setIsHovering(-1);
  };

  const handleIncrement = () => {
    if(added) setAdded(!added);
    setCount(count+1);
  };

  const handleDecrement = () => {
    if(added) setAdded(!added);
    setCount(count>1 ? count-1 : count);
  };

  const handleAddItem = (i) => {
    if (session) {setAdded(!added);
    if (!added) {
      setProduct({
        name: i.name,
        amount: count,
        isChecked: false,
      });
    } else {
      setCount(1);
      setProduct({ name: i.name, amount: 0,  isChecked: false,});
    }} else {
      setSnackbar(true)
    }
    
  };

 

  useEffect(() => {
    if (list) {
      const addedItem = list.find((el) => el.name === item.name);
      if(addedItem) {
        setAdded(!added)
        setCount(addedItem.amount);
      }
    }
  }, [list]);
  

  return (
    <div
      className="productWidget"
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={handleMouseOut}
    >
      <div className="flex justify-center border-b border-contrast1 p-6">
        <img
          className="w-[200px] h-[200px] object-contain"
          alt="tool"
          src={item.picture}
        />
      </div>
      <div className="flex flex-row justify-between py-4 text-contrast1 font-sen text-[15px] items-center">
        <p>{item.name}</p>
        {isHovering === index ? (
          <>
            <div className="addCount">
              <button
                onClick={() => handleDecrement()}
              >
                <RemoveRoundedIcon />
              </button>
              <p>{count}</p>
              <button onClick={() => handleIncrement()}>
                <AddRoundedIcon />
              </button>
            </div>

            <button
              className="animate-bounce"
              onClick={() => handleAddItem(item)}
            >
              {added ? (
                <ShoppingBasketRoundedIcon />
              ) : (
                <ShoppingBasketOutlinedIcon />
              )}
            </button>
          </>
        ) : (
          <button className="addButton">add to shopping list</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

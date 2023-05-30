'use client';
import { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const ProductCard = ({ item, index }) => {
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);

  const handleMouseOver = (i) => {
    setIsHovering(i);
  };

  const handleMouseOut = () => {
    setIsHovering(-1);
  };

  return (
    <div className="productWidget" onMouseOver={() => handleMouseOver(index)}
    onMouseOut={handleMouseOut}>
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
              <button onClick={() => {count > 1 && setCount(count - 1)}}>
                <RemoveRoundedIcon />
              </button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>
                <AddRoundedIcon />
              </button>
            </div>

            <button className="animate-bounce" onClick={()=>setAdded(!added)}>
              {added ? <ShoppingBasketRoundedIcon /> : <ShoppingBasketOutlinedIcon/>}
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

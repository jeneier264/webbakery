import React from "react";

const Dropdown = ({ options, setOption, setDropdown }) => {
  return (
    <div className="dropdown2">
        {options.map((option) => (
          <button onClick={()=>{setOption(option); setDropdown(false)}} className="font-sen text-[15px]">{option}</button>
        ))}
    </div>
  );
};

export default Dropdown;

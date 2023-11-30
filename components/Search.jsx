"use client";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = ({keyword}) => {
  const [query, setQuery] = useState(keyword);
  const router = useRouter();

  const handleInput = (event) => {
    setQuery(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // Check if the key pressed is the enter key (key code 13)
      router.push(`/feed/${query}`)

    }
  };

  return (
    <div className="sm:pt-0 pt-10 sm:px-0 px-6 w-full">
      <div className="relative">
        <i className="absolute pt-2.5 pl-4">
          <SearchRoundedIcon sx={{ color: "#e5e5e5" }} />
        </i>
        <input
          type="text"
          value={query}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          className="searchbar"
          placeholder="enter dish name..."
        />
      </div>
    </div>
  );
};

export default Search;

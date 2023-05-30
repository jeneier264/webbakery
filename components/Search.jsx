'use client';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = () => {
    return (
    <div className="w-full sm:pt-0 pt-10">
        <div className='relative'>
            <i className='absolute pt-2.5 pl-4'><SearchRoundedIcon sx={{color: "#e5e5e5"}}/></i>
          <input type="text" className="bg-white h-12 w-full px-12 rounded-full focus:outline-none font-sen text-[15px] placeholder-disabled" placeholder="enter dish name..." />
        </div>
    </div>
    );
};

export default Search;
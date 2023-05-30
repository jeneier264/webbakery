'use client';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

const BakewareCard = ({ item }) => {
  return (
    <div className="bakewareWidget">
      <div className="flex justify-center border-b border-contrast1 p-6">
        <img
          className="w-[200px] h-[200px] object-contain"
          alt="tool"
          src={item.picture}
        />
      </div>
      <div className="flex flex-col py-4 text-contrast1 font-sen text-[15px]">
        <p className="pb-2">{item.name}</p>
        <div className="flex flex-row justify-between">
          <p className="font-bold">{item.brand}</p>
          <a target="_blank" rel="noreferrer" href={item.link} className="hover:underline">
            learn more <ArrowRightRoundedIcon/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BakewareCard;

import facebook from "@public/assets/facebook.png";
import youtube from "@public/assets/youtube.png";
import instagram from "@public/assets/instagram.png";
import Image from "next/image";

const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: youtube,
    link: "https://www.youtube.com/",
  },
];

const Foot = () => {
  return (
    <footer className="flex flex-row justify-center h-[90px] w-full p-6 items-center top-full">
      <div className="flex-col pr-2">
        <h1 className="footer">follow us</h1>
      </div>
      <div className="flex flex-row">
        {socialMedia.map((social, index) => (
            <a target="_blank" href={social.link} rel="noopener noreferrer"><Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[18px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            /></a>
      
        ))}
      </div>
    </footer>
  );
};

export default Foot;

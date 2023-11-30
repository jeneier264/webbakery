import Image from "next/image";
import "@styles/globals.css";
import Search from "@components/Search";
import cakes from "/public/assets/cakes.png";
import cooking2 from "/public/assets/cooking2.jpg";



const Home = () => {

  
  return (
    <section className="flex justify-around items-center sm:flex-row flex-col">
      <div className="pt-[190px] w-80 h-[500px] sm:flex hidden justify-center">
        <Image src={cakes} alt="cakes" className="object-contain"/>
      </div>
      <div className="flex flex-col sm:pt-[200px] pt-20 sm:h-full h-[350px] items-center">
        <h1 className="title">baking starts here</h1>
        <Search keyword={''}/>
      </div>
      <div className="w-80 sm:hidden flex justify-center">  
        <Image src={cakes} alt="cakes" className="object-contain"/>
      </div>
      <div className=" w-80 sm:flex hidden justify-center ">
        <Image
          src={cooking2}
          alt="cook"
          className="w-72 rounded-t-full object-contain outline outline-1 outline-offset-8 outline-contrast2"
        />
      </div>
    </section>
  );
};

export default Home;

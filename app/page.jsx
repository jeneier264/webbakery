import Image from 'next/image';
import "@styles/globals.css";
import Search from '@components/Search'
import cakes from "@public/assets/cakes.png";
import cooking2 from "@public/assets/cooking2.jpg"

const Home = () => {
  return (
    <section className="flex justify-around items-center">
        <div className="pt-[190px] w-80 sm:flex hidden justify-center">
          <Image src={cakes} alt='cakes'/>
        </div>
        <div className="flex flex-col sm:w-1/3 sm:p-0 p-20 sm:h-full h-[450px] items-center w-full">
          <h1 className="title">baking starts here</h1>
          <Search />
        </div>
        <div className=" w-80 sm:flex hidden justify-center ">
          <Image
            src={cooking2}
            alt="cook"
            className="w-72 rounded-t-full outline outline-1 outline-offset-8 outline-contrast2"
          />
        </div>
      </section>
  )
}

export default Home

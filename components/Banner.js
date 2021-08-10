import Image from "next/image";
import Header from "../components/Header";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h=[550px]">
      <Image
        src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold text-black">
          Not sure where to go? Perfect.
        </p>
        <button className=" text-red-400 bg-gray-200 px-7 py-3 shadow-md rounded-full font-bold cursor-pointer my-3 hover:shadow-xl active:scale-90 transition duration-150 outline-none">
          Iam flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;

import Description from "@/components/Description Box/Description";
import Rating from "@/components/Description Box/Rating";
import Footer from "@/components/Footer/Footer";
import MovieCard from "@/components/Footer/MovieCard/MovieCard";
import Navbar from "@/components/Navbar/Navbar";
import Title from "@/components/Title/Title";
import Pagination from "@/components/pagination/Pagination";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* HEWADER */}
      <div
        className=" items-center h-[300px]  xl:h-[600px] w-full  mx-auto  border-black  bg-cover bg-no-repeat px-2"
        style={{
          backgroundImage: `url('/poster.png')`,
        }}
      >
        <Navbar />
        <div className="hidden sm:flex items-center justify-between mx-4 pt-5">
          <div className="xl:ps-14 xl:pt-14">
            <Description />
          </div>
          <Pagination />
        </div>
      </div>
      {/* FEATURED MOVIE */}
      <Title />
      <div className="grid text-black mx-14 my-3">
        <div className="grid grid-cols-4 justify-center">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}

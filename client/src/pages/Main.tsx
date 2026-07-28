import HeroImage from "../assets/hero.png";
import { MoveRight } from "lucide-react";
import ProductCard from "../components/ProductCard";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <header
        className="bg-cover flex flex-col justify-center  ps-5 bg-center w-[80%] rounded-2xl "
        style={{
          height: "500px",
          width: "1200px",
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="w-[100] flex flex-col justify-center gap-y-2.5">
          <h1 className="text-5xl text-amber-50 flex flex-col gap-y-2 font-bold ">
            Delicious Coffee
            <span className="text-secondary">delivered to you</span>
          </h1>
          <p className="w-65">
            Order your favorite meals & drinks from{" "}
            <span className="font-semibold text-[#b08ee0]">BrewCafe</span>
          </p>
          <button className="flex justify-center w-38 px-2 py-2 my-2 bg-secondary text-gray-950 font-bold rounded cursor-pointer">
            Order Now <MoveRight style={{ paddingLeft: "5px" }} />
          </button>
        </div>
      </header>
      <main className="bg-cover flex flex-col w-screen ps-5 mx-3 my-5">
        <h1 className="text-2xl font-bold text-text">Popular Items</h1>
        <div className="cards grid grid-cols-1 sm:grid:cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-3 mx-2">
          <ProductCard
            imageUrl="https://i.pinimg.com/1200x/d3/32/fd/d332fd633190b268c74c5ffe21ab98bb.jpg"
            title="Cappuccino"
            price="19$"
          />
          <ProductCard
            imageUrl="https://i.pinimg.com/736x/29/3e/e5/293ee5df6bcbbb54d8bdf7960c5444d0.jpg"
            title="Cheesecake aux fraises"
            price="19$"
          />
          <ProductCard
            imageUrl="https://i.pinimg.com/1200x/30/29/3f/30293f670a7fb51be8ad92b05bf0a566.jpg"
            title="vanilla cake "
            price="19$"
          />
          <ProductCard
            imageUrl="https://i.pinimg.com/1200x/bd/de/a0/bddea0e4dbe2f7a9cffa8cab5194cb74.jpg"
            title="Ice Latte"
            price="19$"
          />
          <ProductCard
            imageUrl="https://i.pinimg.com/1200x/d3/32/fd/d332fd633190b268c74c5ffe21ab98bb.jpg"
            title="Cappuccino"
            price="19$"
          />
          <ProductCard
            imageUrl="https://i.pinimg.com/1200x/d3/32/fd/d332fd633190b268c74c5ffe21ab98bb.jpg"
            title="Cappuccino"
            price="19$"
          />
          <ProductCard
            imageUrl="https://i.pinimg.com/1200x/d3/32/fd/d332fd633190b268c74c5ffe21ab98bb.jpg"
            title="Cappuccino"
            price="19$"
          />
        </div>
      </main>
    </div>
  );
};

export default Main;

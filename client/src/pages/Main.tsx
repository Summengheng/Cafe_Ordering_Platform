import HeroImage from "../assets/hero.png";
import { MoveRight } from "lucide-react";
import CafeCard from "../components/cards/CafeCard";
import CategoryCard from "../components/cards/CategoryCard";
import DownloadApp from "../assets/downloadApp.png";
import DownloadAppImage from "../assets/DownloadAppImage.png";
import PartnerWithUs from "../components/cards/PartnerWithUs";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <header
        className="bg-cover flex flex-col justify-center ps-5 bg-center w-[80%] rounded-2xl "
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
        <section>
          <h2 className="text-2xl font-bold text-text py-3">
            Up to 40% 🎉 BrewCafe Exclusive Deals
          </h2>
          <div className="cards grid grid-cols-1 sm:grid:cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 my-5 mx-3 pr-6">
            <CafeCard
              backgroundImage="https://i.pinimg.com/1200x/9e/56/0c/9e560cdb73ae2abfd80577e093f8335b.jpg"
              discount={40}
              title="Ice Latte"
            />
            <CafeCard
              backgroundImage="https://i.pinimg.com/736x/6f/e1/11/6fe111d94ca6ab10e81c9bd96328a82d.jpg"
              discount={20}
              title="Iced Cappuccino"
            />
            <CafeCard
              backgroundImage="https://i.pinimg.com/1200x/fb/1a/bd/fb1abd544695ba287a2837701256a875.jpg"
              discount={17}
              title="Hot Latte"
            />
          </div>
        </section>
        <section className="my-3">
          <h2 className="text-2xl font-bold text-text py-3">
            BrewCafe Popular Categories ☕
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 mx-3 my-2 pr-6">
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg"
              title="Espresso Based"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/1200x/e1/b2/45/e1b245b8a12e75b61252f24719ec52ad.jpg"
              title="Brewed Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg"
              title="Flavored Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/1200x/11/19/d0/1119d0d1a77a798abfab1844a76bffdb.jpg"
              title="Seasonal Coffee"
            />
            <CategoryCard
              backgroundImage="https://i.pinimg.com/736x/67/93/3b/67933bd8c89f48f5588c716b430c581f.jpg"
              title="Milk-Based Coffee"
            />
          </div>
        </section>
        <section className="w-full flex justify-center py-16 px-4">
          <div className="max-w-6xl w-full rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
            {/* Left Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={DownloadApp}
                alt="Download App"
                className="h-112.5 object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 p-10">
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                📱 Mobile App
              </span>

              <h2 className="text-5xl font-bold text-white mt-5 leading-tight">
                Ordering Coffee Has Never Been
                <span className="text-secondary block">Faster & Smarter</span>
              </h2>

              <p className="text-gray-400 mt-5 text-lg max-w-md">
                Skip the queue and order your favorite coffee in seconds.
                Personalized recommendations, instant checkout and real-time
                order tracking.
              </p>
              {/* Store Buttons */}
              <div className="mt-8">
                <img
                  src={DownloadAppImage}
                  alt="Store Buttons"
                  className="w-72 hover:scale-105 transition"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 py-2 justify-center">
          <PartnerWithUs
            backgroundImage="https://i.pinimg.com/1200x/cf/83/2c/cf832c4acc6260622273deec59f78599.jpg"
            title="Signup as a business"
            heading="Partner With Us"
            headerText="Earn More with lower fees"
            redirectLink="#"
          />
          <PartnerWithUs
            backgroundImage="https://i.pinimg.com/1200x/ff/49/87/ff4987a55aad2d8865d1147988d74a39.jpg"
            title="Signup as a rider"
            heading="Ride With Us"
            headerText="Avail exclusive perks"
            redirectLink="#"
          />
        </section>
      </main>
    </div>
  );
};

export default Main;

import HeroImage from "../assets/hero.png";
import { MoveRight } from "lucide-react";
import DownloadApp from "../assets/downloadApp.png";
import DownloadAppImage from "../assets/DownloadAppImage.png";
import { useState } from "react";
import {
  FrequentQuestion,
  HelpSupport,
  PartnerProgram,
  WhoWeAre,
} from "../components/tabs/index";
import { cafes, Categories, stats, tabs } from "../data/Main";
import {
  CafeCard,
  CategoryCard,
  PartnerWithUs,
} from "../components/cards/index";

const Main = () => {
  const [activeTabs, setActiveTabs] = useState<string>("faq");

  return (
    <div className="flex flex-col justify-center items-center">
      <header
        className="
          bg-cover bg-center
          flex flex-col justify-center
          ps-5 sm:ps-8 md:ps-10
          w-full max-w-[1200px]
          h-[400px] sm:h-[450px] md:h-[500px]
          rounded-2xl
          mx-auto
        "
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div className="w-full flex flex-col justify-center gap-y-2.5">
          <h1
            className="
        text-3xl sm:text-4xl md:text-5xl
        text-amber-50
        flex flex-col gap-y-1 sm:gap-y-2
        font-bold
      "
          >
            Delicious Coffee
            <span className="text-secondary">delivered to you</span>
          </h1>

          <p className="w-full max-w-[320px] text-sm sm:text-base">
            Order your favorite meals & drinks from{" "}
            <span className="font-semibold text-[#b08ee0]">BrewCafe</span>
          </p>

          <button
            className="
        flex justify-center items-center
        w-fit
        px-4 py-2
        my-2
        bg-secondary
        text-gray-950
        font-bold
        rounded
        cursor-pointer
      "
          >
            Order Now
            <MoveRight className="ml-1" />
          </button>
        </div>
      </header>
      <main className="bg-cover flex flex-col w-screen ps-5 mx-3 my-5">
        <section>
          <h2 className="text-2xl font-bold text-text py-3">
            Up to 40% 🎉 BrewCafe Exclusive Deals
          </h2>
          <div className="cards grid grid-cols-1 sm:grid:cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 my-5 mx-3 pr-6">
            {cafes.map((category) => {
              return (
                <CafeCard
                  backgroundImage={category.backgroundImage}
                  discount={category.discount}
                  title={category.title}
                />
              );
            })}
          </div>
        </section>
        <section className="my-3">
          <h2 className="text-2xl font-bold text-text py-3">
            BrewCafe Popular Categories ☕
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 mx-3 my-2 pr-6">
            {Categories.map((category) => {
              return (
                <CategoryCard
                  backgroundImage={category.backgroundImage}
                  title={category.title}
                />
              );
            })}
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
        <section>
          {/* Header + Tabs */}
          <div className="flex flex-col gap-4 px-3 py-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Know More About Us!
            </h2>

            {/* Tabs */}
            <ul className="flex w-full gap-2 overflow-x-auto pb-1 md:w-auto md:gap-3">
              {tabs.map((obj) => {
                return (
                  <button
                    key={obj.id}
                    className={`about_us_section_link shrink-0 whitespace-nowrap ${
                      activeTabs === obj.id
                        ? "rounded-full border border-secondary"
                        : ""
                    }`}
                    onClick={() => setActiveTabs(obj.id)}
                  >
                    {obj.label}
                  </button>
                );
              })}
            </ul>
          </div>

          {/* Content */}
          <div className="mx-3 rounded-xl bg-gray-900/50 p-4 shadow-md sm:mx-5 sm:p-6 md:me-8 md:p-8">
            {activeTabs === "faq" && <FrequentQuestion />}
            {activeTabs === "who" && <WhoWeAre />}
            {activeTabs === "partner" && <PartnerProgram />}
            {activeTabs === "support" && <HelpSupport />}
          </div>
        </section>
        <section>
          <div className="proof_card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`p-6 transition-all duration-300 ease-in-out hover:cursor-pointer  ${index % 2 === 0 ? "bg-gray-900/30 text-white hover:bg-gray-900/70" : "bg-white/80 text-gray-900 hover:bg-white"}`}
              >
                <h2 className="count">{item.count}</h2>
                <p className="title">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;

import { Link } from "react-router";
const Restaurant = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold italic text-amber-800">
        Restaurant Page
      </h1>
      <p className="flex flex-row">
        <Link to={"/restaurant"} className="px-2">
          restaurant
        </Link>
        <Link to={"/ordering"} className="px-2">
          ordering
        </Link>
      </p>
    </div>
  );
};

export default Restaurant;

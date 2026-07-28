interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
}

const ProductCard = ({ imageUrl, title, price }: ProductCardProps) => {
  return (
    <div className="w-45 h-auto rounded-xl flex flex-col bg-[#0C0C12]">
      {/* image */}
      <img
        src={imageUrl}
        alt="Thumbnail Image"
        style={{
          height: "135px",
          backgroundPosition: "center",
          objectFit: "cover",
          objectPosition: "center",
        }}
        className="rounded-t-xl rounded-b w-full"
      />
      {/* title */}
      <h3 className="pt-2 font-semibold ps-3">{title}</h3>
      {/* Price and Add Button */}
      <div className="flex justify-between items-center px-3 mb-2">
        <p>{price}</p>
        <button className="py-1 px-2.5 bg-gray-600/25 rounded text-secondary font-semibold">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

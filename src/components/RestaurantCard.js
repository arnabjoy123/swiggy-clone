const RestaurantCard = ({ resData }) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="m-4 p-4 w-60 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg h-60"
        alt="biryani"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
      />
      <div className="font-bold py-3 text-lg">{resData.info.name}</div>
      <div>{resData.info.cuisines.join(", ")}</div>
      <div>{resData.info.rating}</div>
      <div>{resData.info.costForTwo}</div>
      <div>{resData.info.avgRating}</div>
    </div>
  );
};

export const OfferRest = (RestaurantCard) => {
  return ({ resData }) => {
    return (
      <>
        <label className="absolute bg-black rounded-lg text-white p-1">
          {resData.info.aggregatedDiscountInfoV3?.header || "No Header"}-
          {resData.info.aggregatedDiscountInfoV3?.subHeader || "No SubHeader"}
        </label>
        <RestaurantCard resData={resData} />
      </>
    );
  };
};

export default RestaurantCard;

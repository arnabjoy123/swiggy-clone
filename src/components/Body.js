import RestaurantCard, { OfferRest } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import mockData from "./../utils/mockResListData.json";
const Body = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filtData, setFiltData] = useState([]);
  const status = useOnlineStatus();

  const RestNew = OfferRest(RestaurantCard);

  console.log(originalData);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        console.error("HTTP error:", response.status);
        return;
      }
      const text = await response.text();

      const jsond = JSON.parse(text);
      const restaurants =
        jsond?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setOriginalData(restaurants);
      setFiltData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function sortingFuncDesc() {
    const sortedData = [...originalData].sort(
      (a, b) => a.info.avgRating - b.info.avgRating
    );
    setFiltData(sortedData);
  }

  function sortingFuncAsc() {
    const sortedData = [...originalData].sort(
      (a, b) => b.info.avgRating - a.info.avgRating
    );
    setFiltData(sortedData);
  }

  function relevFunc() {
    setFiltData(originalData);
  }

  function searchFunc(value) {
    const key = value;
    const filteredData = originalData.filter((el) => {
      return el.info.name.toLowerCase().includes(key.toLowerCase());
    });
    setFiltData(filteredData);
  }

  if (!status) {
    return <>YOu are not online!!!!!</>;
  }

  return (
    <div className="body">
      <div className="search m-4 p-4">
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-md hover:bg-sky-100"
          onClick={() => sortingFuncDesc()}
        >
          Ratings Low-High
        </button>
        <button
          className="px-4 py-2 bg-green-100 m-4  rounded-md hover:bg-sky-100 "
          onClick={() => sortingFuncAsc()}
        >
          Ratings High-Low
        </button>
        <button
          className="px-4 py-2 bg-green-100 m-4  rounded-md hover:bg-sky-100"
          onClick={() => relevFunc()}
        >
          Relevance
        </button>
        <input
          type="text"
          placeholder="Search item"
          onChange={(e) => searchFunc(e.target.value)}
          className="border border-black rounded-md"
        />
      </div>
      <div className="flex flex-wrap">
        {filtData.length === 0 ? (
          <Shimmer />
        ) : (
          filtData.map((el, index) => (
            <Link key={el.info.id} to={"/restaurants/" + el.info.id}>
              {el.info.aggregatedDiscountInfoV3 ? (
                <RestNew resData={el} />
              ) : (
                <RestaurantCard resData={el} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

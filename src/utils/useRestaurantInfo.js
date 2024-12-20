import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const useRestaurantInfo = ({ resId }) => {
  const [itemss, setItemss] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const menu = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      console.log(resId);
      const menudata = await menu.json();
      console.log(menudata);

      const cards =
        menudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const targetCard = cards?.find((card) => card?.card?.card?.itemCards);

      const data = targetCard?.card?.card?.itemCards;

      console.log("Heya", data);
      setItemss(data);
    } catch (error) {
      console.log(error);
    }
  };

  return itemss;
};

export default useRestaurantInfo;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
  const [items, setItems] = useState([]);
  const { resId } = useParams();
  const itemss = useRestaurantInfo({ resId });
  console.log("resId from useParams:", resId);

  useEffect(() => {
    setItems(itemss);
    console.log(items);
  }, [itemss]);

  return (
    <div className="menu text-center">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        {items.map((el) => (
          <li key={el.card.info.id}>{el.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

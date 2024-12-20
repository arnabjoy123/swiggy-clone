import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtname] = useState("Log Out");
  const status = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 p-2">
      <div>
        <img
          className="h-20 rounded-lg"
          alt="foodpik"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo-restaurant-logo-design-template-cc731b4f2a5005f5716bec573cbeaf1d_screen.jpg?ts=1708326033"
        />
      </div>
      <div className="flex  items-center">
        <ul className="flex">
          <li>Online status:{status ? "🟢" : "🔴"} </li>
          <li className=" px-5">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" px-5">
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <li className=" px-5">Cart</li>
          <li className=" px-5">
            <button
              className="login"
              onClick={() =>
                btnName === "Login" ? setBtname("Log Out") : setBtname("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

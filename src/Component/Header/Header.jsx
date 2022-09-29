import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../../Hook/StateProvider";
import { Link } from "react-router-dom";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { auth } from "../../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header flex">
      <Link to={!user && "/login"}>
        <img
          className="w-30 h-30 "
          src="https://api.iconify.design/logos:airbrake.svg?color=%23888888"
        />
      </Link>
      <PlaceOutlinedIcon />
      <div className="flex flex-col ">
        <span>Deliver to</span>
        <span>Vietnam</span>
      </div>
      <div className="flex bg-red-100">
        <select id="pet-select">
          <option value="">All</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <input type="text" className="header__searchInput" />
        <SearchIcon class="w-30 h-30 bg-yellow-400" />
      </div>
      <div className="header__nav">
        <Link to="./login">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">Hello,{user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

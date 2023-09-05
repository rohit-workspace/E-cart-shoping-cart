import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import "./navbar.css";
import { ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { filterProduct } = useContext(ShopContext);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div className="navbar">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            filterProduct(searchQuery);
          }}
        >
          <input
            className="input"
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      </div>

      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

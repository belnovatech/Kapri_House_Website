import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

import logo from "../assets/Kaprilogo.webp";

import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiX,
} from "react-icons/fi";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* LEFT LOGO + NAME */}

      <div
        className="brand-section"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img
          src={logo}
          alt="Kapri House"
          className="header-logo"
        />

        {/* <h2 className="brand-name">
          Kapri<span></span> House
        </h2> */}
      </div>

      {/* RIGHT ICONS */}

      <div className="header-icons">
        <button
          className="icon-btn"
          onClick={() => setShowSearch(!showSearch)}
        >
          <FiSearch />
        </button>

        <button className="icon-btn">
          <FiHeart />
        </button>

        <button className="icon-btn carty-btn">
          <FiShoppingCart />
          <span className="cart-count">3</span>
        </button>
      </div>

      {/* SEARCH POPUP */}

      {showSearch && (
        <div className="search-popup">
          <input
            type="text"
            placeholder="Search products..."
            autoFocus
          />

          <button
            className="close-search"
            onClick={() => setShowSearch(false)}
          >
            <FiX />
          </button>
        </div>
      )}
    </header>
  );
}
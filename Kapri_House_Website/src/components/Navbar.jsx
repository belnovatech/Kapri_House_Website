import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "NEW ARRIVALS", path: "/new-arrivals" },
    { name: "DRESSES", path: "/dresses" },
    { name: "SUIT SETS", path: "/suit-sets" },
    { name: "KURTA SETS", path: "/kurta-sets" },
    // { name: "DRESSES", path: "/dresses" },
    { name: "SAREES", path: "/sarees" },
    { name: "NiGHT WEAR", path: "/menswear" },
    // { name: "HOME LINEN", path: "/home-linen" },
    { name: "BEST SELLERS", path: "/sale" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar">
        {menu.map((item) => (
          <Link key={item.name} to={item.path} className="nav-item">
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Header */}
      <div className="mobile-navbar">
        <button
          className="hamburger-btn"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>

        <span className="mobile-logo"></span>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>

          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="mobile-nav-item"
            onClick={() => setOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {open && (
        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
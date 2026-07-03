import "../styles/Dresses.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import dressesBanner from "../assets/dresses.webp";

import d1 from "../assets/ek1.jpg";
import d2 from "../assets/ek2.jpg";
import d3 from "../assets/ek3.jpg";
import d4 from "../assets/ek4.jpg";
import d5 from "../assets/ek5.jpg";
import d6 from "../assets/ek6.jpg";

const products = [
  { id: 1, name: "Yellow Cotton Dress", categories: ["New Arrivals"], mrp: 4500, price: 3800, discount: "20% OFF", image: d1, color: "#e3bc1f" },
  { id: 2, name: "Lime  Frill Dress", categories: ["Casual Dresses"], mrp: 4550, price: 3999, discount: "12% OFF", image: d2, color: "#9fa5a794" },
  { id: 3, name: "White Embroidered Dress", categories: ["Embroidered"], mrp: 3350, price: 3350, discount: "", image: d3, color: "#ffffff" },
  { id: 4, name: "Blue Floral Dress", categories: ["Floral Dresses"], mrp: 2700, price: 2499, discount: "7% OFF", image: d4, color: "#0000ff" },
  { id: 5, name: " Puff Sleeve Dress", categories: ["Party Wear"], mrp: 3200, price: 2799, discount: "15% OFF", image: d5, color: "#ffffff" },
  { id: 6, name: "Green Chiffon Dress", categories: ["Casual Dresses"], mrp: 3900, price: 2999, discount: "23% OFF", image: d6, color: "#6b8e6b" },
];

const categories = ["New Arrivals", "Casual Dresses", "Party Wear", "Floral Dresses", "Embroidered"];
const colors     = ["#fff","#e3bc1f","#6b8e6b","#0000ff","#9fa5a794"];
const sizes      = ["XS","S","M","L","XL","XXL"];

// Same bucketed price-range logic as Sarees / KurtaSets / Night Suits
const priceRanges = [
  { label: "Under ₹1,000", min: 0, max: 999 },
  { label: "₹1,000 - ₹1,499", min: 1000, max: 1499 },
  { label: "₹1,500 - ₹1,999", min: 1500, max: 1999 },
  { label: "₹2,000 - ₹2,499", min: 2000, max: 2499 },
  { label: "₹2,500 - ₹2,999", min: 2500, max: 2999 },
  { label: "₹3,000 - ₹3,999", min: 3000, max: 3999 },
  { label: "₹4,000 & Above", min: 4000, max: Infinity },
];

// Normalize hex so "#fff" and "#ffffff" (any case) compare equal
function normalizeHex(hex) {
  if (!hex) return hex;
  let h = hex.toLowerCase().replace("#", "");
  if (h.length === 3) {
    h = h.split("").map(ch => ch + ch).join("");
  }
  return "#" + h;
}

export default function Dresses() {
  const navigate = useNavigate();

  const [selectedColor,      setSelectedColor]      = useState(null);
  const [selectedSize,       setSelectedSize]       = useState(null);
  const [selectedCategory,   setSelectedCategory]   = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy,             setSortBy]             = useState("featured");
  const [filterOpen,         setFilterOpen]         = useState(true);

  const sorted = [...products]
    .filter(p => !selectedCategory || p.categories.includes(selectedCategory))
    .filter(p => !selectedColor || normalizeHex(p.color) === normalizeHex(selectedColor))
    .filter(p => !selectedSize || sizes.includes(selectedSize)) // sizes are global, kept for parity
    .filter(p =>
      !selectedPriceRange ||
      (p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max)
    )
    .sort((a, b) => {
      if (sortBy === "price-asc")  return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "discount")   return parseInt(b.discount || 0) - parseInt(a.discount || 0);
      return a.id - b.id;
    });

  return (
    <div className="dr-page">

      <div className="dr-breadcrumb">
        <span>Home</span> › <span>Dresses</span>
      </div>

      <img src={dressesBanner} alt="Dresses" className="dr-banner" />

      <div className="dr-toolbar">
        <button className="dr-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="dr-count">{sorted.length} Products</span>
        <div className="dr-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="dr-body">

        {filterOpen && (
          <aside className="dr-sidebar">

            <div className="dr-filter-group">
              <h4>CATEGORY</h4>
              {categories.map(cat => (
                <label key={cat} className="dr-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="dr-filter-group">
              <h4>PRICE</h4>
              <div className="dr-price-list">
                {priceRanges.map((range) => (
                  <label key={range.label} className="dr-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedPriceRange?.label === range.label}
                      onChange={() =>
                        setSelectedPriceRange(
                          selectedPriceRange?.label === range.label ? null : range
                        )
                      }
                    />
                    {range.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="dr-filter-group">
              <h4>COLOR</h4>
              <div className="dr-colors">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    className={`dr-color-dot ${normalizeHex(selectedColor) === normalizeHex(c) ? "active" : ""}`}
                    style={{ background: c, border: c === "#fff" ? "1px solid #ccc" : "none" }}
                    onClick={() => setSelectedColor(selectedColor === c ? null : c)}
                  />
                ))}
              </div>
            </div>

            <div className="dr-filter-group">
              <h4>SIZE</h4>
              <div className="dr-sizes">
                {sizes.map(s => (
                  <button
                    key={s}
                    className={`dr-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        )}

        <div className={`dr-grid ${filterOpen ? "" : "dr-grid--full"}`}>
          {sorted.length === 0 ? (
            <div className="dr-no-products">
              <h2>No Dresses Found</h2>
              <p>Try changing your filters.</p>
            </div>
          ) : (
            sorted.map(product => (
              <div
                className="dr-card"
                key={product.id}
                onClick={() =>
                  navigate("/product-details", {
                    state: product,
                  })
                }
              >
                <div className="dr-img-wrap">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="dr-info">
                  <div className="dr-stars">★★★★★</div>
                  <h4>{product.name}</h4>
                  <div className="dr-price">
                    <span className="dr-mrp">₹{product.mrp.toLocaleString()}</span>
                    <span className="dr-current">₹{product.price.toLocaleString()}</span>
                    {product.discount && (
                      <span className="dr-off">({product.discount})</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
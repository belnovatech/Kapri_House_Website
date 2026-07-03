import "../styles/ComingSoon.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ns1 from "../assets/nss1.webp";
import ns2 from "../assets/nss2.webp";
import ns3 from "../assets/ns3.webp";
import ns4 from "../assets/nss4.webp";
import ns5 from "../assets/nss5.webp";
import ns6 from "../assets/nss6.webp";
import ns7 from "../assets/nss7.webp";
import ns8 from "../assets/nss8.webp";
import ns9 from "../assets/nss9.webp";
import ns10 from "../assets/nss10.webp";
import ns11 from "../assets/ns11.webp";
import ns12 from "../assets/ns12.webp";
import ns13 from "../assets/ns13.webp";
import ns14 from "../assets/eee.webp";
import ns15 from "../assets/ns15.webp";
import ns16 from "../assets/ns16.webp";
import nightSuitBanner from "../assets/banban.jpg"; // replace with a proper banner image later

const products = [
  // ---------- NIGHTIES ----------
  {
    id: 1,
    name: "Floral Printed Nighty",
    category: "Nighties",
    color: "#020557",
    sizes: ["S", "M", "L"],
    mrp: 1999,
    price: 1399,
    discount: "30% OFF",
    image: ns1,
  },
  {
    id: 2,
    name: "Cotton Full Length Nighty",
    category: "Nighties",
    color: "#2d1703",
    sizes: ["M", "L", "XL"],
    mrp: 1799,
    price: 1249,
    discount: "31% OFF",
    image: ns2,
  },
  {
    id: 3,
    name: "Abony Night Gown",
    category: "Nighties",
    color: "#000",
    sizes: ["S", "M", "L"],
    mrp: 2200,
    price: 1499,
    discount: "32% OFF",
    image: ns3,
  },
  {
    id: 4,
    name: "Embroidered Sleeveless Nighty",
    category: "Nighties",
    color: "#800080",
    sizes: ["M", "L", "XL"],
    mrp: 2100,
    price: 1449,
    discount: "31% OFF",
    image: ns4,
  },

  // ---------- PYJAMAS ----------
  {
    id: 5,
    name: "Cotton Modal Pyjama Set",
    category: "Pyjamas",
    color: "#0ead48",
    sizes: ["S", "M", "L"],
    mrp: 2499,
    price: 1699,
    discount: "32% OFF",
    image: ns5,
  },
  {
    id: 6,
    name: "Soft Touch Printed Pyjama Set",
    category: "Pyjamas",
    color: "#e8c9a0",
    sizes: ["M", "L", "XL"],
    mrp: 2999,
    price: 1999,
    discount: "33% OFF",
    image: ns6,
  },
  {
    id: 7,
    name: "Striped Cotton Pyjama Set",
    category: "Pyjamas",
    color: "#7d4e06",
    sizes: ["M", "L"],
    mrp: 1999,
    price: 1399,
    discount: "30% OFF",
    image: ns7,
  },
  {
    id: 8,
    name: "Checked Flannel Pyjama Set",
    category: "Pyjamas",
    color: "#fff",
    sizes: ["S", "M", "L", "XL"],
    mrp: 2300,
    price: 1599,
    discount: "30% OFF",
    image: ns8,
  },

  // ---------- NIGHT SUITS ----------
  {
    id: 9,
    name: "Rayon Night Suit Set",
    category: "Night Suits",
    color: "#87ceeb",
    sizes: ["S", "M", "L", "XL"],
    mrp: 2600,
    price: 1799,
    discount: "31% OFF",
    image: ns9,
  },
  {
    id: 10,
    name: "Solid Satin Night Suit",
    category: "Night Suits",
    color: "#fff",
    sizes: ["M", "L"],
    mrp: 3200,
    price: 2199,
    discount: "31% OFF",
    image: ns10,
  },
  {
    id: 11,
    name: "Printed Rayon Night Suit",
    category: "Night Suits",
    color: "#020557",
    sizes: ["S", "M", "L"],
    mrp: 2400,
    price: 1599,
    discount: "33% OFF",
    image: ns11,
  },
  {
    id: 12,
    name: "Cotton Blend Night Suit",
    category: "Night Suits",
    color: "#e8c9a0",
    sizes: ["M", "L", "XL"],
    mrp: 2100,
    price: 1499,
    discount: "29% OFF",
    image: ns12,
  },

  // ---------- LOUNGE PANTS ----------
  {
    id: 13,
    name: "Striped Lounge Pants",
    category: "Lounge Pants",
    color: "#fff",
    sizes: ["S", "M", "L", "XL"],
    mrp: 1499,
    price: 999,
    discount: "33% OFF",
    image: ns13,
  },
  {
    id: 14,
    name: "Cotton Solid Lounge Pants",
    category: "Lounge Pants",
    color: "#e77cb5",
    sizes: ["M", "L", "XL"],
    mrp: 1399,
    price: 949,
    discount: "32% OFF",
    image: ns14,
  },
  {
    id: 15,
    name: "Printed Rayon Lounge Pants",
    category: "Lounge Pants",
    color: "#87ceeb",
    sizes: ["S", "M", "L"],
    mrp: 1599,
    price: 1099,
    discount: "31% OFF",
    image: ns15,
  },
  {
    id: 16,
    name: "Checked Flannel Lounge Pants",
    category: "Lounge Pants",
    color: "#000",
    sizes: ["M", "L", "XL"],
    mrp: 1699,
    price: 1149,
    discount: "32% OFF",
    image: ns16,
  },
];

const categories = ["Nighties", "Pyjamas", "Night Suits", "Lounge Pants"];
const colors = [
  { id: 1, name: "White", hex: "#fff" },
  { id: 2, name: "Black", hex: "#000" },
  { id: 3, name: "Beige", hex: "#e8c9a0" },
  { id: 4, name: "Brown", hex: "#2d1703" },
  { id: 5, name: "Pink", hex: "#e77cb5" },
  { id: 6, name: "Purple", hex: "#800080" },
  { id: 7, name: "Orange", hex: "#020557" },
  { id: 8, name: "Sky Blue", hex: "#87ceeb" },
  { id: 9, name: "Dark Blue", hex: "#0ead48" },
  { id: 10, name: "Teal", hex: "#7d4e06" },
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

// Same bucketed price-range logic as Sarees / KurtaSets
const priceRanges = [
  { label: "Under ₹1,000", min: 0, max: 999 },
  { label: "₹1,000 - ₹1,499", min: 1000, max: 1499 },
  { label: "₹1,500 - ₹1,999", min: 1500, max: 1999 },
  { label: "₹2,000 - ₹2,499", min: 2000, max: 2499 },
  { label: "₹2,500 & Above", min: 2500, max: Infinity },
];

export default function NightSuits() {
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(true);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = !selectedCategory || product.category === selectedCategory;
    const colorMatch = !selectedColor || product.color === selectedColor;
    const sizeMatch = !selectedSize || product.sizes.includes(selectedSize);
    const priceMatch =
      !selectedPriceRange ||
      (product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max);
    return categoryMatch && colorMatch && sizeMatch && priceMatch;
  });

  const sorted = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "discount") return parseInt(b.discount) - parseInt(a.discount);
    return a.id - b.id;
  });

  return (
    <div className="ns-page">
      <div className="ns-breadcrumb">
        <span>Home</span> › <span>Night Suits</span>
      </div>

      <img src={nightSuitBanner} alt="Night Suits" className="ns-banner" />

      <div className="ns-toolbar">
        <button className="ns-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="ns-count">{sorted.length} Products</span>
        <div className="ns-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="ns-body">
        {filterOpen && (
          <aside className="ns-sidebar">
            <div className="ns-filter-group">
              <h4>CATEGORY</h4>
              {categories.map((cat) => (
                <label key={cat} className="ns-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="ns-filter-group">
              <h4>PRICE</h4>
              <div className="ns-price-list">
                {priceRanges.map((range) => (
                  <label key={range.label} className="ns-checkbox">
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

            <div className="ns-filter-group">
              <h4>COLOR</h4>
              <div className="ns-colors">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    className={`ns-color-dot ${selectedColor === color.hex ? "active" : ""}`}
                    style={{
                      background: color.hex,
                      border: color.hex === "#fff" ? "1px solid #ccc" : "none",
                    }}
                    onClick={() => setSelectedColor(selectedColor === color.hex ? null : color.hex)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="ns-filter-group">
              <h4>SIZE</h4>
              <div className="ns-sizes">
                {sizes.map((s) => (
                  <button
                    key={s}
                    className={`ns-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        )}

        <div className={`ns-grid ${filterOpen ? "" : "ns-grid--full"}`}>
          {sorted.length === 0 ? (
            <div className="ns-no-products">
              <h2>No Night Suits Found</h2>
              <p>Try changing your filters.</p>
            </div>
          ) : (
            sorted.map((product) => (
              <div
                className="ns-card"
                key={product.id}
                onClick={() => navigate("/product-details", { state: product })}
              >
                <div className="ns-img-wrap">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="ns-info">
                  <div className="ns-stars">★★★★★</div>
                  <h4>{product.name}</h4>
                  <div className="ns-price">
                    <span className="ns-mrp">₹{product.mrp.toLocaleString()}</span>
                    <span className="ns-current">₹{product.price.toLocaleString()}</span>
                    <span className="ns-off">({product.discount})</span>
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
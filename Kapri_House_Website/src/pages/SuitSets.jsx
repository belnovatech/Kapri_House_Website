import "../styles/SuitSets.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import suitBanner from "../assets/suit-banner.webp";

import s1 from "../assets/suit1.jpg";
import s2 from "../assets/suit2.jpg";
import s3 from "../assets/suit3.jpg";
import s4 from "../assets/suit4.jpg";
import s5 from "../assets/suit5.jpg";
import s6 from "../assets/suit6.jpg";
import s7 from "../assets/suit7.jpg";
import s8 from "../assets/suit8.jpg";
import s9 from "../assets/suit9.jpg";

// import FilterSidebar from "./FilterSidebar";

const products = [
  {
    id: 101,
    image: s1,
    title: "Elegant Floral Suit Set",
    category: "Floral",
    color: "#800080", // Pink
    sizes: ["M", "L", "XL"],
    mrp: 3999,
    price: 2999,
    discount: "25% OFF",
  },
  {
    id: 102,
    image: s2,
    title: "Party Wear Suit Set",
    category: "Party Wear",
    color: "#ffb6c1", // Pink
    sizes: ["S", "M", "L"],
    mrp: 4499,
    price: 3499,
    discount: "22% OFF",
  },
  {
    id: 103,
    image: s3,
    title: "Designer Anarkali Suit Set",
    category: "Anarkali",
    color: "#000080", // Purple
    sizes: ["M", "L", "XL"],
    mrp: 4999,
    price: 3899,
    discount: "20% OFF",
  },
  {
    id: 104,
    image: s4,
    title: "Festive Embroidered Suit Set",
    category: "Embroidered",
    color: "#d58e0b", // Gold
    sizes: ["M", "L"],
    mrp: 3599,
    price: 2799,
    discount: "22% OFF",
  },
  {
    id: 105,
    image: s5,
    title: "Straight Cut Suit Set",
    category: "Straight",
    color: "#87ceeb", // Green
    sizes: ["L", "XL"],
    mrp: 4200,
    price: 3299,
    discount: "21% OFF",
  },
  {
    id: 106,
    image: s6,
    title: "Premium Silk Suit Set",
    category: "Silk",
    color: "#dc143c", // Red
    sizes: ["S", "M", "L"],
    mrp: 3800,
    price: 2899,
    discount: "24% OFF",
  },
  {
    id: 107,
    image: s7,
    title: "Pastel Party Wear Suit Set",
    category: "Party Wear",
    color: "#ffd700", // Peach
    sizes: ["M", "L"],
    mrp: 4500,
    price: 3499,
    discount: "22% OFF",
  },
  {
    id: 108,
    image: s8,
    title: "Traditional Ethnic Suit Set",
    category: "Ethnic",
    color: "#000000", // Black
    sizes: ["M", "L", "XL"],
    mrp: 3999,
    price: 2999,
    discount: "25% OFF",
  },
  {
    id: 109,
    image: s9,
    title: "Luxury Occasion Suit Set",
    category: "Luxury",
    color: "#79c3a9", // Navy Blue
    sizes: ["L", "XL"],
    mrp: 5200,
    price: 3999,
    discount: "23% OFF",
  },
];
const categories = [
  "Floral",
  // "Printed",
  "Anarkali",
  "Embroidered",
  "Straight",
  "Silk",
  "Party Wear",
  "Ethnic",
  "Luxury",
];
const colors = [
  "#ffb6c1", // Pink
  "#87ceeb", // Sky Blue
  "#800080", // Purple
  "#ffd700", // Gold
  "#79c3a9", // Green
  // "#ffffff", // White
  // "#ffdab9", // Peach
  "#dc143c", // Red
  "#000080", // Navy
  "#000000", // Black
  // "#FFFF00", // Grey
  "#d58e0b", // Orange
  // "#8b4513", // Brown
];
const sizes = ["S", "M", "L", "XL"];

// Same bucketed price-range logic as Sarees / KurtaSets / Night Suits / Dresses
const priceRanges = [
  { label: "Under ₹3,000", min: 0, max: 2999 },
  { label: "₹3,000 - ₹3,499", min: 3000, max: 3499 },
  { label: "₹3,500 - ₹3,999", min: 3500, max: 3999 },
  { label: "₹4,000 & Above", min: 4000, max: Infinity },
];

export default function SuitSets() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory ||
      product.category === selectedCategory;

    const colorMatch =
      !selectedColor ||
      product.color === selectedColor;

    const sizeMatch =
      !selectedSize ||
      product.sizes.includes(selectedSize);

    const priceMatch =
      !selectedPriceRange ||
      (product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max);

    return (
      categoryMatch &&
      colorMatch &&
      sizeMatch &&
      priceMatch
    );
  });
  const navigate = useNavigate();

  return (
    <div className="suit-page">

      <img
        src={suitBanner}
        alt="Suit Banner"
        className="suit-banner"
      />

      <div className="breadcrumb">
        Home / Suit Sets
      </div>

      <h1 className="suit-title">
        SUIT SETS
      </h1>
<div className="sr-toolbar">
<button
  className="sr-filter-btn"
  onClick={() => setFilterOpen(!filterOpen)}
>
  ☰ FILTER
</button>
</div>
      <div className="suit-layout">
  {filterOpen && (      
<aside className="sr-sidebar">

  <div className="sr-filter-group">
    <h4>CATEGORY</h4>

    {categories.map((cat) => (
      <label key={cat} className="sr-checkbox">
        <input
          type="checkbox"
          checked={selectedCategory === cat}
          onChange={() =>
            setSelectedCategory(
              selectedCategory === cat ? null : cat
            )
          }
        />
        {cat}
      </label>
    ))}
  </div>

  <div className="sr-filter-group">
    <h4>PRICE</h4>

    <div className="sr-price-list">
      {priceRanges.map((range) => (
        <label key={range.label} className="sr-checkbox">
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

  <div className="sr-filter-group">
    <h4>COLOR</h4>

    <div className="sr-colors">
      {colors.map((c) => (
        <button
          key={c}
          className={`sr-color-dot ${
            selectedColor === c ? "active" : ""
          }`}
          style={{
            background: c,
            border:
              c === "#ffffff"
                ? "1px solid #ccc"
                : "none",
          }}
          onClick={() =>
            setSelectedColor(
              selectedColor === c ? null : c
            )
          }
        />
      ))}
    </div>
  </div>

  <div className="sr-filter-group">
    <h4>SIZE</h4>

    <div className="sr-sizes">
      {sizes.map((s) => (
        <button
          key={s}
          className={`sr-size-btn ${
            selectedSize === s ? "active" : ""
          }`}
          onClick={() =>
            setSelectedSize(
              selectedSize === s ? null : s
            )
          }
        >
          {s}
        </button>
      ))}
    </div>
  </div>

</aside>
)}
        {/* <FilterSidebar /> */}

        <div className="product-grid">

         {filteredProducts.length === 0 ? (
           <div className="sr-no-products">
             <h2>No Suit Sets Found</h2>
             <p>Try changing your filters.</p>
           </div>
         ) : (
          filteredProducts.map((item) => (
            <div
              className="suit-card"
              key={item.id}
              onClick={() =>
                navigate("/product-details", {
                  state: item,
                })
              }
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <h4>{item.title}</h4>

 <div className="price">
  <span className="mrp">
    ₹{item.mrp}
  </span>

  <span className="sale-price">
    ₹{item.price}
  </span>

  <span className="offer-badge">
    {item.discount}
  </span>
</div>

            </div>
          ))
         )}

        </div>

      </div>

    </div>
  );
}
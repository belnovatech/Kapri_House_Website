import "../styles/KurtaSets.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import kurtaBanner from "../assets/kurta-banner.webp";

import k1 from "../assets/kurta1.jpg";
import k2 from "../assets/kurta2.jpg";
import k3 from "../assets/kurta3.jpg";
import k4 from "../assets/kurta4.jpg";
import k5 from "../assets/kurta5.jpg";
import k6 from "../assets/kurta6.jpg";
import k7 from "../assets/kurta7.jpg";
import k8 from "../assets/kurta8.jpg";
import k9 from "../assets/kurta9.jpg";
// import FilterSidebar from "./FilterSidebar";

const products = [
  {
    id: 1,
    image: k1,
    title: "Pink Floral Kurta Set",
    category: "Floral",
    color: "#800000",
    sizes: ["M", "L", "XL"],
    mrp: 3999,
    price: 2999,
    discount: "25% OFF",
  },
  {
    id: 2,
    image: k2,
    title: "Yellow Printed Kurta Set",
    category: "Printed",
    color: "#ffd700",
    sizes: ["S", "M", "L"],
    mrp: 4500,
    price: 3499,
    discount: "22% OFF",
  },
  {
    id: 3,
    image: k3,
    title: "Pink Embroidered Kurta Set",
    category: "Embroidered",
    color: "#ff69b4",
    sizes: ["M", "L", "XL"],
    mrp: 4999,
    price: 3899,
    discount: "20% OFF",
  },
  {
    id: 4,
    image: k4,
    title: "Straight Kurta Set",
    category: "Straight",
    color: "#ffdab9",
    sizes: ["M", "L"],
    mrp: 3599,
    price: 2799,
    discount: "22% OFF",
  },
  {
    id: 5,
    image: k5,
    title: "ClassicKurta Set",
    category: "NewArrivals",
    color: "#87ceeb",
    sizes: ["L", "XL"],
    mrp: 4200,
    price: 3299,
    discount: "21% OFF",
  },
  {
    id: 6,
    image: k6,
    title: "Maroon Printed Kurta Set",
    category: "Printed",
    color: "#800000",
    sizes: ["S", "M", "L"],
    mrp: 3800,
    price: 2899,
    discount: "24% OFF",
  },
  {
    id: 7,
    image: k7,
    title: "Peach Floral Kurta Set",
    category: "Floral",
    color: "#800000",
    sizes: ["M", "L"],
    mrp: 4500,
    price: 3499,
    discount: "22% OFF",
  },
  {
    id: 8,
    image: k8,
    title: "Sky Blue Printed Kurta Set",
    category: "Cotton",
    color: "#228b22",
    sizes: ["S", "M", "L"],
    mrp: 3999,
    price: 2999,
    discount: "25% OFF",
  },
  {
    id: 9,
    image: k9,
    title: "Casual Kurta Set",
    category: "Cotton",
    color: "#ffffff",
    sizes: ["L", "XL"],
    mrp: 5200,
    price: 3999,
    discount: "23% OFF",
  },
];

const categories = [
  "NewArrivals",
  "Floral",
  "Printed",
  "Embroidered",
  "Straight",
  "Cotton",
];

const colors = [
  "#ff69b4", // Pink
  "#ffd700", // Yellow
  "#ffffff", // White
  "#228b22", // Green
  "#ffdab9", // Peach
  "#87ceeb", // Sky Blue
  "#800000", // Maroon
];

const sizes = ["S", "M", "L", "XL"];

// Same bucketed price-range logic as NewArrivals
const priceRanges = [
  { label: "Under ₹2,000", min: 0, max: 1999 },
  { label: "₹2,000 - ₹2,999", min: 2000, max: 2999 },
  { label: "₹3,000 - ₹3,999", min: 3000, max: 3999 },
  { label: "₹4,000 - ₹4,999", min: 4000, max: 4999 },
  { label: "₹5,000 & Above", min: 5000, max: Infinity },
];

export default function KurtaSets() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(true);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;

    const colorMatch =
      !selectedColor || product.color === selectedColor;

    const sizeMatch =
      !selectedSize || product.sizes.includes(selectedSize);

    const priceMatch =
      !selectedPriceRange ||
      (product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max);

    return categoryMatch && colorMatch && sizeMatch && priceMatch;
  });

  const sorted = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "discount")
      return parseInt(b.discount) - parseInt(a.discount);

    return a.id - b.id;
  });

  const navigate = useNavigate();

  return (
    <div className="kurta-page">
      <img src={kurtaBanner} alt="Kurta Banner" className="kurta-banner" />

      <div className="breadcrumb">Home / Kurta Sets</div>

      <h1 className="kurta-title">KURTA SETS</h1>

      <div className="sr-toolbar">
        <button
          className="sr-filter-btn"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          ☰ FILTER
        </button>
      </div>

      <div className="kurta-layout">
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
                          selectedPriceRange?.label === range.label
                            ? null
                            : range
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
                      border: c === "#ffffff" ? "1px solid #ccc" : "none",
                    }}
                    onClick={() =>
                      setSelectedColor(selectedColor === c ? null : c)
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
                      setSelectedSize(selectedSize === s ? null : s)
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        )}

        <div className="product-grid">
          {sorted.length === 0 ? (
            <div className="no-products">
              <h2>No Products Found</h2>
              <p>Try changing your filters.</p>
            </div>
          ) : (
            sorted.map((item) => (
              <div
                className="kurta-card"
                key={item.id}
                onClick={() => navigate("/product-details", { state: item })}
              >
                <img src={item.image} alt={item.title} />

                <h4>{item.title}</h4>

                <div className="price">
                  <span className="mrp">₹{item.mrp}</span>
                  <span className="sale-price">₹{item.price}</span>
                  <span className="offer-badge">{item.discount}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
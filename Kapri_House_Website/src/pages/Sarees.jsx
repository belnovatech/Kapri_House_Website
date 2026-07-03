import "../styles/Sarees.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import sr1  from "../assets/sr1.webp";
import sr2  from "../assets/sr2.jpg";
import sr3  from "../assets/sr3.jpg";
import sr4  from "../assets/sr4.jpg";
import sr5  from "../assets/sr5.webp";
import sr6  from "../assets/sr6.webp";
import sr7  from "../assets/sr7.webp";
import sr8  from "../assets/sr8.webp";
import sr9  from "../assets/sr9.webp";
import sr10 from "../assets/sr10.webp";
import sr11 from "../assets/sr11.webp";
import sr12 from "../assets/sr12.webp";
import sareeBanner from "../assets/sareeban.webp";

const products = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    category: "Printed Sarees",
    color: "#fff", // White
    sizes: ["M", "L", "XL"],
    mrp: 6999,
    price: 4499,
    discount: "36% OFF",
    image: sr1,
  },
  {
    id: 2,
    name: "Georgette Saree",
    category: "Silk Sarees",
    color: "#87ceeb", // Sky Blue
    sizes: ["S", "M", "L"],
    mrp: 3999,
    price: 2499,
    discount: "37% OFF",
    image: sr2,
  },
  {
    id: 3,
    name: "Embroidered Saree",
    category: "Embroidered",
    color: "#ff7f24", // Orange
    sizes: ["M", "L", "XL"],
    mrp: 5999,
    price: 3999,
    discount: "33% OFF",
    image: sr3,
  },
  {
    id: 4,
    name: "Handloom Saree",
    category: "New Arrivals",
    color: "#e8c9a0", // Beige
    sizes: ["S", "M", "L"],
    mrp: 3500,
    price: 2199,
    discount: "37% OFF",
    image: sr4,
  },
  {
    id: 5,
    name: "Chiffon Floral Saree",
    category: "New Arrivals",
    color: "#ff1493", // Pink
    sizes: ["M", "L"],
    mrp: 4200,
    price: 2799,
    discount: "33% OFF",
    image: sr5,
  },
  {
    id: 6,
    name: "Linen Solid Saree",
    category: "Embroidered",
    color: "#ff1493", // Pink
    sizes: ["M", "L", "XL"],
    mrp: 3800,
    price: 2499,
    discount: "34% OFF",
    image: sr6,
  },
  {
    id: 7,
    name: "Organza Sequin Saree",
    category: "Embroidered",
    color: "#800080", // Purple
    sizes: ["M", "L", "XL"],
    mrp: 6500,
    price: 4499,
    discount: "31% OFF",
    image: sr7,
  },
  {
    id: 8,
    name: "Kanjivaram Silk Saree",
    category: "Silk Sarees",
    color: "#000", // Black
    sizes: ["L", "XL", "XXL"],
    mrp: 8999,
    price: 5999,
    discount: "33% OFF",
    image: sr8,
  },
  {
    id: 9,
    name: "Tussar Silk Saree",
    category: "Silk Sarees",
    color: "#8b5a2b", // Brown
    sizes: ["M", "L"],
    mrp: 5500,
    price: 3799,
    discount: "31% OFF",
    image: sr9,
  },
  {
    id: 10,
    name: "Zari Border Saree",
    category: "New Arrivals",
    color: "#ff1493", // Pink
    sizes: ["M", "L", "XL"],
    mrp: 4999,
    price: 3299,
    discount: "34% OFF",
    image: sr10,
  },
  {
    id: 11,
    name: "Printed Crepe Saree",
    category: "Printed Sarees",
    color: "#87ceeb", // Sky Blue
    sizes: ["S", "M", "L"],
    mrp: 3600,
    price: 2299,
    discount: "36% OFF",
    image: sr11,
  },
  {
    id: 12,
    name: "Bandhani Print Saree",
    category: "Printed Sarees",
    color: "#00bcd4", // Turquoise
    sizes: ["M", "L", "XL"],
    mrp: 4400,
    price: 2899,
    discount: "34% OFF",
    image: sr12,
  },
];

const categories = ["New Arrivals", "Silk Sarees", "Cotton Sarees", "Printed Sarees", "Embroidered"];
const colors = [
  { id: 1, name: "White", hex: "#fff" },
  { id: 2, name: "Black", hex: "#000" },
  { id: 3, name: "Beige", hex: "#e8c9a0" },
  { id: 4, name: "Brown", hex: "#8b5a2b" },
  { id: 5, name: "Pink", hex: "#ff1493" },
  { id: 6, name: "Purple", hex: "#800080" },
  { id: 7, name: "Orange", hex: "#ff7f24" },
  { id: 8, name: "Sky Blue", hex: "#87ceeb" },
  { id: 9, name: "Turquoise", hex: "#00bcd4" },
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

// Same bucketed price-range logic as KurtaSets
const priceRanges = [
  { label: "Under ₹2,000", min: 0, max: 1999 },
  { label: "₹2,000 - ₹2,999", min: 2000, max: 2999 },
  { label: "₹3,000 - ₹3,999", min: 3000, max: 3999 },
  { label: "₹4,000 - ₹4,999", min: 4000, max: 4999 },
  { label: "₹5,000 & Above", min: 5000, max: Infinity },
];

export default function Sarees() {
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(true);

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

  const sorted = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;

    if (sortBy === "price-desc") return b.price - a.price;

    if (sortBy === "discount")
      return parseInt(b.discount) - parseInt(a.discount);

    return a.id - b.id;
  });

  return (
    <div className="sr-page">

      <div className="sr-breadcrumb">
        <span>Home</span> › <span>Sarees</span>
      </div>

      <img src={sareeBanner} alt="Sarees" className="sr-banner" />

      <div className="sr-toolbar">
        <button className="sr-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="sr-count">{sorted.length} Products</span>
        <div className="sr-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="sr-body">

        {filterOpen && (
          <aside className="sr-sidebar">

            <div className="sr-filter-group">
              <h4>CATEGORY</h4>
              {categories.map(cat => (
                <label key={cat} className="sr-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
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
                {colors.map((color) => (
                  <button
                    key={color.id}
                    className={`sr-color-dot ${
                      selectedColor === color.hex ? "active" : ""
                    }`}
                    style={{
                      background: color.hex,
                      border:
                        color.hex === "#fff"
                          ? "1px solid #ccc"
                          : "none",
                    }}
                    onClick={() =>
                      setSelectedColor(
                        selectedColor === color.hex
                          ? null
                          : color.hex
                      )
                    }
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="sr-filter-group">
              <h4>SIZE</h4>
              <div className="sr-sizes">
                {sizes.map(s => (
                  <button
                    key={s}
                    className={`sr-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        )}

        <div className={`sr-grid ${filterOpen ? "" : "sr-grid--full"}`}>
        {sorted.length === 0 ? (
          <div className="sr-no-products">
            <h2>No Sarees Found</h2>
            <p>Try changing your filters.</p>
          </div>
        ) :
          sorted.map(product => (
            <div
              className="sr-card"
              key={product.id}
              onClick={() =>
                navigate("/product-details", {
                  state: product,
                })
              }
            >
              <div className="sr-img-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="sr-info">
                <div className="sr-stars">★★★★★</div>
                <h4>{product.name}</h4>
                <div className="sr-price">
                  <span className="sr-mrp">₹{product.mrp.toLocaleString()}</span>
                  <span className="sr-current">₹{product.price.toLocaleString()}</span>
                  <span className="sr-off">({product.discount})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
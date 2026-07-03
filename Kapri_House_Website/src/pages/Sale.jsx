import "../styles/Sale.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import sl1  from "../assets/sale1.webp";
import sl2  from "../assets/sl2.webp";
import sl3  from "../assets/sl3.webp";
import sl4  from "../assets/sl4.webp";
import sl5  from "../assets/sl5.webp";
import sl6  from "../assets/sl6.webp";
import sl7  from "../assets/sl7.webp";
import sl8  from "../assets/thumbnails/lehanga.webp";
import sl9  from "../assets/thumbnails/maxi2.webp";
import sl10 from "../assets/mx8.webp";
import sl11 from "../assets/mx10.webp";
import sl12 from "../assets/na3.jpg";
import saleBanner from "../assets/saleban.webp";

const products = [
  {
    id: 1,
    name: "Floral PrintSet",
    category: "Dresses",
    color: "#ffa500", // Orange
    sizes: ["S", "M", "L"],
    mrp: 3999,
    price: 1999,
    discount: "50% OFF",
    image: sl1,
  },
  {
    id: 2,
    name: "Solid Cotton Dress",
    category: "Co-ord Sets",
    color: "#800080",
    sizes: ["M", "L", "XL"],
    mrp: 3500,
    price: 1799,
    discount: "49% OFF",
    image: sl2,
  },
  {
    id: 3,
    name: "Embroidered Co-ord Set",
    category: "Co-ord Sets",
    color: "#b8860b",
    sizes: ["L", "XL", "XXL"],
    mrp: 4200,
    price: 2099,
    discount: "50% OFF",
    image: sl3,
  },
  {
    id: 4,
    name: "Printed Maxi Dress",
    category: "Co-ord Sets",
    color: "#4a6fa5",
    sizes: ["S", "M", "L"],
    mrp: 3800,
    price: 1899,
    discount: "50% OFF",
    image: sl4,
  },
  {
    id: 5,
    name: "Block Print Suit Set",
    category: "Dresses",
    color: "#ffa500",
    sizes: ["M", "L", "XL"],
    mrp: 4500,
    price: 2299,
    discount: "49% OFF",
    image: sl5,
  },
  {
    id: 6,
    name: "Tie-Dye Kurta Set",
    category: "Kurta Sets",
    color: "#6b8e6b",
    sizes: ["S", "M", "L"],
    mrp: 3999,
    price: 1999,
    discount: "50% OFF",
    image: sl6,
  },
  {
    id: 7,
    name: "Pastel dress",
    category: "Dresses",
    color: "#e8c9a0",
    sizes: ["M", "L", "XL"],
    mrp: 4999,
    price: 2499,
    discount: "50% OFF",
    image: sl7,
  },
  {
    id: 8,
    name: "Cotton Casual Lehenga",
    category: "Lehengas",
    color: "#b8860b",
    sizes: ["L", "XL", "XXL"],
    mrp: 6999,
    price: 3499,
    discount: "50% OFF",
    image: sl8,
  },
  {
    id: 9,
    name: "Printed Farshi Salwar Set",
    category: "All Sale",
    color: "#800080",
    sizes: ["M", "L", "XL"],
    mrp: 5499,
    price: 2799,
    discount: "49% OFF",
    image: sl9,
  },
  {
    id: 10,
    name: "Organza Sharara Set",
    category: "Kurta Sets",
    color: "#38bc7c",
    sizes: ["L", "XL", "XXL"],
    mrp: 5800,
    price: 2899,
    discount: "50% OFF",
    image: sl10,
  },
  {
    id: 11,
    name: "Rust Cotton Kurta Set",
    category: "All Sale",
    color: "#8b4513",
    sizes: ["S", "M", "L"],
    mrp: 3200,
    price: 1599,
    discount: "50% OFF",
    image: sl11,
  },
  {
    id: 12,
    name: "Ivory Lace Dress",
    category: "Dresses",
    color: "#fff",
    sizes: ["S", "M", "L"],
    mrp: 4500,
    price: 2299,
    discount: "49% OFF",
    image: sl12,
  },
];

const categories = ["All Sale", "Kurta Sets", "Dresses", "Co-ord Sets", "Lehengas"];
const colors = [
  "#fff",
  "#38bc7c",
  "#e8c9a0",
  "#6b8e6b",
  "#b8860b",
  "#4a6fa5",
  "#800080",
  "#ffa500",
  "#8b4513",
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

// Same bucketed price-range logic as Sarees / KurtaSets / NightSuits
const priceRanges = [
  { label: "Under ₹1,800", min: 0, max: 1799 },
  { label: "₹1,800 - ₹2,299", min: 1800, max: 2299 },
  { label: "₹2,300 - ₹2,799", min: 2300, max: 2799 },
  { label: "₹2,800 - ₹3,299", min: 2800, max: 3299 },
  { label: "₹3,300 & Above", min: 3300, max: Infinity },
];

export default function Sale() {
  const navigate = useNavigate();

  const [selectedColor,    setSelectedColor]    = useState(null);
  const [selectedSize,     setSelectedSize]     = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy,           setSortBy]           = useState("featured");
  const [filterOpen,       setFilterOpen]       = useState(true);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory ||
      selectedCategory === "All Sale" ||
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
    if (sortBy === "price-asc")
      return a.price - b.price;

    if (sortBy === "price-desc")
      return b.price - a.price;

    if (sortBy === "discount")
      return parseInt(b.discount) - parseInt(a.discount);

    return a.id - b.id;
  });

  return (
    <div className="sl-page">

      <div className="sl-breadcrumb">
        <span>Home</span> › <span>Sale</span>
      </div>

      <img src={saleBanner} alt="Sale" className="sl-banner" />

      <div className="sl-toolbar">
        <button className="sl-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
          ☰ FILTER
        </button>
        <span className="sl-count">{sorted.length} Products</span>
        <div className="sl-sort">
          <label>Sort by</label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Best Discount</option>
          </select>
        </div>
      </div>

      <div className="sl-body">

        {filterOpen && (
          <aside className="sl-sidebar">

            <div className="sl-filter-group">
              <h4>CATEGORY</h4>
              {categories.map(cat => (
                <label key={cat} className="sl-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <div className="sl-filter-group">
              <h4>PRICE</h4>
              <div className="sl-price-list">
                {priceRanges.map((range) => (
                  <label key={range.label} className="sl-checkbox">
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

            <div className="sl-filter-group">
              <h4>COLOR</h4>
              <div className="sl-colors">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    className={`sl-color-dot ${selectedColor === c ? "active" : ""}`}
                    style={{ background: c, border: c === "#fff" ? "1px solid #ccc" : "none" }}
                    onClick={() => setSelectedColor(selectedColor === c ? null : c)}
                  />
                ))}
              </div>
            </div>

            <div className="sl-filter-group">
              <h4>SIZE</h4>
              <div className="sl-sizes">
                {sizes.map(s => (
                  <button
                    key={s}
                    className={`sl-size-btn ${selectedSize === s ? "active" : ""}`}
                    onClick={() => setSelectedSize(selectedSize === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        )}

        <div className={`sl-grid ${filterOpen ? "" : "sl-grid--full"}`}>
          {sorted.length === 0 ? (
            <div className="sl-no-products">
              <h2>No Sale Products Found</h2>
              <p>Try changing your filters.</p>
            </div>
          ) :
            sorted.map(product => (
              <div
                className="sl-card"
                key={product.id}
                onClick={() =>
                  navigate("/product-details", {
                    state: product,
                  })
                }
              >
                <div className="sl-img-wrap">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="sl-info">
                  <div className="sl-stars">★★★★★</div>
                  <h4>{product.name}</h4>
                  <div className="sl-price">
                    <span className="sl-mrp">₹{product.mrp.toLocaleString()}</span>
                    <span className="sl-current">₹{product.price.toLocaleString()}</span>
                    <span className="sl-off">({product.discount})</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}
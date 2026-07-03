// import "../styles/FarshiSet.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import fs1  from "../assets/fsh1.webp";
// import fs2  from "../assets/fs2.webp";
// import fs3  from "../assets/fs3.webp";
// import fs4  from "../assets/fs4.webp";
// import fs5  from "../assets/fs5.webp";
// import fs6  from "../assets/fs6.webp";
// import fs7  from "../assets/fs7.webp";
// import fs8  from "../assets/fs8.webp";
// import fs9  from "../assets/fs9.webp";
// import fs10 from "../assets/fs10.webp";
// import fs11 from "../assets/fs11.webp";
// import fs12 from "../assets/fs12.webp";
// import farshiBanner from "../assets/banner.jpg";

// const products = [
//   {
//     id: 1,
//     name: "Embroidered Farshi Salwar Set",
//     category: "Embroidered",
//     color: "#00ced1", // Turquoise
//     sizes: ["M", "L", "XL"],
//     mrp: 5999,
//     price: 3999,
//     discount: "33% OFF",
//     image: fs1,
//   },
//   {
//     id: 2,
//     name: "Printed Cotton Farshi Set",
//     category: "Printed Sets",
//     color: "#e8c9a0", // Beige
//     sizes: ["S", "M", "L"],
//     mrp: 3999,
//     price: 2499,
//     discount: "37% OFF",
//     image: fs2,
//   },
//   {
//     id: 3,
//     name: "Net Farshi Salwar Set",
//     category: "Farshi Salwar Sets",
//     color: "#4a6fa5", // Indigo
//     sizes: ["M", "L", "XL"],
//     mrp: 4999,
//     price: 3299,
//     discount: "34% OFF",
//     image: fs3,
//   },
//   {
//     id: 4,
//     name: "Silk Farshi Salwar Set",
//     category: "Farshi Salwar Sets",
//     color: "#ffa500", // Orange
//     sizes: ["L", "XL", "XXL"],
//     mrp: 6999,
//     price: 4799,
//     discount: "31% OFF",
//     image: fs4,
//   },
//   {
//     id: 5,
//     name: "Floral Print Farshi Set",
//     category: "Printed Sets",
//     color: "#e8c9a0", // Beige
//     sizes: ["S", "M", "L"],
//     mrp: 4200,
//     price: 2799,
//     discount: "33% OFF",
//     image: fs5,
//   },
//   {
//     id: 6,
//     name: "Georgette Farshi Salwar Set",
//     category: "New Arrivals",
//     color: "#6b8e6b", // Green
//     sizes: ["M", "L", "XL"],
//     mrp: 5500,
//     price: 3699,
//     discount: "33% OFF",
//     image: fs6,
//   },
//   {
//     id: 7,
//     name: "Zari Work Farshi Set",
//     category: "Embroidered",
//     color: "#ffa500", // Gold
//     sizes: ["L", "XL", "XXL"],
//     mrp: 6500,
//     price: 4499,
//     discount: "31% OFF",
//     image: fs7,
//   },
//   {
//     id: 8,
//     name: "Pastel Farshi Salwar Set",
//     category: "New Arrivals",
//     color: "#800080",
//     sizes: ["S", "M", "L"],
//     mrp: 4500,
//     price: 2999,
//     discount: "33% OFF",
//     image: fs8,
//   },
//   {
//     id: 9,
//     name: "Chiffon Farshi Set",
//     category: "Farshi Salwar Sets",
//     color: "#c49a6c",
//     sizes: ["M", "L", "XL"],
//     mrp: 4800,
//     price: 3199,
//     discount: "33% OFF",
//     image: fs9,
//   },
//   {
//     id: 10,
//     name: "Organza Farshi Salwar Set",
//     category: "New Arrivals",
//     color: "#6b8e6b", // Green
//     sizes: ["L", "XL", "XXL"],
//     mrp: 5800,
//     price: 3899,
//     discount: "33% OFF",
//     image: fs10,
//   },
//   {
//     id: 11,
//     name: "Bridal Farshi Salwar Set",
//     category: "Bridal",
//     color: "#e79924", // Gold
//     sizes: ["L", "XL", "XXL"],
//     mrp: 8999,
//     price: 5999,
//     discount: "33% OFF",
//     image: fs11,
//   },
//   {
//     id: 12,
//     name: "Ivory Farshi Salwar Set",
//     category: "Bridal",
//     color: "#8b4513", // Brown
//     sizes: ["S", "M", "L"],
//     mrp: 5200,
//     price: 3499,
//     discount: "33% OFF",
//     image: fs12,
//   },
// ];

// const categories = ["New Arrivals", "Farshi Salwar Sets", "Embroidered", "Printed Sets", "Bridal"];
// const colors = [
//   // "#fff",
//   // "#000",
//   "#e8c9a0",
//   "#e79924",
//   "#6b8e6b",
//   // "#b8860b",
//   "#4a6fa5",
//   "#c49a6c",
//   // "#ff0000",
//   "#800080",
//   "#ffa500",
//   // "#ffff00",
//   "#00ced1",
 
//   "#8b4513",
// ];
// const sizes      = ["XS","S","M","L","XL","XXL"];

// export default function FarshiSet() {
//   const navigate = useNavigate();

//   const [selectedColor,    setSelectedColor]    = useState(null);
//   const [selectedSize,     setSelectedSize]     = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [priceRange,       setPriceRange]       = useState(9000);
//   const [sortBy,           setSortBy]           = useState("featured");
//   const [filterOpen,       setFilterOpen]       = useState(true);

// const filteredProducts = products.filter((product) => {
//   const categoryMatch =
//     !selectedCategory ||
//     product.category === selectedCategory;

//   const colorMatch =
//     !selectedColor ||
//     product.color === selectedColor;

//   const sizeMatch =
//     !selectedSize ||
//     product.sizes.includes(selectedSize);

//   const priceMatch =
//     product.price <= priceRange;

//   return (
//     categoryMatch &&
//     colorMatch &&
//     sizeMatch &&
//     priceMatch
//   );
// });

// const sorted = [...filteredProducts].sort((a, b) => {
//   if (sortBy === "price-asc")
//     return a.price - b.price;

//   if (sortBy === "price-desc")
//     return b.price - a.price;

//   if (sortBy === "discount")
//     return parseInt(b.discount) - parseInt(a.discount);

//   return a.id - b.id;
// });

//   return (
//     <div className="fs-page">

//       <div className="fs-breadcrumb">
//         <span>Home</span> › <span>Farshi Salwar Sets</span>
//       </div>

//       <img src={farshiBanner} alt="Farshi Salwar Sets" className="fs-banner" />

//       <div className="fs-toolbar">
//         <button className="fs-filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
//           ☰ FILTER
//         </button>
//         <span className="fs-count">{sorted.length} Products</span>
//         <div className="fs-sort">
//           <label>Sort by</label>
//           <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
//             <option value="featured">Featured</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//             <option value="discount">Best Discount</option>
//           </select>
//         </div>
//       </div>

//       <div className="fs-body">

//         {filterOpen && (
//           <aside className="fs-sidebar">

//             <div className="fs-filter-group">
//               <h4>CATEGORY</h4>
//               {categories.map(cat => (
//                 <label key={cat} className="fs-checkbox">
//                   <input
//                     type="checkbox"
//                     checked={selectedCategory === cat}
//                     onChange={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
//                   />
//                   {cat}
//                 </label>
//               ))}
//             </div>

//             <div className="fs-filter-group">
//               <h4>PRICE</h4>
//               <input
//                 type="range"
//                 min={0}
//                 max={9000}
//                 value={priceRange}
//                 onChange={e => setPriceRange(Number(e.target.value))}
//                 className="fs-range"
//               />
//               <div className="fs-price-labels">
//                 <span>₹0</span>
//                 <span>₹{priceRange.toLocaleString()}</span>
//               </div>
//             </div>

//             <div className="fs-filter-group">
//               <h4>COLOR</h4>
//               <div className="fs-colors">
//                 {colors.map((c, i) => (
//                   <button
//                     key={i}
//                     className={`fs-color-dot ${selectedColor === c ? "active" : ""}`}
//                     style={{ background: c, border: c === "#fff" ? "1px solid #ccc" : "none" }}
//                     onClick={() => setSelectedColor(selectedColor === c ? null : c)}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="fs-filter-group">
//               <h4>SIZE</h4>
//               <div className="fs-sizes">
//                 {sizes.map(s => (
//                   <button
//                     key={s}
//                     className={`fs-size-btn ${selectedSize === s ? "active" : ""}`}
//                     onClick={() => setSelectedSize(selectedSize === s ? null : s)}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>

//           </aside>
//         )}

//         <div className={`fs-grid ${filterOpen ? "" : "fs-grid--full"}`}>
//          {sorted.length === 0 ? (
//   <div className="fs-no-products">
//     <h2>No Farshi Sets Found</h2>
//     <p>Try changing your filters.</p>
//   </div>
// ) : 
//   sorted.map(product => (
//             <div
//               className="fs-card"
//               key={product.id}
//               onClick={() =>
//                 navigate("/product-details", {
//                   state: product,
//                 })
//               }
//             >
//               <div className="fs-img-wrap">
//                 <img src={product.image} alt={product.name} />
//               </div>
//               <div className="fs-info">
//                 <div className="fs-stars">★★★★★</div>
//                 <h4>{product.name}</h4>
//                 <div className="fs-price">
//                   <span className="fs-mrp">₹{product.mrp.toLocaleString()}</span>
//                   <span className="fs-current">₹{product.price.toLocaleString()}</span>
//                   <span className="fs-off">({product.discount})</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
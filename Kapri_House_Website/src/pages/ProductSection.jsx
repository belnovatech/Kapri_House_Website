import "../styles/ProductSection.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

import p1 from "../assets/p1.jpg";
import p1Hover from "../assets/p1-hover.jpg";

import p2 from "../assets/p2.jpg";
import p2Hover from "../assets/p2-hover.jpg";

import p3 from "../assets/p3.jpg";
import p3Hover from "../assets/p3-hover.jpg";

import p4 from "../assets/p4.jpg";
import p4Hover from "../assets/p4-hover.jpg";

import p5 from "../assets/p5.jpg";
import p5Hover from "../assets/p5-hover.jpg";
import p6 from "../assets/p6.jpg";
import p6Hover from "../assets/p6-hover.jpg";
import p7 from "../assets/p7.jpg";
import p7Hover from "../assets/p7-hover.jpg";
import p8 from "../assets/p8.jpg";
import p8Hover from "../assets/p8-hover.jpg";
import p9 from "../assets/p9.jpg";
import p9Hover from "../assets/p9-hover.jpg";

import p10 from "../assets/p10.jpg";
import p10Hover from "../assets/p10-hover.jpg";

import p11 from "../assets/p11.jpg";
import p11Hover from "../assets/p11-hover.jpg";

import p12 from "../assets/p12.jpg";
import p12Hover from "../assets/p12-hover.jpg";

import p13 from "../assets/p13.jpg";
import p13Hover from "../assets/p13-hover.jpg";

import p14 from "../assets/p14.jpg";
import p14Hover from "../assets/p14-hover.jpg";

import p15 from "../assets/p15.jpg";
import p15Hover from "../assets/p15-hover.jpg";
const products = [
  { id: 1, image: p1,   hoverImage: p1Hover,name: "Noorani Embroidered Kurta Set",       price: "2,499" },
  { id: 2, image: p2,   hoverImage: p2Hover,name: "Black Embroidered Cotton Co-ord Set", price: "2,499" },
  { id: 3, image: p3,  hoverImage: p3Hover, name: "Cotton Slub Co-ord Set",              price: "2,499" },
  { id: 4, image: p4,  hoverImage: p4Hover, name: "Rust Cotton Relaxed Co-ord Set",      price: "2,499" },
  { id: 5, image: p5,  hoverImage: p5Hover, name: "White Cotton Body Co-ord Set",        price: "2,499" },
  { id: 6, image: p6,  hoverImage: p6Hover, name: "Cotton Charm Co-ord Set",             price: "2,499" },
  { id: 7, image: p7,  hoverImage: p7Hover, name: "Mint Green Maxi Dress",               price: "3,500" },
  { id: 8, image: p8,  hoverImage: p8Hover, name: "Fantasy Co-ord Set",                  price: "2,499" },
    { id: 9, image: p9, hoverImage: p9Hover, name: "Royal Silk Embroidered Anarkali", price: "12,999" },
  { id: 10, image: p10, hoverImage: p10Hover, name: "Luxury Floral Organza Saree", price: "18,499" },
  { id: 11, image: p11, hoverImage: p11Hover, name: "Designer Banarasi Lehenga", price: "19,999" },
  { id: 12, image: p12, hoverImage: p12Hover, name: "Premium Velvet Kurta Set", price: "15,499" },
  { id: 13, image: p13, hoverImage: p13Hover, name: "Handcrafted Chikankari Suit Set", price: "9,999" },
  { id: 14, image: p14, hoverImage: p14Hover, name: "Festive Silk Co-ord Set", price: "16,999" },
  { id: 15, image: p15, hoverImage: p15Hover, name: "Elegant Embellished Gown", price: "19,499" },
];

export default function ProductSection() {
  const navigate  = useNavigate();
  const sliderRef = useRef(null);
  const cardRefs  = useRef([]);      // ← new

  // drag-to-scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add("dragging");
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };
  const handleMouseLeave = () => { isDown = false; sliderRef.current.classList.remove("dragging"); };
  const handleMouseUp    = () => { isDown = false; sliderRef.current.classList.remove("dragging"); };
  const handleMouseMove  = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };

  // ── Scroll-triggered slide-up ──
  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add("product-card--visible");
            }, i * 80);           // 80ms stagger per card
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="product-section">

     <h2>Elevate Your Ethnic Wardrobe</h2>
<p>Handpicked arrivals blending tradition with contemporary elegance.</p>

      <div
        className="product-scroll-row"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {products.map((product, i) => (
          <div
            className="product-card"
            key={product.id}
            ref={(el) => (cardRefs.current[i] = el)}   // ← new
            onClick={() => navigate("/product-details", { state: product })}
          >
<div className="product-image-wrapper">
  <img
    src={product.image}
    alt={product.name}
    className="product-img product-img-default"
  />

  <img
    src={product.hoverImage}
    alt={product.name}
    className="product-img product-img-hover"
  />

  <span className="discount-badge">50% OFF</span>
</div>

            <div className="product-info">
              <div className="rating">★★★★★</div>
              <h4>{product.name}</h4>
              <div className="price">
                <span className="old-price">₹4,999</span>
                ₹{product.price}
              </div>
            </div>
          </div>
        ))}
      </div>

     <button
  className="view-btn"
  onClick={() => navigate("/new-arrivals")}
>
  VIEW ALL
</button>

    </section>
  );
}
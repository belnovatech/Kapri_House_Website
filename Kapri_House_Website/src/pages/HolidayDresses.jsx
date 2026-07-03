import "../styles/HolidayDresses.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import hd1 from "../assets/fd1.jpg";
import hd2 from "../assets/fd2.jpg";
import hd3 from "../assets/fd3.jpg";
import hd4 from "../assets/fd4.jpg";
import hd5 from "../assets/fd5.jpg";
import hd6 from "../assets/fd6.jpg";
import hd7 from "../assets/fd7.jpg";
import hd8 from "../assets/fd8.jpg";
import hd1Hover from "../assets/fd1-hover.jpg";
import hd2Hover from "../assets/fd2-hover.jpg";
import hd3Hover from "../assets/fd3-hover.jpg";
import hd4Hover from "../assets/fd4-hover.jpg";
import hd5Hover from "../assets/fd5-hover.jpg";
import hd6Hover from "../assets/fd6-hover.jpg";
import hd7Hover from "../assets/fd7-hover.jpg";
import hd8Hover from "../assets/fd8-hover.jpg";

const products = [
  { id: 1, image: hd1,hoverImage: hd1Hover, title: "White Shift Dress",          mrp: 4200, price: 3150, discount: "25% OFF" },
  { id: 2, image: hd2,hoverImage: hd2Hover, title: "Float White Cotton Dress",   mrp: 4200, price: 2499, discount: "40% OFF" },
  { id: 3, image: hd3,hoverImage: hd3Hover, title: "White Cotton Midi Dress",    mrp: 4500, price: 3500, discount: "22% OFF" },
  { id: 4, image: hd4,hoverImage: hd4Hover, title: "Lime Green Cotton Dress",    mrp: 5000, price: 4000, discount: "20% OFF" },
  { id: 5, image: hd5,hoverImage: hd5Hover, title: "Indigo Shirt Cotton Dress",  mrp: 4200, price: 2499, discount: "40% OFF" },
  { id: 6, image: hd6,hoverImage: hd6Hover, title: "Black Embroidered Dress",    mrp: 4500, price: 3500, discount: "22% OFF" },
  { id: 7, image: hd7,hoverImage: hd7Hover, title: "Black Floral Dress",         mrp: 4200, price: 3150, discount: "25% OFF" },
  { id: 8, image: hd8,hoverImage: hd8Hover, title: "Black Daisy Dress",          mrp: 4200, price: 2999, discount: "29% OFF" },
];

export default function HolidayDresses() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const cardRefs  = useRef([]);

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

  // scroll-triggered slide-up
  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => card.classList.add("hd-card--visible"), i * 80);
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
    <section className="hd-section">

      <div className="hd-title">
       <h2>THE DRESS EDIT</h2>
<p>Gracefully tailored dresses for every occasion and every season.</p>
      </div>

      <div
        className="hd-scroll-row"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {products.map((item, i) => (
<div
  className="hd-card"
  key={item.id}
  ref={(el) => (cardRefs.current[i] = el)}
  onClick={() =>
    navigate("/product-details", {
      state: {
        id: item.id,
        image: item.image,
        hoverImage: item.hoverImage,
        name: item.title,
        price: item.price,
        mrp: item.mrp,
        discount: item.discount,
      },
    })
  }
>
<div className="hd-image-wrapper">
  <img
    src={item.image}
    alt={item.title}
    className="hd-img hd-img-default"
  />

<img
 src={item.hoverImage}
 alt={item.title}
 className="hd-img hd-img-hover"
/>

<span className="hd-badge">{item.discount}</span>

</div>


            <div className="hd-info">
              <div className="hd-stars">★★★★★</div>
              <h4>{item.title}</h4>
              <div className="hd-price">
                <span className="hd-mrp">₹{item.mrp}</span>
                ₹{item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hd-view-all-wrap">
        <button
  className="view-btn"
  onClick={() => navigate("/dresses")}
>
  VIEW ALL
</button>
      </div>

    </section>
  );
}
import "../styles/FestiveWear.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fw1 from "../assets/fw1.jpg";
// import fw2 from "../assets/fw2.jpg";
// import fw3 from "../assets/fw3.jpg";
// import fw4 from "../assets/fw4.jpg";
// import fw5 from "../assets/fw5.jpg";
import fw6 from "../assets/fw6.jpg";
import fw7 from "../assets/fw7.jpg";
import fw8 from "../assets/fw8.jpg";
// import fw4Hover from "../assets/fw4-hover.jpg";
import fw3Hover from "../assets/fw10-hover.jpg";
import fw2Hover from "../assets/fw11-hover.jpg";
import fw6Hover from "../assets/fw6-hover.jpg";
import fw7Hover from "../assets/fw7-hover.jpg";
import fw8Hover from "../assets/fw8-hover.jpg";
import fw1Hover from "../assets/fw12-hover.jpg";
import fw5Hover from "../assets/fw13-hover.jpg";
import fw14Hover from "../assets/fw14-hover.jpg";
import fw15Hover from "../assets/fw15-hover.jpg";
// import fw9 from "../assets/fw4.jpg";
import fw10 from "../assets/fw10.jpg";
import fw11 from "../assets/fw11.jpg";
import fw12 from "../assets/fw12.jpg";
import fw13 from "../assets/fw13.jpg";
import fw14 from "../assets/fw14.jpg";
import fw15 from "../assets/fw15.jpg";
import fw10Hover from "../assets/fw1-hover.jpg";


const products = [
  { id: 1, image: fw6,hoverImage: fw6Hover, title: "Orange Myra Suit Set",     mrp: 4500, price: 3999, discount: "11% OFF" },
  { id: 2, image: fw7,hoverImage: fw7Hover,  title: "Meadow Silk Kurta Set",    mrp: 3999, price: 2499, discount: "42% OFF" },
  { id: 3, image: fw8,hoverImage: fw8Hover, title: " Silk Kurta",   mrp: 3500, price: 2499, discount: "29% OFF" },
//   { id: 4, image: fw9,hoverImage: fw9Hover,  title: "Black Cotton Kurta Set",   mrp: 3200, price: 2499, discount: "22% OFF" },
//   { id: 5, image: fw10,hoverImage: fw10Hover, title: "Pink Luxe Kaftan Set",     mrp: 4000, price: 2499, discount: "37% OFF" },
//   { id: 6, image: fw11,hoverImage: fw11Hover,
//  title: "Black Silver Kurta Pants", mrp: 3500, price: 2499, discount: "29% OFF" },
//   { id: 7, image: fw7,hoverImage: fw7Hover,
//  title: "Floral Drape Saree",       mrp: 6000, price: 4200, discount: "30% OFF" },
//   { id: 8, image: fw8, hoverImage: fw8Hover,
// title: "Blue Floral Fusion Saree", mrp: 6500, price: 4550, discount: "30% OFF" },
  {
    id: 9,
    image: fw1,
    hoverImage: fw10Hover,
    title: "Royal Banarasi Silk gown",
    mrp: 18999,
    price: 14999,
    discount: "21% OFF"
  },
  {
    id: 10,
    image: fw10,
    hoverImage: fw3Hover,
    title: "Luxury Zari Anarkali Set",
    mrp: 17999,
    price: 13999,
    discount: "22% OFF"
  },
  {
    id: 11,
    image: fw11,
    hoverImage: fw2Hover,
    title: "Designer Bridal Lehenga",
    mrp: 19999,
    price: 15499,
    discount: "23% OFF"
  },
  {
    id: 12,
    image: fw12,
    hoverImage: fw1Hover,
    title: "Premium Velvet Sharara Set",
    mrp: 16999,
    price: 12999,
    discount: "24% OFF"
  },
  {
    id: 13,
    image: fw13,
    hoverImage: fw5Hover,
    title: "Pure Silk Kanjeevaram frok",
    mrp: 18499,
    price: 14499,
    discount: "22% OFF"
  },
  {
    id: 14,
    image: fw14,
    hoverImage: fw14Hover,
    title: "Festive Embroidered Gown",
    mrp: 15999,
    price: 11999,
    discount: "25% OFF"
  },
  {
    id: 15,
    image: fw15,
    hoverImage: fw15Hover,
    title: "Handcrafted Heritage Suit Set",
    mrp: 17499,
    price: 13499,
    discount: "23% OFF"
  },
];

export default function FestiveWear() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Drag-to-scroll
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

  // Scroll-triggered slide-up per card
  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // staggered delay: each card animates slightly after the previous
            setTimeout(() => {
              card.classList.add("fw-card--visible");
            }, i * 80);
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
    <section className="festive-section" ref={sectionRef}>

      <div className="section-title">
      <h2>FESTIVE ELEGANCE</h2>
<p>Discover exquisite ensembles inspired by India's rich heritage.</p>
      </div>

      <div
        className="festive-scroll-row"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {products.map((item, i) => (
<div
  className="fw-card"
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
<div className="fw-image-wrapper">
  <img
    src={item.image}
    alt={item.title}
    className="fw-img fw-img-default"
  />

<img
 src={item.hoverImage}
 alt={item.title}
 className="fw-img fw-img-hover"
/>

<span className="fw-badge">{item.discount}</span>

</div>


            <div className="fw-info">
              <div className="fw-stars">★★★★★</div>
              <h4>{item.title}</h4>
              <div className="fw-price">
                <span className="fw-mrp">₹{item.mrp}</span>
                ₹{item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrap">
       <button
  className="view-btn"
  onClick={() => navigate("/sarees")}
>
  VIEW ALL
</button>
      </div>

    </section>
  );
}
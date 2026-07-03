import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

// import p1 from "../assets/p1.jpg";
// import p2 from "../assets/p2.jpg";
// import p3 from "../assets/p3.jpg";
import d1 from "../assets/thumbnails/d1.webp";
import d2 from "../assets/thumbnails/d2.webp";
// import p4 from "../assets/p4.jpg";
import lehanga from "../assets/thumbnails/lehanga.webp";
import saree from "../assets/thumbnails/sareee.webp";
// import farshi from "../assets/thumbnails/farshi.webp";
// import sharara from "../assets/thumbnails/beauty.webp";
import cottonKurta from "../assets/thumbnails/cotton.webp";
import maxi from "../assets/thumbnails/maxi.webp";
// import farshiHover from "../assets/thumbnails/farshi2.webp";
import maxiHover from "../assets/thumbnails/maxi2.webp";
// import shararaHover from "../assets/thumbnails/sharara2.webp";
import "../styles/CategorySlider.css";
import lehangaHover from "../assets/thumbnails/lehanga2.webp";
import sareeHover from "../assets/thumbnails/sareehov.webp";
import cottonKurtaHover from "../assets/thumbnails/kurtahov.webp";
import suitHover from "../assets/thumbnails/suit2.webp";
import suit from "../assets/thumbnails/suit1.webp";
export default function CategorySlider() {
  const navigate = useNavigate();

  const baseData = [
    { image: cottonKurta, hoverImage: cottonKurtaHover, name: "Kurta Sets",   path: "/kurta-sets"  },
    { image: suit,          hoverImage: suitHover,     name: "Suit Sets",    path: "/suit-sets"   },
    { image: maxi,        hoverImage: maxiHover, name: "Maxis",        path: "/maxis"       },
    { image: d1,          hoverImage: d2,     name: "Dresses",      path: "/dresses"     },
    // { image: farshi,      hoverImage: farshiHover, name: "Farshi Set",   path: "/farshi-set"  },
    // { image: sharara,     hoverImage: shararaHover, name: "Sharara Set",  path: "/sharara-set" },
    { image: saree,       hoverImage: sareeHover, name: "Sarees",       path: "/sarees"      },
    { image: lehanga,     hoverImage: lehangaHover,  name: "Lehengas",     path: "/lehengas"    },
  ];

  const data = [...baseData, ...baseData];

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5500,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992,  settings: { slidesToShow: 4 } },
      { breakpoint: 768,  settings: { slidesToShow: 3 } },
      { breakpoint: 576,  settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="category-slider-wrapper">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            className="category-item"
            key={index}
            onClick={() => item.path && navigate(item.path)}
          >
            <div className="category-circle">
              {/* default image */}
              <img
                src={item.image}
                alt={item.name}
                className="cat-img cat-img--default"
              />
              {/* hover image */}
              <img
                src={item.hoverImage}
                alt={item.name}
                className="cat-img cat-img--hover"
              />
            </div>
            <p className="category-name">{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
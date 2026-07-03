// import "../styles/CategoryArchGrid.css";
// import { useNavigate } from "react-router-dom";

// import arch1 from "../assets/arch1.webp";
// import arch2 from "../assets/arch2.webp";
// import arch3 from "../assets/arch3.webp";
// import arch4 from "../assets/arch4.webp";
// import arch5 from "../assets/arch5.webp";
// import arch6 from "../assets/arch6.webp";
// import arch7 from "../assets/arch7.webp";
// import arch8 from "../assets/arch8.webp";

// const categories = [
//   { id: 1, image: arch4, name: "Suit Sets",   path: "/suit-sets"   },
//   { id: 2, image: arch3, name: "Dresses",     path: "/dresses"     },
//   { id: 3, image: arch2, name: "Kurta Sets",  path: "/kurta-sets"  },
//   { id: 4, image: arch1, name: "Maxis",       path: "/maxis"       },
//   { id: 5, image: arch6, name: "Lehengas",    path: "/lehengas"    },
//   { id: 6, image: arch5, name: "Sarees",      path: "/sarees"      },
//   { id: 7, image: arch8, name: "Co-ord Sets", path: "/coord-sets"  },
//   { id: 8, image: arch7, name: "Shrug Sets",  path: "/shrug-sets"  },
// ];

// export default function CategoryArchGrid() {
//   const navigate = useNavigate();

//   return (
//     <section className="arch-section">
//       <div className="arch-grid">
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className="arch-card"
//             onClick={() => navigate(cat.path)}
//           >
//             <img
//               src={cat.image}
//               alt={cat.name}
//               className="arch-img"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
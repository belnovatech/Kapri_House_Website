import "../styles/ProductDetails.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ZoomImage from "./ZoomImage";

export default function ProductDetails() {
  const { state } = useLocation();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const [formTab, setFormTab] = useState("enter");
  const [guideTab, setGuideTab] = useState("measure");
  const [measureMode, setMeasureMode] = useState("standard");
  const [showSizeChart, setShowSizeChart] = useState(false);

  // NEW — size chart state
  const [sizeChartUnit, setSizeChartUnit] = useState("in");
  const [sizeChartTab, setSizeChartTab] = useState("chart");

  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hip: "",
    shoulder: "",
    armhole: "",
    sleeveLength: "",
    neck: "",
    topLength: "",
    height: "",
    weight: "",
  });

  if (!state) return <h2>No Product Found</h2>;

  const images = [state.image, state.image, state.image, state.image];

  const handleMeasurementChange = (field, value) => {
    setMeasurements((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveMeasurements = () => {
    const required = ["bust", "waist", "hip", "shoulder", "sleeveLength", "height"];
    const missing = required.filter((field) => !measurements[field]);
    if (missing.length > 0) {
      alert("Please fill all required measurement fields");
      return;
    }
    const customSizeData = JSON.parse(localStorage.getItem("customSizes")) || {};
    customSizeData[state.title] = { ...measurements, savedAt: new Date().toISOString() };
    localStorage.setItem("customSizes", JSON.stringify(customSizeData));
    alert("Your measurements have been saved!");
  };

  const sizeData = [
    { size: "XS", bust: 32,   waist: 26, hip: 34, shoulder: 13,   sleeve: 21   },
    { size: "S",  bust: 34,   waist: 28, hip: 36, shoulder: 13.5, sleeve: 21.5 },
    { size: "M",  bust: 36,   waist: 30, hip: 38, shoulder: 14,   sleeve: 22   },
    { size: "L",  bust: 38,   waist: 32, hip: 40, shoulder: 14.5, sleeve: 22.5 },
    { size: "XL", bust: 40,   waist: 34, hip: 42, shoulder: 15,   sleeve: 23   },
  ];

  const conv = (v) =>
    sizeChartUnit === "cm" ? (v * 2.54).toFixed(1) : v;

  const measureSteps = [
    { n: 1, label: "Shoulder",      desc: "Measure from one shoulder end to the other" },
    { n: 2, label: "Bust",          desc: "Measure around the fullest part of your bust" },
    { n: 3, label: "Waist",         desc: "Measure around the narrowest part" },
    { n: 4, label: "Hip",           desc: "Measure around the fullest part of your hips" },
    { n: 5, label: "Sleeve Length", desc: "Measure from shoulder point to wrist" },
    { n: 6, label: "Armhole",       desc: "Measure around the armhole" },
    { n: 7, label: "Top Length",    desc: "Measure from highest shoulder point to required length" },
    { n: 8, label: "Neck Size",     desc: "Measure around the base of your neck" },
  ];

  const measurementTips = [
    "Measure over light, fitted clothing for accuracy.",
    "Keep the measuring tape snug but not tight.",
    "Stand naturally — don't pull in your stomach or puff your chest.",
    "Ask someone to help you measure your back and shoulders.",
    "If you fall between two sizes, choose the larger one.",
    "Re-measure if it's been a while since your last measurement.",
  ];

  return (
    <div className="product-page">
      <div className="mtm-banner">
        <h1>Made-to-Measure (Custom Stitching)</h1>
        <p>Your Measurements, Your Perfect Fit — Stitched Just for You</p>
        <div className="mtm-badges">
          <span>Perfect Fit</span>
          <span>•</span>
          <span>Personalized</span>
          <span>•</span>
          <span>Exclusively Yours</span>
        </div>
      </div>

      <div className="mtm-grid">
        {/* ===== Column 1: Gallery + product info ===== */}
        <div className="mtm-col mtm-product-col">
          <div className="product-gallery">
            <div className="gallery-main">
              <ZoomImage
                key={selectedImage}
                src={images[selectedImage]}
                alt={state.title}
                className="main-image"
              />
            </div>
            <div className="thumb-grid">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setSelectedImage(i)}
                  className={selectedImage === i ? "active-thumb" : ""}
                />
              ))}
            </div>
          </div>

          <h2 className="mtm-product-title">{state.title}</h2>
          <div className="price-row">
            <span className="sale-price">₹{state.price}</span>
            <span className="mrp">₹{state.mrp}</span>
            <span className="discount">{state.discount}</span>
          </div>
          <p className="stock">Only 10 pieces left</p>

          <div className="size-section">
            <h4>Select Size</h4>
            <div className="sizes">
              {["XS", "S", "M", "L", "XL"].map((size) => {
                const isAvailable = state.sizes?.includes(size);
                return (
                  <button
                    key={size}
                    disabled={!isAvailable}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      ${selectedSize === size ? "active-size" : ""}
                      ${!isAvailable ? "disabled-size" : ""}
                    `}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mtm-why-mini">
            <h4>Why Custom Size?</h4>
            <ul>
              <li>✔ Perfect fit for your body</li>
              <li>✔ Stitched just for you</li>
              <li>✔ No alteration needed</li>
              <li>✔ Lower return rate</li>
            </ul>
          </div>

          <div className="qty-box">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>

          <div className="cart-row">
            <button className="cart-btn" disabled>ADD TO CART</button>
            <button
              type="button"
              className="size-chart-link"
              onClick={() => setShowSizeChart(true)}
            >
              📏 Size Chart
            </button>
            <span className="coming-soon">Stay Tuned | Coming Soon</span>
          </div>

          {/* ===== PREMIUM SIZE CHART MODAL ===== */}
          {showSizeChart && (
            <div className="sc-overlay" onClick={() => setShowSizeChart(false)}>
              <div className="sc-modal" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="sc-header">
                  <div>
                    <h3 className="sc-title">Size guide</h3>
                    <p className="sc-subtitle">
                      {sizeChartUnit === "in"
                        ? "All measurements in inches"
                        : "All measurements in centimetres"}{" "}
                      · compare with your body measurements
                    </p>
                  </div>
                  <button
                    type="button"
                    className="sc-close"
                    onClick={() => setShowSizeChart(false)}
                    aria-label="Close size chart"
                  >
                    ✕
                  </button>
                </div>

                {/* Unit toggle */}
                <div className="sc-unit-toggle">
                  <button
                    type="button"
                    className={`sc-unit-btn${sizeChartUnit === "in" ? " active" : ""}`}
                    onClick={() => setSizeChartUnit("in")}
                  >
                    Inches
                  </button>
                  <button
                    type="button"
                    className={`sc-unit-btn${sizeChartUnit === "cm" ? " active" : ""}`}
                    onClick={() => setSizeChartUnit("cm")}
                  >
                    Centimeters
                  </button>
                </div>

                {/* Body */}
                <div className="sc-body">

                  {/* Left: illustration + legend */}
                  <div className="sc-illustration">
                    <svg width="80" height="170" viewBox="0 0 80 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="40" cy="16" rx="11" ry="13" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
                      <path d="M25 32 Q20 44 18 60 L18 80 Q18 84 22 84 L58 84 Q62 84 62 80 L62 60 Q60 44 55 32 Q48 28 40 28 Q32 28 25 32Z" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
                      <path d="M18 38 Q10 42 8 60 Q7 72 10 78 L16 76 Q14 66 15 54 L20 44Z" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
                      <path d="M62 38 Q70 42 72 60 Q73 72 70 78 L64 76 Q66 66 65 54 L60 44Z" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
                      <path d="M22 84 Q20 106 20 128 L26 128 Q27 106 30 84Z" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
                      <path d="M58 84 Q60 106 60 128 L54 128 Q53 106 50 84Z" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
                      <path d="M26 128 Q24 148 25 162 L31 162 Q31 148 32 128Z" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
                      <path d="M54 128 Q56 148 55 162 L49 162 Q49 148 48 128Z" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
                      {/* Shoulder */}
                      <line x1="25" y1="35" x2="55" y2="35" stroke="#EF9F27" strokeWidth="1.2" strokeDasharray="3,2"/>
                      <circle cx="25" cy="35" r="2.5" fill="#EF9F27"/>
                      <circle cx="55" cy="35" r="2.5" fill="#EF9F27"/>
                      {/* Bust */}
                      <line x1="16" y1="46" x2="64" y2="46" stroke="#d8707d" strokeWidth="1.2" strokeDasharray="3,2"/>
                      <circle cx="16" cy="46" r="2.5" fill="#d8707d"/>
                      <circle cx="64" cy="46" r="2.5" fill="#d8707d"/>
                      {/* Waist */}
                      <line x1="17" y1="62" x2="63" y2="62" stroke="#5DCAA5" strokeWidth="1.2" strokeDasharray="3,2"/>
                      <circle cx="17" cy="62" r="2.5" fill="#5DCAA5"/>
                      <circle cx="63" cy="62" r="2.5" fill="#5DCAA5"/>
                      {/* Hip */}
                      <line x1="17" y1="78" x2="63" y2="78" stroke="#7F77DD" strokeWidth="1.2" strokeDasharray="3,2"/>
                      <circle cx="17" cy="78" r="2.5" fill="#7F77DD"/>
                      <circle cx="63" cy="78" r="2.5" fill="#7F77DD"/>
                    </svg>

                    <ul className="sc-legend">
                      {[
                        { color: "#EF9F27", label: "Shoulder" },
                        { color: "#d8707d", label: "Bust" },
                        { color: "#5DCAA5", label: "Waist" },
                        { color: "#7F77DD", label: "Hip" },
                      ].map(({ color, label }) => (
                        <li key={label} className="sc-legend-item">
                          <span className="sc-dot" style={{ background: color }} />
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: tabs + content */}
                  <div className="sc-right">
                    <div className="sc-tabs">
                      <button
                        type="button"
                        className={`sc-tab${sizeChartTab === "chart" ? " active" : ""}`}
                        onClick={() => setSizeChartTab("chart")}
                      >
                        Size chart
                      </button>
                      <button
                        type="button"
                        className={`sc-tab${sizeChartTab === "how" ? " active" : ""}`}
                        onClick={() => setSizeChartTab("how")}
                      >
                        How to measure
                      </button>
                    </div>

                    {sizeChartTab === "chart" && (
                      <>
                        <div className="sc-table-wrap">
                          <table className="sc-table">
                            <thead>
                              <tr>
                                {["Size", "Bust", "Waist", "Hip", "Shoulder", "Sleeve"].map((h) => (
                                  <th key={h}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sizeData.map(({ size, bust, waist, hip, shoulder, sleeve }) => {
                                const isSelected = selectedSize === size;
                                return (
                                  <tr key={size} className={isSelected ? "sc-row-selected" : ""}>
                                    <td className="sc-size-cell">
                                      {size}
                                      {isSelected && (
                                        <span className="sc-your-size">✓ your size</span>
                                      )}
                                    </td>
                                    <td>{conv(bust)}</td>
                                    <td>{conv(waist)}</td>
                                    <td>{conv(hip)}</td>
                                    <td>{conv(shoulder)}</td>
                                    <td>{conv(sleeve)}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                        <p className="sc-tip">
                          Between two sizes? We recommend sizing up for a comfortable, relaxed fit.
                        </p>
                      </>
                    )}

                    {sizeChartTab === "how" && (
                      <ul className="sc-how-list">
                        {[
                          { n: 1, label: "Bust",          desc: "Measure around the fullest part of your chest, keeping the tape parallel to the floor." },
                          { n: 2, label: "Waist",         desc: "Measure around the narrowest part of your torso, usually just above the navel." },
                          { n: 3, label: "Hip",           desc: "Stand with feet together and measure around the fullest part of your hips and seat." },
                          { n: 4, label: "Shoulder",      desc: "Measure from the tip of one shoulder to the other, across the upper back." },
                          { n: 5, label: "Sleeve length", desc: "From the shoulder tip down to your wrist, with arm slightly bent." },
                          { n: 6, label: "Tip",           desc: "Keep the tape snug but not tight. Ask a friend to help for back measurements." },
                        ].map(({ n, label, desc }) => (
                          <li key={n} className="sc-how-item">
                            <span className="sc-step-num">{n}</span>
                            <span><strong>{label}</strong> — {desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* ===== END SIZE CHART MODAL ===== */}
        </div>

        {/* ===== Column 2: Enter Measurements ===== */}
        <div className="mtm-col mtm-form-col">
          <div className="mtm-tabs">
            <button
              className={formTab === "enter" ? "active" : ""}
              onClick={() => setFormTab("enter")}
            >
              Enter Measurements
            </button>
            <button
              className={formTab === "saved" ? "active" : ""}
              onClick={() => setFormTab("saved")}
            >
              Use Saved Profile
            </button>
          </div>

          {formTab === "enter" ? (
            <>
              <div className="mtm-radio-row">
                <label>
                  <input
                    type="radio"
                    checked={measureMode === "standard"}
                    onChange={() => setMeasureMode("standard")}
                  />
                  Standard Measurements
                </label>
                <label>
                  <input
                    type="radio"
                    checked={measureMode === "detailed"}
                    onChange={() => setMeasureMode("detailed")}
                  />
                  Detailed Measurements (Recommended)
                </label>
              </div>

              <h4 className="mtm-section-title">Standard Measurements</h4>
              <p className="custom-size-subtitle">Enter your body measurements in inches</p>

              <div className="custom-size-grid">
                <label>Bust *<input type="number" value={measurements.bust} placeholder="36" onChange={(e) => handleMeasurementChange("bust", e.target.value)} /></label>
                <label>Waist *<input type="number" value={measurements.waist} placeholder="30" onChange={(e) => handleMeasurementChange("waist", e.target.value)} /></label>
                <label>Hip *<input type="number" value={measurements.hip} placeholder="38" onChange={(e) => handleMeasurementChange("hip", e.target.value)} /></label>
                <label>Shoulder *<input type="number" value={measurements.shoulder} placeholder="14" onChange={(e) => handleMeasurementChange("shoulder", e.target.value)} /></label>
                <label>Armhole<input type="number" value={measurements.armhole} placeholder="16" onChange={(e) => handleMeasurementChange("armhole", e.target.value)} /></label>
                <label>Sleeve Length *<input type="number" value={measurements.sleeveLength} placeholder="22" onChange={(e) => handleMeasurementChange("sleeveLength", e.target.value)} /></label>
                <label>Neck Size<input type="number" value={measurements.neck} placeholder="14" onChange={(e) => handleMeasurementChange("neck", e.target.value)} /></label>
                <label>Top Length<input type="number" value={measurements.topLength} placeholder="56" onChange={(e) => handleMeasurementChange("topLength", e.target.value)} /></label>
                <label>Height *<input type="text" value={measurements.height} placeholder={`5'5"`} onChange={(e) => handleMeasurementChange("height", e.target.value)} /></label>
                <label>Weight (Optional)<input type="number" value={measurements.weight} placeholder="60 kg" onChange={(e) => handleMeasurementChange("weight", e.target.value)} /></label>
              </div>

              <button type="button" className="custom-size-save-btn" onClick={handleSaveMeasurements}>
                SAVE &amp; CONTINUE
              </button>
            </>
          ) : (
            <p className="mtm-empty-state">
              No saved measurement profile yet. Switch to "Enter Measurements" and save one.
            </p>
          )}
        </div>

        {/* ===== Column 3: How to Measure ===== */}
        <div className="mtm-col mtm-guide-col">
          <div className="mtm-tabs">
            <button
              className={guideTab === "measure" ? "active" : ""}
              onClick={() => setGuideTab("measure")}
            >
              How to Measure
            </button>
            <button
              className={guideTab === "tips" ? "active" : ""}
              onClick={() => setGuideTab("tips")}
            >
              Measurement Tips
            </button>
          </div>

          {guideTab === "measure" ? (
            <>
              <div className="mtm-guide-image">
                <img src={state.image} alt={`${state.title} measurement guide`} />
              </div>
              <ul className="custom-size-guide-list">
                {measureSteps.map((s) => (
                  <li key={s.n}>
                    <strong>{s.n}. {s.label}</strong> — {s.desc}
                  </li>
                ))}
              </ul>
              {/* <button type="button" className="mtm-video-btn">▶ WATCH VIDEO GUIDE</button> */}
            </>
          ) : (
            <ul className="custom-size-guide-list">
              {measurementTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          )}
        </div>

        {/* ===== Column 4: Sidebar ===== */}
        <div className="mtm-col mtm-sidebar-col">
          <div className="mtm-sidebar-box">
            <h4>Why Made-to-Measure?</h4>
            <ul className="mtm-why-list">
              <li><strong>100% Perfect Fit</strong><span>Outfit stitched according to your unique body measurements</span></li>
              <li><strong>No Alterations Needed</strong><span>Wear it straight out of the package</span></li>
              <li><strong>Lower Return Rate</strong><span>Better fit means happy you</span></li>
              <li><strong>Personalized Experience</strong><span>Your measurements are saved for faster checkout next time</span></li>
              <li><strong>Exclusive for You</strong><span>Every stitch is made just for you</span></li>
            </ul>
          </div>

          <div className="mtm-sidebar-box">
            <div className="mtm-summary-header">
              <h4>Your Measurement Summary</h4>
            </div>
            <div className="mtm-summary-grid">
              <span>Bust</span><span>{measurements.bust || "—"}"</span>
              <span>Waist</span><span>{measurements.waist || "—"}"</span>
              <span>Hip</span><span>{measurements.hip || "—"}"</span>
              <span>Shoulder</span><span>{measurements.shoulder || "—"}"</span>
              <span>Top Length</span><span>{measurements.topLength || "—"}"</span>
              <span>Sleeve Length</span><span>{measurements.sleeveLength || "—"}"</span>
            </div>
          </div>

          <div className="mtm-sidebar-box mtm-order-preview">
            <h4>Order Preview</h4>
            <div className="mtm-order-row">
              <img src={state.image} alt={state.title} />
              <div>
                <p className="mtm-order-title">{state.title}</p>
                <p className="mtm-order-sub">Custom Size</p>
                <p className="mtm-order-price">₹{state.price}</p>
              </div>
            </div>
          <button
  type="button"
  className="custom-size-save-btn"
  disabled={true} // Replace with your condition
>
  PROCEED TO CHECKOUT
</button>
          </div>
        </div>
      </div>

      <div className="mtm-how-it-works">
        <div><span>1</span>Enter Measurements</div>
        <div><span>2</span>We Stitch</div>
        <div><span>3</span>Quality Check</div>
        <div><span>4</span>Dispatched</div>
        <div><span>5</span>Perfect Fit</div>
      </div>

      <div className="description">
        <h3>Description</h3>
        <p>
          Radiate festive charm with the Orange Myra Suit Set. Crafted in rich cotton silk,
          this A-line silhouette features a round neck with a notch, three-quarter sleeves,
          and delicate lace detailing on the yoke and sleeve hems. Paired with matching pants
          and a soft dupatta, this vibrant ensemble is perfect for daytime celebrations and
          intimate festive gatherings.
          {"\n\n"}Model height: 5.6ft{"\n"}Fabric: Georgette{"\n"}Handcrafted in India{"\n"}
          Size: Refer to size chart. Model is wearing size Small.
        </p>
      </div>
    </div>
  );
}
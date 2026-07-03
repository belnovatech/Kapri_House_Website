import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import KurtaSets from "./pages/KurtaSets";
import HeroSlider from "./components/HeroSlider";
import NewArrivalsBanner from "./components/NewArrivalsBanner";
import SuitSets from "./pages/SuitSets";
import ProductSection from "./pages/ProductSection";
import CategorySlider from "./pages/CategorySlider";
import ReelsStrip from "./pages/Reelsstrips";
import FestiveWear from "./pages/FestiveWear";
import EverydayKurtaSets from "./pages/EverydayKurtaSets";
import HolidayDresses from "./pages/HolidayDresses";
import CelebApprovedLooks from "./pages/CelebApprovedLooks";
import WomenOfBunaai from "./pages/WomenOfBunaai";
import FeaturedOn from "./pages/FeaturedOn";
import Footer from "./pages/Footer";
import NewArrivals from "./pages/NewArrivals";
import ProductDetails from "./pages/ProductDetails";
import Dresses from "./pages/Dresses"; // ✅ already imported
// import CategoryArchGrid from "./pages/CategoryArchGrid";
import festiveBanner from "./assets/festivebanner.jpeg";
import kurtaBanner from "./assets/kurta.webp";
import dressesBanner from "./assets/dressban.webp";
import Sarees from "./pages/Sarees";
import CoordSets from "./pages/CoordSets";
import Maxis from "./pages/Maxis";
import Lehengas from "./pages/Lehengas";// ← add this import// ← add this import
// Reusable layout wrapper
import ShrugSets from "./pages/ShrugSets";
import Sale from "./pages/Sale";
// import FarshiSet from "./pages/FarshiSet";
// import ShararaSet from "./pages/ShararaSet";
import ScrollToTop from "./components/ScrollToTop";
function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <HeroSlider />
      <CategorySlider />
      {/* <ReelsStrip /> */}
      <NewArrivalsBanner />
      <ProductSection />
      <div className="banner-wrapper">
        <img src={festiveBanner} alt="Festive Wear" className="banner-img" />
      </div>

      <FestiveWear />

      <div className="banner-wrapper">
        <img src={kurtaBanner} alt="Everyday Kurta Sets" className="banner-img" />
      </div>
      <EverydayKurtaSets />


      <div className="banner-wrapper">
        <img src={dressesBanner} alt="Holiday Dresses" className="banner-img" />
      </div>
      <HolidayDresses />
      <CelebApprovedLooks />
      <WomenOfBunaai />
      {/* <CategoryArchGrid /> */}
       <ReelsStrip />
      <FeaturedOn />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route
          path="/suit-sets"
          element={
            <Layout>
              <SuitSets />
            </Layout>
          }
        />
        {/* <Route
          path="/sharara-set"
          element={
            <Layout>
              <ShararaSet />
            </Layout>
          }
        /> */}
        <Route
          path="/menswear"
          element={
            <Layout>
              <ComingSoon />
            </Layout>
          }
        />
        <Route
          path="/sale"
          element={
            <Layout>
              <Sale />
            </Layout>
          }
        />
        <Route
          path="/new-arrivals"
          element={
            <Layout>
              <NewArrivals />
            </Layout>
          }
        />
        <Route
          path="/kurta-sets"
          element={
            <Layout>
              <KurtaSets />
            </Layout>
          }
        />
        <Route
          path="/dresses"
          element={
            <Layout>
              <Dresses />
            </Layout>
          }
        />
        <Route
          path="/coord-sets"
          element={
            <Layout>
              <CoordSets />
            </Layout>
          }
        />
        <Route
          path="/shrug-sets"
          element={
            <Layout>
              <ShrugSets />
            </Layout>
          }
        />
        <Route
          path="/sarees"
          element={
            <Layout>
              <Sarees />
            </Layout>
          }
        />
        <Route
          path="/lehengas"
          element={
            <Layout>
              <Lehengas />
            </Layout>
          }
        />
        <Route
          path="/maxis"
          element={
            <Layout>
              <Maxis />
            </Layout>
          }
        />
        {/* <Route
          path="/farshi-set"
          element={
            <Layout>
              <FarshiSet />
            </Layout>
          }
        /> */}
        <Route
          path="/product-details"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
import "./index.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./components/Hero";
import Choose from "./components/Choose";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Industries from "./components/Industries";
import Quote from "./components/Quote";
import Locations from "./components/Locations";
import Faqs from "./components/Faqs";
import DigitalSlider from "./components/DigitalSlider";

import Careers from "./Pages/Careers";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import ArmedGuard from "./Pages/Services/ArmedGuard";
import UnarmedGuard from "./Pages/Services/UnarmedGuard";
import PatrolGuard from "./Pages/Services/PatrolGuard";
import EventSecurity from "./Pages/Services/EventSecurity";

import Apartment from "./Pages/industries/Apartment";
import Construction from "./Pages/industries/Construction";
import Warehouse from "./Pages/industries/Warehouse";
import Gated from "./Pages/industries/Gated";
import Factory from "./Pages/industries/Factory";

import NewYork from "./Pages/locations/NewYork";
import Albany from "./Pages/locations/Albany";
import Bronx from "./Pages/locations/Bronx";
import Kings from "./Pages/locations/Kings";
import Queens from "./Pages/locations/Queens";
import Richmond from "./Pages/locations/Richmond";
import Westchester from "./Pages/locations/Westchester";

import RetailSecurity from "./Pages/RetailSecurity";
import ConstructionSecurity from "./Pages/ConstructionSecurity";
import WarehouseSecurity from "./Pages/WarehouseSecurity";
import ParkingSecurity from "./Pages/ParkingSecurity";
import AutoSecurity from "./Pages/AutoSecurity";
import HotelSecurity from "./Pages/HotelSecurity";

import GetFreeQuote from "./Pages/GetFreeQuote";

function Home() {
  return (
    <>
      <Hero />
      <Choose />
      <Services />
      <Clients />
      <Industries />
      <Quote />
      <Locations />
      <Faqs />
      <DigitalSlider />
    </>
  );
}

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/armed-guard" element={<ArmedGuard />} />
        <Route path="/services/unarmed-guard" element={<UnarmedGuard />} />
        <Route path="/services/mobile-patrol" element={<PatrolGuard />} />
        <Route path="/services/event-security" element={<EventSecurity />} />

        <Route path="/industries/apartment" element={<Apartment />} />
        <Route path="/industries/construction" element={<Construction />} />
        <Route path="/industries/factory" element={<Factory />} />
        <Route path="/industries/gated-community" element={<Gated />} />
        <Route path="/industries/warehouse" element={<Warehouse />} />

        <Route path="/locations/new-york" element={<NewYork />} />
        <Route path="/locations/albany" element={<Albany />} />
        <Route path="/locations/bronx" element={<Bronx />} />
        <Route path="/locations/kings" element={<Kings />} />
        <Route path="/locations/queens" element={<Queens />} />
        <Route path="/locations/richmond" element={<Richmond />} />
        <Route path="/locations/westchester" element={<Westchester />} />

        <Route path="/retail-security" element={<RetailSecurity />} />
        <Route path="/construction-security" element={<ConstructionSecurity />} />
        <Route path="/warehouse-security" element={<WarehouseSecurity />} />
        <Route path="/parking-security" element={<ParkingSecurity />} />
        <Route path="/auto-security" element={<AutoSecurity />} />
        <Route path="/hotel-security" element={<HotelSecurity />} />

        <Route path="/choose" element={<Choose />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-free-quote" element={<GetFreeQuote />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
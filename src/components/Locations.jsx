import React, { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import MapBg from "../assets/Home/map-bg.jpg"; // apni map image

const locations = [
  { id: 1, name: "Albany", link: "/locations/albany" },
  { id: 2, name: "Bronx", link: "/locations/bronx" },
  { id: 3, name: "Kings", link: "/locations/kings" },
  { id: 4, name: "New York", link: "/locations/new-york" },
  { id: 5, name: "Queens", link: "/locations/queens" },
  { id: 6, name: "Richmond", link: "/locations/richmond" },
  { id: 7, name: "Westchester", link: "/locations/westchester" },
];

export default function Locations() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(14,165,233,.82),rgba(14,165,233,.82)),url(${MapBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h2 className="text-5xl font-bold text-white">
            Areas We Serve
          </h2>

          <p className="text-sky-100 mt-3 text-lg">
            Providing security services across New York
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {locations.map((location, index) => (
            <Link
  key={location.id}
  to={location.link}
  data-aos="zoom-in"
  data-aos-delay={index * 100}
  className="group
  flex items-center
  h-[70px]
  px-7
  rounded-xl
  bg-white/25
  backdrop-blur-md
  border border-white/30
  shadow-lg
  hover:bg-white
  hover:-translate-y-1
  hover:shadow-2xl
  transition-all duration-200"
>
  
              <FaMapMarkerAlt
                className="text-red-500 text-2xl mr-4 group-hover:scale-110 transition duration-300"
              />

              <span className="text-xl font-semibold text-white group-hover:text-sky-600 transition duration-300">
                {location.name}
              </span>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
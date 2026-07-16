import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Auto from "../assets/industry/auto.jpg";
import Construction from "../assets/industry/construction.jpg";
import Hotel from "../assets/industry/hotel.jpg";
import Parking from "../assets/industry/parking.jpg";
import Retail from "../assets/industry/retail.jpg";
import Warehouse from "../assets/industry/warehouse.jpg";
import { Link } from "react-router-dom";


const services = [
  {
    id: 1,
    title: "Retail Security",
    image: Retail,
    route: "/retail-security",
    description:
      "We provide professional security services for retail stores, preventing theft and ensuring a safe shopping experience.",
  },
  {
    id: 2,
    title: "Construction Site Security",
    image: Construction,
    route: "/construction-security",
    description:
      "Our guards protect construction sites from theft, vandalism, and unauthorized access, ensuring safety around the clock.",
  },
  {
    id: 3,
    title: "Factories & Warehouses",
    image: Warehouse,
    route: "/warehouse-security",
    description:
      "24/7 industrial security services with regular patrol and surveillance.",
  },
  {
    id: 4,
    title: "Parking Lot Security",
    image: Parking,
    route: "/parking-security",
    description:
      "Our parking security solutions prevent unauthorized access, theft, and ensure safe vehicle management.",
  },
  {
    id: 5,
    title: "Auto Dealership Security",
    image: Auto,
    route: "/auto-security",
    description:
      "Our security services protect auto dealerships from theft, vandalism, and unauthorized access.",
  },
  {
    id: 6,
    title: "Hotel Security",
    image: Hotel,
    route: "/hotel-security",
    description:
      "We provide professional hotel security to safeguard guests, staff, and property.",
  },
];

export default function Industries() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div
          className="text-center mb-14"
          data-aos="fade-down"
        >
          <h2 className="text-5xl font-bold text-gray-900">
            Industries We Serve
          </h2>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            We provide top-tier security solutions tailored to different industries.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={service.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 30} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>

                <Link
                  to={service.route}
                  className="inline-block mt-6 px-5 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
                >
                  Learn More →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
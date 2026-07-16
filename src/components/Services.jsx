import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import Servicebg from "../assets/Home/service-bg.jpg";
import Armed from "../assets/Home/Armed.jpg";
import Unarmed from "../assets/Home/Unarmed.jpg";
import Patrol from "../assets/Home/Patrol.jpg";

const services = [
  {
    id: 1,
    title: "Armed Guard Services",
    image: Armed,
    path: "/services/armed-guard",
    description:
      "Our licensed armed security guards provide unparalleled protection in high-risk environments, expertly trained to handle complex situations.",
  },
  {
    id: 2,
    title: "Unarmed Guard Services",
    image: Unarmed,
    path: "/services/unarmed-guard",
    description:
      "Our skilled unarmed guards deliver vigilant security and exceptional customer service, ensuring peace of mind and a secure environment.",
  },
  {
    id: 3,
    title: "Patrol Security",
    image: Patrol,
    path: "/services/mobile-patrol",
    description:
      "Our patrol security teams offer comprehensive monitoring and rapid response, safeguarding your property with proactive vigilance and expertise.",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // 🔥 Har baar animation chalega
      mirror: true, // 🔥 Upar scroll karoge tab bhi animation
    });
  }, []);

  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${Servicebg})` }}
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div data-aos="zoom-in">
          <h2 className="text-4xl font-bold text-center text-white">
            Our Services
          </h2>

          <p className="text-center text-gray-200 mt-3 mb-12">
            Professional Security Solutions for Every Need
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 200}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="h-72">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>

                <Link
                  to={service.path}
                  className="inline-block mt-6 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
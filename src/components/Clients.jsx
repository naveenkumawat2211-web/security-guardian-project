import React, { useEffect } from "react";
import { FaUserCircle, FaQuoteRight } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const clients = [
  {
    name: "Sophia Green",
    role: "Property Manager, Hudson Apartments",
    review:
      "Security Guardian has been a trusted partner for our residential properties. Their quick response and professionalism.",
  },
  {
    name: "Anthony Rivera",
    role: "Owner, Rivera Retail Stores",
    review:
      "Security Guardian has been outstanding in protecting our retail locations. Their guards are alert and professional.",
  },
  {
    name: "Linda Chen",
    role: "Manager, Midtown Hotel Group",
    review:
      "We rely on Security Guardian for hotel security, and they consistently deliver peace of mind for our guests and staff.",
  },
  {
    name: "Michael Scott",
    role: "Operations Head, Factory Zone",
    review:
      "Very reliable team. Their security officers are always punctual and highly trained.",
  },
  {
    name: "Emma Watson",
    role: "Director, Green Mall",
    review:
      "Professional, responsive and dependable security company. Highly recommended.",
  },
  {
    name: "James Parker",
    role: "CEO, Parker Logistics",
    review:
      "Excellent patrol services and outstanding customer support. We feel much safer.",
  },
];

export default function Clients() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div
          className="text-center mb-14"
          data-aos="fade-down"
        >
          <h2 className="text-5xl font-bold text-gray-900">
            Our Clients Say
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Here's what our satisfied clients have to say about our security
            solutions.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {clients.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="zoom-in"
                className="border-2 border-sky-500 rounded-md p-7 bg-white shadow-md hover:shadow-xl transition duration-500 h-[200px] flex flex-col justify-between"
              >
                <div className="flex justify-between">

                  <div className="flex items-center gap-4">
                    <FaUserCircle
                      size={42}
                      className="text-sky-500 "
                    />

                    <div>
                      <h3 className="font-bold text-2xl">
                        {item.name}
                      </h3>

                      <p className="text-sky-500 text-sm">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <FaQuoteRight
                    size={35}
                    className="text-sky-500"
                  />

                </div>

                <p className="italic text-gray-600 leading-8 mt-2">
                  "{item.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
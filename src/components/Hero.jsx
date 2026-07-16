import React, { useEffect } from "react";
import Hero1 from "../assets/sliderImages/Hero1.jpg";
import Hero2 from "../assets/sliderImages/Hero2.jpg";
import Hero3 from "../assets/sliderImages/Hero3.jpg";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const slides = [
    {
      image: Hero1,
      title: "Professional Security Guard Services",
      city: "Texas",
      desc: "Providing trusted security solutions with trained and licensed security guards for homes, offices, industries and events.",
    },
    {
      image: Hero2,
      title: "Reliable Protection For Your Business",
      city: "Texas",
      desc: "24/7 security monitoring with experienced guards ensuring complete safety and peace of mind.",
    },
    {
      image: Hero3,
      title: "Your Safety Is Our Priority",
      city: "Texas",
      desc: "Professional armed and unarmed security services tailored to your security requirements.",
    },
  ];

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop
      speed={1200}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[85vh] overflow-hidden">

            {/* Background Image */}

            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover scale-105 animate-[pulse_8s_linear_infinite]"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

            {/* Content */}

            <div className="absolute inset-0 flex items-center">

              <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="max-w-2xl">

                  <h4
                    data-aos="fade-right"
                    className="uppercase tracking-[4px] text-sky-400 font-semibold mb-4"
                  >
                    Trusted Security Company
                  </h4>

                  <h1
                    data-aos="fade-up"
                    className="text-white text-4xl md:text-6xl font-bold leading-tight"
                  >
                    {slide.title} in{" "}
                    <span className="text-sky-400">
                      {slide.city}
                    </span>
                  </h1>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-gray-200 mt-6 text-lg leading-8"
                  >
                    {slide.desc}
                  </p>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="mt-8 flex flex-wrap gap-5"
                  >

                    <Link
                      to="/get-free-quote"
                      className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105"
                    >
                      Get Free Quote
                    </Link>

                    <Link
                      to="/Choose"
                      className="bg-white text-sky-500 hover:bg-sky-500 hover:text-white border border-white px-8 py-4 rounded-full font-semibold transition duration-300"
                    >
                      Learn More →
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
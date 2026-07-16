import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import chooseus from "../assets/sliderImages/chooseus.jpg";

export default function Choose() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">

            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-5">
                Why Choose{" "}
                <span className="text-sky-500">Security Guardian?</span>
              </h2>

              <p className="text-gray-600 leading-8 mb-8">
                At Security Guardian, we do more than supply security staff —
                we provide complete protection. With licensed professionals,
                round-the-clock support, and a dedication to reliability,
                your safety and peace of mind remain our highest priority.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white p-5 rounded-xl shadow-lg mb-5 hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-xl font-bold mb-2">
                Licensed & Trained Guards
              </h3>
              <p className="text-gray-600">
                Our security officers are fully licensed and receive regular
                professional training to maintain the highest standards of
                safety and security.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="bg-white p-5 rounded-xl shadow-lg mb-5 hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-xl font-bold mb-2">
                Trusted by Businesses
              </h3>
              <p className="text-gray-600">
                From small businesses to large organizations, clients trust us
                for dependable, professional, and reliable security services.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-xl font-bold mb-2">
                24/7 Monitoring
              </h3>
              <p className="text-gray-600">
                We provide round-the-clock monitoring with rapid response teams,
                ensuring complete protection whenever you need it.
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="zoom-in-left"
          >
            <img
              src={chooseus}
              alt="Why Choose Us"
              className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
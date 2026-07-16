import React from "react";
import careersImg from "../assets/sliderImages/careers.png";
import CareersForm from "./Careersform";

export default function Careers() {
  return (
    <>
    <section className="relative h-[450px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={careersImg}
        alt="Career Background"
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-[zoom_8s_linear_infinite_alternate]"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div data-aos="zoom-in" className="relative z-10 flex h-full w-full items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
          Careers with Security Guardian
        </h1>
      </div>
    </section>
    <CareersForm/>
    </>
  );
}
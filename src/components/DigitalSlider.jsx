import React from "react";


import Spring from "../assets/logos/spring.png";
import Node from "../assets/logos/node.png";
import Bitcoin from "../assets/logos/bitcoin.png";
import Ethereum from "../assets/logos/ethereum.png";
import Mysql from "../assets/logos/mysql.png";
import Devops from "../assets/logos/devops.png";
import ReactLogo from "../assets/logos/react.png";
import Swagger from "../assets/logos/swagger.png";

const logos = [
  Spring,
  Node,
  Bitcoin,
  Ethereum,
  Mysql,
  Devops,
  ReactLogo,
  Swagger,
];

export default function DigitalSlider() {
  return (
    <section className="bg-white py-8 overflow-hidden border-y border-gray-200">
      <div className="relative w-full overflow-hidden">

        <div className="flex animate-marquee whitespace-nowrap">

          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center min-w-[180px] px-10"
            >
              <img
                src={logo}
                alt="logo"
                className="h-20 object-contain   hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
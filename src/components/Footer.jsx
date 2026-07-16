import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import logo from "../assets/logos/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-5 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="w-20 h-20 mb-5 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Security Guardian"
                className="w-full hover:scale-105 transition duration-300"
              />
            </Link>

            <p className="leading-8 text-lg text-sky-50">
              Your Safety, Our Priority – Serving New York with Trusted
              Security Services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6 relative inline-block after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-[2px] after:bg-white">
              SERVICES
            </h3>

            <ul className="space-y-5 mt-8">
              <li>
                <Link
                  to="/services/armed-guard"
                  className="flex items-center gap-3 hover:translate-x-2 hover:text-blue-600 transition-all duration-300"
                >
                  <FaChevronRight />
                  Armed Guard
                </Link>
              </li>

              <li>
                <Link
                  to="/services/unarmed-guard"
                  className="flex items-center gap-3 hover:translate-x-2 hover:text-blue-600  transition-all duration-300"
                >
                  <FaChevronRight />
                  Unarmed Guard
                </Link>
              </li>

              <li>
                <Link
                  to="/services/mobile-patrol"
                  className="flex items-center gap-3 hover:translate-x-2 hover:text-blue-600  transition-all duration-300"
                >
                  <FaChevronRight />
                  Mobile Patrol
                </Link>
              </li>

              <li>
                <Link
                  to="/services/event-security"
                  className="flex items-center gap-3 hover:translate-x-2 hover:text-blue-600  transition-all duration-300"
                >
                  <FaChevronRight />
                  Event Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 relative inline-block after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-[2px] after:bg-white">
              QUICK LINKS
            </h3>

            <ul className="space-y-5 mt-8">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 hover:translate-x-2 hover:text-blue-600  transition-all duration-300"
                >
                  <FaChevronRight />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-3 hover:translate-x-2 hover:text-blue-600  transition-all duration-300"
                >
                  <FaChevronRight />
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 hover:translate-x-2 hover:text-blue-600  transition-all duration-300"
                >
                  <FaChevronRight />
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="flex items-center gap-3 hover:translate-x-2 hover:text-blue-600  transition-all duration-300"
                >
                  <FaChevronRight />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6 relative inline-block after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-[2px] after:bg-white">
              CONTACT
            </h3>

            <div className="space-y-6 mt-8">
              <div className="flex gap-4 items-start hover:translate-x-2 transition-all duration-300">
                <FaMapMarkerAlt className="text-xl mt-1" />
                <span>New York, USA</span>
              </div>

              <div className="flex gap-4 items-start hover:translate-x-2 transition-all duration-300">
                <FaEnvelope className="text-xl mt-1" />
                <span>info@securityguardian.com</span>
              </div>

              <div className="flex gap-4 items-start hover:translate-x-2 transition-all duration-300">
                <FaPhoneAlt className="text-xl mt-1" />
                <span>+1 (123) 456-7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sky-300 my-6  "></div>

        {/* Counties */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-lg">
  {[
    { name: "Albany County", path: "/locations/albany" },
    { name: "Bronx County", path: "/locations/bronx" },
    { name: "Kings County", path: "/locations/kings" },
    { name: "New York County", path: "/locations/new-york" },
    { name: "Queens County", path: "/locations/queens" },
    { name: "Richmond County", path: "/locations/richmond" },
    { name: "Westchester County", path: "/locations/westchester" },
  ].map((county, index) => (
    <React.Fragment key={county.name}>
      <Link
        to={county.path}
        className="hover:text-blue-600 transition-all duration-300"
      >
        {county.name}
      </Link>

      {index !== 6 && (
        <span className="hidden md:block text-sky-200">|</span>
      )}
    </React.Fragment>
  ))}
</div>
      </div>

      {/* Bottom */}
      <div className="bg-sky-700 py-4">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Security Guardian. All Rights Reserved.</p>

          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-black transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="hover:text-black  transition-all duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
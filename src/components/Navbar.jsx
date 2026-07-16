import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaAlignJustify,
  FaChevronDown,
  FaEnvelope,
  FaPhoneAlt,
  FaTimes,
  FaShieldAlt,
} from "react-icons/fa";

import Logo from "../assets/logos/logo2.png";

const menus = [
  {
    title: "Services",
    items: [
      {
        name: "Armed Guard",
        path: "/services/armed-guard",
      },
      {
        name: "Unarmed Guard",
        path: "/services/unarmed-guard",
      },
      {
        name: "Mobile Patrol",
        path: "/services/mobile-patrol",
      },
      {
        name: "Event Security",
        path: "/services/event-security",
      },
    ],
  },

  {
    title: "Industries",
    items: [
      {
        name: "Apartment Security",
        path: "/industries/apartment",
      },
      {
        name: "Construction Security",
        path: "/industries/construction",
      },
      {
        name: "Factory Security",
        path: "/industries/factory",
      },
      {
        name: "Gated Community",
        path: "/industries/gated-community",
      },
      {
        name: "Warehouse Security",
        path: "/industries/warehouse",
      },
    ],
  },

  {
    title: "Locations",
    items: [
      {
        name: "New York",
        path: "/locations/new-york",
      },
      {
        name: "Albany",
        path: "/locations/albany",
      },
      {
        name: "Bronx",
        path: "/locations/bronx",
      },
      {
        name: "Kings",
        path: "/locations/kings",
      },
      {
        name: "Queens",
        path: "/locations/queens",
      },
      {
        name: "Richmond",
        path: "/locations/richmond",
      },
      {
        name: "Westchester",
        path: "/locations/westchester",
      }
    ],
  },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [drop, setDrop] = useState(null);

  return (
   <header className="sticky top-0 z-[9999] bg-white shadow-md">

      {/* Top Bar */}

      <div className="hidden lg:flex justify-end gap-8 bg-sky-600 text-white px-10 py-2 text-sm">

        <span className="flex items-center gap-2">
          <FaPhoneAlt />
          +91 7597386XXX
        </span>

        <span className="flex items-center gap-2">
          <FaEnvelope />
          info@securityguardian.com
        </span>

      </div>

      {/* Main Navbar */}

      <div className="max-w-7xl mx-auto px-4 h-16 lg:h-24 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMobile(false)}
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-16 sm:w-20 lg:w-24 hover:scale-105 transition"
          />

          <div className="hidden lg:block">
            <h2 className="font-bold text-xl">
              Security Guardian
            </h2>

            <p className="text-xs text-gray-500">
              Trusted Protection Service
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center">

          <MenuLink title="Home" path="/" />

          {menus.map((menu) => (
            <div key={menu.title} className="relative group">

              <button className="flex items-center gap-2 px-5 py-7 font-semibold hover:text-sky-600 transition">

                {menu.title}

                <FaChevronDown className="text-xs group-hover:rotate-180 transition" />

              </button>

              <div className="absolute left-0 top-full w-56 bg-white rounded-xl shadow-xl border invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

                {menu.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-5 py-3 hover:bg-sky-600 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>

            </div>
          ))}

          <MenuLink title="Careers" path="/careers" />
          <MenuLink title="About" path="/about" />

          <MenuLink title="Contact" path="/contact" />



        </nav>

        {/* Quote Button */}

        <div className="flex items-center gap-5">

          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 transition"
          >
            <FaShieldAlt />
            Get Quote
          </Link>

          {/* Mobile Icon */}

          <button
            onClick={() => setMobile(!mobile)}
            className="lg:hidden text-2xl"
          >
            {mobile ? <FaTimes /> : <FaAlignJustify />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {/* Mobile Menu */}

      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-[9998] overflow-y-auto transition-all duration-300 ${mobile ? "max-h-[calc(100vh-64px)] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-3 space-y-2">
          <MobileLink
            title="Home"
            path="/"
            setMobile={setMobile}
          />

          {menus.map((menu) => (

            <div key={menu.title}>

              <button
                onClick={() =>
                  setDrop(drop === menu.title ? null : menu.title)
                }
                className="flex justify-between items-center w-full py-2 text-sm font-semibold"
              >

                {menu.title}

                <FaChevronDown
                  className={`transition ${drop === menu.title ? "rotate-180" : ""
                    }`}
                />

              </button>

              <div
                className={`overflow-hidden transition-all ${drop === menu.title ? "max-h-60 mt-2" : "max-h-0"
                  }`}
              >

                {menu.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobile(false)}
                    className="block pl-5 py-1.5 text-sm hover:text-sky-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

            </div>

          ))}

          <MobileLink
            title="Careers"
            path="/careers"
            setMobile={setMobile}
          />
          <MobileLink
            title="About"
            path="/about"
            setMobile={setMobile}
          />

          <MobileLink
            title="Contact"
            path="/contact"
            setMobile={setMobile}
          />



        </div>

      </div>

    </header>
  );
}

/* Desktop Links */

function MenuLink({ title, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `block py-1.5 text-sm font-semibold ${isActive
          ? "text-sky-600"
          : "text-gray-700 hover:text-sky-600"
        }`
      }
    >
      {title}
    </NavLink>
  );
}

/* Mobile Links */

function MobileLink({ title, path, setMobile }) {
  return (
    <NavLink
      to={path}
      onClick={() => setMobile(false)}
      className={({ isActive }) =>
        `block py-2 font-semibold ${isActive
          ? "text-sky-600"
          : "text-gray-700 hover:text-sky-600"
        }`
      }
    >
      {title}
    </NavLink>
  );
}
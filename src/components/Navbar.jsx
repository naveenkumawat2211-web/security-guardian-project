import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaAlignJustify,
  FaChevronDown,
  FaEnvelope,
  FaPhoneAlt,
  FaTimes,
  FaShieldAlt,
  FaChevronRight,
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

  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobile]);



  return (
    <header className="sticky top-0 z-[9999] bg-white shadow-md">

      {/* Top Bar */}
      <div className="hidden lg:flex items-center justify-between bg-sky-700 text-white px-10 py-2 text-sm">
        <div className="flex items-center gap-8">
          <span className="flex items-center gap-2 hover:text-sky-200 transition">
            <FaPhoneAlt className="text-xs" />
            +91 7597386XXX
          </span>

          <span className="flex items-center gap-2 hover:text-sky-200 transition">
            <FaEnvelope className="text-xs" />
            info@securityguardian.com
          </span>
        </div>

        <span className="text-sky-100">
          Trusted Security Services 24/7
        </span>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobile(false)}
            className="flex items-center gap-3"
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-14 sm:w-16 lg:w-20 transition-transform duration-300 hover:scale-105"
            />

            <div className="hidden lg:block">
              <h2 className="text-xl font-bold text-slate-800">
                Security Guardian
              </h2>

              <p className="text-xs text-slate-500 tracking-wide">
                Trusted Protection Service
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center   gap-2">
            <div className="flex items-center gap-2 rounded-lg px-2 py-2 font-semibold text-slate-700 transition-all duration-300 hover:bg-sky-50 hover:text-sky-600"> <MenuLink title="Home" path="/" /></div>


            {menus.map((menu) => (
              <div key={menu.title} className="relative group">

                <button className="flex items-center gap-2 rounded-lg px-4 py-3 font-semibold text-slate-700 transition-all duration-300 hover:bg-sky-50 hover:text-sky-600">

                  {menu.title}

                  <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-gray-100 bg-white shadow-2xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">

                  {menu.items.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-5 py-3 text-sm transition-all ${isActive
                          ? "bg-sky-600 text-white"
                          : "text-slate-700 hover:bg-sky-50 hover:text-sky-600"
                        }`
                      }
                    >
                      <span>{item.name}</span>

                      <FaChevronRight className="text-[11px]" />
                    </NavLink>
                  ))}

                </div>

              </div>
            ))}


            <MenuLink title="Careers" path="/careers" />
            <MenuLink title="About" path="/about" />
            <MenuLink title="Contact" path="/contact" />



          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-white font-medium shadow-lg shadow-sky-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
            >
              <FaShieldAlt />
              Get Quote
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobile(!mobile)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm transition hover:bg-sky-50 hover:text-sky-600"
            >
              {mobile ? <FaTimes size={20} /> : <FaAlignJustify size={20} />}
            </button>

          </div>

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
                className={`transition-all duration-300 ${drop === menu.title
                  ? "mobile-dropdown-scroll max-h-56 overflow-y-auto mt-2 pr-1"
                  : "max-h-0 overflow-hidden"
                  }`}
              >

                {menu.items.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobile(false)}
                    className={({ isActive }) =>
                      `group flex items-center justify-between mt-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                        ? "bg-sky-600 text-white border-sky-600 shadow-md"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600 active:scale-[0.98]"
                      }`
                    }
                  >
                    <span>{item.name}</span>

                    <FaChevronRight className="text-xs text-gray-400 transition-all group-hover:text-sky-600 group-hover:translate-x-1" />
                  </NavLink>
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
        `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive
          ? "bg-sky-100 text-sky-600"
          : "text-slate-700 hover:bg-sky-50 hover:text-sky-600"
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
        `block rounded-lg px-3 py-2 font-semibold transition-all duration-200 ${isActive
          ? "bg-sky-100 text-sky-600"
          : "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
        }`
      }
    >
      {title}
    </NavLink>
  );
}
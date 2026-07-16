import React, { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const questions = [
  {
    question:
      "What types of security services does Security Guardian offer in New York?",
    answer:
      "We provide armed and unarmed security guards, mobile patrols, event security, fire watch, and 24/7 monitoring services across New York.",
  },
  {
    question:
      "How do I hire a security guard for my business or event?",
    answer:
      "You can easily request our services by submitting a form on our website or calling our New York office for immediate assistance.",
  },
  {
    question:
      "Are your security guards licensed in New York?",
    answer:
      "Yes, all our guards are fully licensed, trained, and certified under New York state requirements.",
  },
  {
    question:
      "Do you provide security services in all New York counties?",
    answer:
      "Yes, we cover all counties in New York including Albany, Bronx, Queens, Kings, and Westchester County.",
  },
  {
    question:
      "Can I schedule short-term or long-term security contracts?",
    answer:
      "Absolutely. We offer flexible contracts ranging from single-day event coverage to long-term business and residential protection.",
  },
  {
    question:
      "Is emergency security available on short notice?",
    answer:
      "Yes, we provide rapid-response security solutions across New York for urgent needs, available 24/7.",
  },
];

export default function Faqs() {
  const [open, setOpen] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-down"
        >
          <h2 className="text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* FAQ */}

          <div
            className="lg:col-span-2"
            data-aos="fade-right"
          >
            {questions.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="w-full flex justify-between items-center py-6 text-left"
                >
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>

                  {open === index ? (
                    <FaChevronUp className="text-sky-500 text-xl" />
                  ) : (
                    <FaChevronDown className="text-gray-700 text-xl" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    open === index
                      ? "max-h-60 pb-6"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-8 text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Card */}

          <div
            data-aos="fade-left"
            className="bg-sky-100 rounded-xl shadow-lg p-8 h-fit"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              Question Not Answered?
            </h3>

            <p className="text-gray-600 mb-8 leading-7">
              Contact us for further assistance. Our support team is
              available to answer your security-related questions.
            </p>

            <div className="flex items-center gap-4 mb-5">
              <FaEnvelope className="text-sky-500 text-2xl" />
              <span className="text-lg">
                info@securityguardian.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-sky-500 text-2xl" />
              <span className="text-lg">
                +1 (234) 000-777
              </span>
            </div>

            <button className="mt-8 w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold transition duration-300">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
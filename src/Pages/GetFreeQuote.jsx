import React from "react";
import { Link } from "react-router-dom";

export default function GetFreeQuote() {
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-gray-800">
            Get Your Free Security Quote
          </h1>

          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Tell us about your security requirements and our experienced team
            will prepare a customized security solution that fits your needs
            and budget.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="bg-white shadow-xl rounded-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Request a Free Quote?
            </h2>

            <ul className="space-y-5 text-gray-700 text-lg">

              <li>✅ Free Security Consultation</li>

              <li>✅ Customized Security Plan</li>

              <li>✅ Licensed & Experienced Guards</li>

              <li>✅ Affordable Pricing</li>

              <li>✅ 24/7 Customer Support</li>

              <li>✅ Fast Response Time</li>

              <li>✅ Armed & Unarmed Security</li>

              <li>✅ Mobile Patrol Services</li>

              <li>✅ Event & Commercial Security</li>

            </ul>

            <div className="mt-10 p-6 rounded-lg bg-sky-50 border-l-4 border-sky-500">

              <h3 className="text-2xl font-bold text-sky-600 mb-3">
                Need Immediate Assistance?
              </h3>

              <p className="text-gray-600">
                Our team is available 24/7 to discuss your security concerns
                and provide reliable protection for your business, property,
                event, or residential community.
              </p>

            </div>

          </div>

          {/* Form */}

          <div className="bg-white shadow-xl rounded-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Request Your Quote
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              <select
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option>Select Security Service</option>
                <option>Armed Security</option>
                <option>Unarmed Security</option>
                <option>Mobile Patrol</option>
                <option>Event Security</option>
                <option>Retail Security</option>
                <option>Construction Security</option>
                <option>Warehouse Security</option>
                <option>Hotel Security</option>
                <option>Parking Lot Security</option>
              </select>

              <textarea
                rows="5"
                placeholder="Describe your security requirements..."
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
              ></textarea>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-4 pt-2">

                <button
                  type="submit"
                  className="flex-1 bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-lg text-lg font-semibold transition"
                >
                  Submit Request
                </button>

                <Link
                  to="/"
                  className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-lg text-lg font-semibold transition"
                >
                  ← Back to Home
                </Link>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
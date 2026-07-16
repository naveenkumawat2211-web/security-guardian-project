import React from "react";
import { Link } from "react-router-dom";
import Auto from "../assets/industry/auto.jpg";

export default function AutoSecurity() {
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src={Auto}
            alt="Auto Dealership Security"
            className="w-full h-[450px] object-cover"
          />

          <div className="p-10">

            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Auto Dealership Security
            </h1>

            <p className="text-lg text-gray-600 leading-8">
              Our Auto Dealership Security Services provide complete protection
              for vehicle dealerships, showrooms, staff, and customers. We help
              prevent vehicle theft, vandalism, trespassing, and unauthorized
              access while ensuring a secure environment.
            </p>

          </div>

        </div>

        {/* Services */}

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-center mb-10">
            Our Auto Dealership Security Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Showroom Security
              </h3>

              <p className="text-gray-600">
                Protect display vehicles, customers, and dealership property.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Vehicle Patrol
              </h3>

              <p className="text-gray-600">
                Regular patrols across parking lots and storage areas.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                CCTV Monitoring
              </h3>

              <p className="text-gray-600">
                24/7 surveillance to monitor dealership activities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Access Control
              </h3>

              <p className="text-gray-600">
                Secure entry and exit points for visitors and employees.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Theft Prevention
              </h3>

              <p className="text-gray-600">
                Protect expensive vehicles and dealership assets from theft.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Emergency Response
              </h3>

              <p className="text-gray-600">
                Immediate response to alarms and emergency situations.
              </p>
            </div>

          </div>

        </div>

        {/* Why Choose Us */}

        <div className="mt-16 bg-white rounded-xl shadow p-10">

          <h2 className="text-4xl font-bold mb-8">
            Why Choose Our Auto Security?
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✅ Licensed & Experienced Security Guards</li>

            <li>✅ Vehicle Theft Prevention</li>

            <li>✅ 24/7 CCTV Monitoring</li>

            <li>✅ Professional Customer Assistance</li>

            <li>✅ Quick Emergency Response</li>

            <li>✅ Complete Dealership Protection</li>

          </ul>

        </div>

        {/* Benefits */}

        <div className="mt-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            Benefits of Auto Dealership Security
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-orange-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Protect High-Value Vehicles
              </h3>

              <p className="text-gray-600">
                Reduce theft, vandalism, and unauthorized access to vehicles.
              </p>

            </div>

            <div className="bg-orange-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Improve Customer Confidence
              </h3>

              <p className="text-gray-600">
                A secure dealership creates trust and a better buying experience.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 bg-orange-500 text-white rounded-xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Secure Your Auto Dealership Today
          </h2>

          <p className="text-lg mb-8">
            Protect your dealership, staff, customers, and valuable vehicles
            with our professional security solutions.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>

        </div>

        {/* Back */}

        <div className="mt-10">

          <Link
            to="/"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
          >
            ← Back to Home
          </Link>

        </div>

      </div>
    </section>
  );
}
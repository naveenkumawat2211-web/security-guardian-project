import React from "react";
import { Link } from "react-router-dom";
import Parking from "../assets/industry/parking.jpg";

export default function ParkingSecurity() {
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src={Parking}
            alt="Parking Lot Security"
            className="w-full h-[450px] object-cover"
          />

          <div className="p-10">

            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Parking Lot Security
            </h1>

            <p className="text-lg text-gray-600 leading-8">
              Our Parking Lot Security Services provide complete protection for
              vehicles, customers, and employees. We help prevent vehicle theft,
              vandalism, unauthorized parking, and suspicious activities while
              maintaining a safe environment.
            </p>

          </div>

        </div>

        {/* Services */}

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-center mb-10">
            Our Parking Security Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Vehicle Patrol
              </h3>

              <p className="text-gray-600">
                Regular patrols to ensure the safety of parked vehicles.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Access Control
              </h3>

              <p className="text-gray-600">
                Monitor entry and exit points to prevent unauthorized access.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                CCTV Monitoring
              </h3>

              <p className="text-gray-600">
                Live surveillance to detect suspicious activity instantly.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Customer Assistance
              </h3>

              <p className="text-gray-600">
                Helping visitors with directions and emergency support.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Incident Reporting
              </h3>

              <p className="text-gray-600">
                Detailed reporting of accidents, theft, and security incidents.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Emergency Response
              </h3>

              <p className="text-gray-600">
                Immediate action during emergencies and security threats.
              </p>
            </div>

          </div>

        </div>

        {/* Why Choose Us */}

        <div className="mt-16 bg-white rounded-xl shadow p-10">

          <h2 className="text-4xl font-bold mb-8">
            Why Choose Our Parking Security?
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✅ 24/7 Parking Surveillance</li>

            <li>✅ Licensed Security Officers</li>

            <li>✅ Vehicle Theft Prevention</li>

            <li>✅ Customer Safety Assistance</li>

            <li>✅ Fast Emergency Response</li>

            <li>✅ Detailed Incident Reporting</li>

          </ul>

        </div>

        {/* Benefits */}

        <div className="mt-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            Benefits of Parking Security
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-blue-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Protect Vehicles
              </h3>

              <p className="text-gray-600">
                Minimize theft, vandalism, and damage to customer vehicles.
              </p>

            </div>

            <div className="bg-blue-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Increase Customer Confidence
              </h3>

              <p className="text-gray-600">
                A secure parking area creates a better experience for visitors.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 bg-blue-600 text-white rounded-xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Keep Your Parking Area Safe
          </h2>

          <p className="text-lg mb-8">
            Our experienced security officers ensure complete protection for
            parking facilities, customers, and vehicles.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>

        </div>

        {/* Back Button */}

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
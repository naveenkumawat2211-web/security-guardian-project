import React from "react";
import { Link } from "react-router-dom";
import Hotel from "../assets/industry/hotel.jpg";

export default function HotelSecurity() {
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src={Hotel}
            alt="Hotel Security"
            className="w-full h-[450px] object-cover"
          />

          <div className="p-10">

            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Hotel Security Services
            </h1>

            <p className="text-lg text-gray-600 leading-8">
              Our Hotel Security Services ensure the safety of guests,
              employees, visitors, and hotel property. We provide professional
              security officers, CCTV monitoring, access control, and emergency
              response to create a secure and welcoming environment.
            </p>

          </div>

        </div>

        {/* Services */}

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-center mb-10">
            Our Hotel Security Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Guest Safety
              </h3>

              <p className="text-gray-600">
                Ensure a safe and secure environment for all hotel guests.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                CCTV Monitoring
              </h3>

              <p className="text-gray-600">
                24/7 surveillance to monitor entrances, hallways, and common areas.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Access Control
              </h3>

              <p className="text-gray-600">
                Control access to guest rooms, staff areas, and restricted zones.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Lobby Security
              </h3>

              <p className="text-gray-600">
                Professional officers maintain order and assist hotel visitors.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Emergency Response
              </h3>

              <p className="text-gray-600">
                Immediate response to fire alarms, medical emergencies, and security incidents.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Event Security
              </h3>

              <p className="text-gray-600">
                Security services for conferences, weddings, and special hotel events.
              </p>
            </div>

          </div>

        </div>

        {/* Why Choose Us */}

        <div className="mt-16 bg-white rounded-xl shadow p-10">

          <h2 className="text-4xl font-bold mb-8">
            Why Choose Our Hotel Security?
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✅ Professional & Licensed Security Officers</li>

            <li>✅ 24/7 Guest & Property Protection</li>

            <li>✅ Friendly Customer Service</li>

            <li>✅ CCTV & Access Control</li>

            <li>✅ Fast Emergency Response</li>

            <li>✅ Event & VIP Security Services</li>

          </ul>

        </div>

        {/* Benefits */}

        <div className="mt-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            Benefits of Hotel Security
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-purple-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Enhance Guest Confidence
              </h3>

              <p className="text-gray-600">
                Guests feel more comfortable knowing trained professionals are protecting them.
              </p>

            </div>

            <div className="bg-purple-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Protect Hotel Assets
              </h3>

              <p className="text-gray-600">
                Reduce theft, vandalism, and property damage while maintaining a secure environment.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 bg-purple-600 text-white rounded-xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Protect Your Hotel with Professional Security
          </h2>

          <p className="text-lg mb-8">
            Contact us today to discuss a customized hotel security plan tailored to your needs.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
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
import React from "react";
import { Link } from "react-router-dom";
import Construction from "../assets/industry/construction.jpg";

export default function ConstructionSecurity() {
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src={Construction}
            alt="Construction Site Security"
            className="w-full h-[450px] object-cover"
          />

          <div className="p-10">

            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Construction Site Security
            </h1>

            <p className="text-lg text-gray-600 leading-8">
              Construction sites are often targeted for theft, vandalism, and
              unauthorized access. Our trained security officers provide 24/7
              protection to ensure your equipment, materials, and workforce
              remain safe throughout the project.
            </p>

          </div>

        </div>

        {/* Services */}

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-center mb-10">
            Our Construction Security Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">
                24/7 Site Protection
              </h3>

              <p className="text-gray-600">
                Around-the-clock monitoring to secure your construction site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">
                Access Control
              </h3>

              <p className="text-gray-600">
                Monitor workers, visitors, and deliveries entering the site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">
                Equipment Protection
              </h3>

              <p className="text-gray-600">
                Protect valuable tools, machinery, and construction materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">
                Mobile Patrol
              </h3>

              <p className="text-gray-600">
                Regular patrols help detect suspicious activities immediately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">
                CCTV Monitoring
              </h3>

              <p className="text-gray-600">
                Surveillance systems provide complete visibility across the site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">
                Emergency Response
              </h3>

              <p className="text-gray-600">
                Immediate response to accidents, intrusions, and emergencies.
              </p>
            </div>

          </div>

        </div>

        {/* Why Choose Us */}

        <div className="mt-16 bg-white rounded-xl shadow p-10">

          <h2 className="text-4xl font-bold mb-8">
            Why Choose Our Construction Security?
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✅ Licensed & Experienced Security Officers</li>
            <li>✅ 24/7 Site Monitoring</li>
            <li>✅ Theft & Vandalism Prevention</li>
            <li>✅ Visitor & Vehicle Access Control</li>
            <li>✅ Mobile Patrol Services</li>
            <li>✅ Fast Emergency Response</li>

          </ul>

        </div>

        {/* Benefits */}

        <div className="mt-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            Benefits of Construction Site Security
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-yellow-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Reduce Project Delays
              </h3>

              <p className="text-gray-600">
                Prevent theft and damage that can delay construction timelines.
              </p>

            </div>

            <div className="bg-yellow-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Protect Valuable Assets
              </h3>

              <p className="text-gray-600">
                Keep expensive equipment and materials secure at all times.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 bg-yellow-500 text-white rounded-xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Secure Your Construction Site Today
          </h2>

          <p className="text-lg mb-8">
            Let our professional security team protect your project from start
            to finish.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
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
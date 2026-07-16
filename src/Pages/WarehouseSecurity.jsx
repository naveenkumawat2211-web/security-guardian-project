import React from "react";
import { Link } from "react-router-dom";
import Warehouse from "../assets/industry/warehouse.jpg";

export default function WarehouseSecurity() {
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <img
            src={Warehouse}
            alt="Warehouse Security"
            className="w-full h-[450px] object-cover"
          />

          <div className="p-10">

            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Factories & Warehouses Security
            </h1>

            <p className="text-lg text-gray-600 leading-8">
              We provide reliable security solutions for factories,
              warehouses, and industrial facilities. Our professional guards
              help protect inventory, machinery, employees, and business
              operations through 24/7 surveillance and patrol services.
            </p>

          </div>

        </div>

        {/* Services */}

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-center mb-10">
            Our Warehouse Security Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                24/7 Security Guards
              </h3>

              <p className="text-gray-600">
                Continuous protection for your warehouse and industrial property.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Access Control
              </h3>

              <p className="text-gray-600">
                Secure entry and exit points for employees and visitors.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                CCTV Monitoring
              </h3>

              <p className="text-gray-600">
                Monitor every corner of your warehouse using surveillance systems.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Inventory Protection
              </h3>

              <p className="text-gray-600">
                Prevent theft and damage to valuable inventory and equipment.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Mobile Patrol
              </h3>

              <p className="text-gray-600">
                Routine patrols help identify suspicious activities quickly.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-3">
                Emergency Response
              </h3>

              <p className="text-gray-600">
                Immediate response to security incidents and emergencies.
              </p>
            </div>

          </div>

        </div>

        {/* Why Choose Us */}

        <div className="mt-16 bg-white rounded-xl shadow p-10">

          <h2 className="text-4xl font-bold mb-8">
            Why Choose Our Warehouse Security?
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">

            <li>✅ Highly Trained Security Officers</li>

            <li>✅ Complete Warehouse Surveillance</li>

            <li>✅ Inventory & Asset Protection</li>

            <li>✅ Visitor & Vehicle Management</li>

            <li>✅ Fast Emergency Response</li>

            <li>✅ 24/7 Monitoring & Patrol</li>

          </ul>

        </div>

        {/* Benefits */}

        <div className="mt-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            Benefits of Warehouse Security
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-green-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Protect Valuable Assets
              </h3>

              <p className="text-gray-600">
                Keep your products, equipment, and machinery safe from theft
                and damage.
              </p>

            </div>

            <div className="bg-green-50 rounded-xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Improve Workplace Safety
              </h3>

              <p className="text-gray-600">
                Create a secure working environment for employees and visitors.
              </p>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-16 bg-green-600 text-white rounded-xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Secure Your Warehouse Today
          </h2>

          <p className="text-lg mb-8">
            Our experienced security team is ready to protect your warehouse,
            factory, inventory, and staff 24 hours a day.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
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
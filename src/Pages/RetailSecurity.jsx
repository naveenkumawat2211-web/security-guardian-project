import React from "react";
import { Link } from "react-router-dom";
import Retail from "../assets/industry/retail.jpg";

export default function RetailSecurity() {
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">

        <img
          src={Retail}
          alt="Retail Security"
          className="w-full h-[450px] object-cover"
        />

        <div className="p-10">

          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Retail Security Services
          </h1>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            Our Retail Security Services are designed to protect your store,
            employees, customers, and merchandise. Our highly trained security
            officers help prevent theft, reduce shoplifting, monitor suspicious
            activities, and create a safe shopping environment.
          </p>

          <p className="text-gray-600 text-lg leading-8">
            Whether you operate a shopping mall, supermarket, boutique, or
            department store, our security team provides professional protection
            with excellent customer service.
          </p>

          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-5">
              Our Services Include
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div className="bg-sky-50 p-5 rounded-lg">
                ✔ Loss Prevention
              </div>

              <div className="bg-sky-50 p-5 rounded-lg">
                ✔ Shoplifting Prevention
              </div>

              <div className="bg-sky-50 p-5 rounded-lg">
                ✔ Customer Safety
              </div>

              <div className="bg-sky-50 p-5 rounded-lg">
                ✔ CCTV Monitoring
              </div>

              <div className="bg-sky-50 p-5 rounded-lg">
                ✔ Emergency Response
              </div>

              <div className="bg-sky-50 p-5 rounded-lg">
                ✔ Access Control
              </div>

              <div className="bg-sky-50 p-5 rounded-lg">
                ✔ Mobile Patrol
              </div>

              <div className="bg-sky-50 p-5 rounded-lg">
                ✔ Incident Reporting
              </div>

            </div>

          </div>

          <div className="mt-12">

            <h2 className="text-3xl font-bold mb-4">
              Why Choose Us?
            </h2>

            <ul className="space-y-3 text-gray-700 text-lg list-disc ml-6">
              <li>Licensed & Professional Security Guards</li>
              <li>24/7 Security Coverage</li>
              <li>Affordable Pricing</li>
              <li>Quick Emergency Response</li>
              <li>Highly Trained Staff</li>
              <li>Customized Security Plans</li>
            </ul>

          </div>

          <div className="mt-12 flex gap-4">

            <Link
              to="/"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
            >
              ← Back
            </Link>

            <button className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600">
              Request a Quote
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
import React from 'react'
import Services from '../../components/Services'
import Quote from '../../components/Quote'
import apartmentBanner from '../../assets/insdustries/apartment.jpg'
import { Link } from 'react-router-dom'

export default function Apartment() {
  return (
    <>
      <section className="relative h-[520px] overflow-hidden">
        {/* Background Image */}
        <img
          src={apartmentBanner}
          alt="Apartment Security"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div data-aos="zoom-in" className="relative z-10 flex items-center justify-center h-full px-5">
          <h1 className="text-center text-white text-4xl md:text-5xl font-bold leading-tight">
            Apartment and Condominium Security Services
          </h1>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-10">

            {/* Left Content */}
            <div className="lg:col-span-3">

              <p className="text-gray-600 leading-8 mb-14">
                Apartment and condominium complexes require specialized
                security to protect residents, property, and assets. Our
                trained security professionals provide constant surveillance,
                visitor verification, and quick emergency response to ensure
                a safe and peaceful living environment.
              </p>

              <h2 className="text-4xl font-bold text-center mb-16">
                Hire Guards for{" "}
                <span className="text-red-500">Apartment</span> and Condos
              </h2>

              <div className="relative">

                {/* Center Line */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-red-500 h-full"></div>

                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div></div>

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -left-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      General Safety & Protection
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Apartment complexes often have multiple entry points,
                      making them potential targets for trespassing or theft.
                      Guards monitor entrances, verify visitors, and provide
                      a visible security presence.
                    </p>
                  </div>

                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Emergency Response
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Guards take immediate action during medical, fire, or
                      security emergencies while coordinating with emergency
                      responders.
                    </p>
                  </div>

                  <div></div>

                </div>

                {/* Row 3 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div></div>

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -left-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Domestic Violence & Crisis Intervention
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Our officers respond quickly to domestic disputes,
                      disturbances, and crisis situations while ensuring the
                      safety of all residents.
                    </p>
                  </div>

                </div>

                {/* Row 4 */}

                <div className="grid md:grid-cols-2 gap-12 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Incident Documentation & Legal Support
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Officers maintain detailed reports and document
                      incidents to assist property managers and law
                      enforcement when required.
                    </p>
                  </div>

                  <div></div>

                </div>

              </div>

            </div>



            {/* Sticky Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-40">
                <div className="bg-gray-100 rounded-lg shadow-lg p-8">

                  <h2 className="text-3xl font-bold mb-8">
                    Industries
                  </h2>

                  <div className="space-y-5">

                    <Link
                      to="/industries/apartment-security"
                      className="block text-sky-700 font-semibold hover:translate-x-2 transition duration-300"
                    >
                      Apartment Security
                    </Link>

                    <Link
                      to="/industries/construction-security"
                      className="block text-sky-700 font-semibold hover:translate-x-2 transition duration-300"
                    >
                      Construction Security
                    </Link>

                    <Link
                      to="/industries/factory-security"
                      className="block text-sky-700 font-semibold hover:translate-x-2 transition duration-300"
                    >
                      Factory Security
                    </Link>

                    <Link
                      to="/industries/gated-community"
                      className="block text-sky-700 font-semibold hover:translate-x-2 transition duration-300"
                    >
                      Gated Community
                    </Link>

                    <Link
                      to="/industries/warehouse-security"
                      className="block text-sky-700 font-semibold hover:translate-x-2 transition duration-300"
                    >
                      Warehouse Security
                    </Link>

                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Services />
      <Quote />
    </>
  )
}

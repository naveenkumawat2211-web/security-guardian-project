import React from 'react'
import Services from '../../components/Services'
import Quote from '../../components/Quote'
import warehouseBanner from '../../assets/insdustries/warehouse.jpg'
import { Link } from 'react-router-dom'


export default function Warehouse() {
  return (
    <>
      <section className="relative h-[520px] overflow-hidden">
        {/* Background Image */}
        <img
          src={warehouseBanner}
          alt="Apartment Security"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div data-aos="zoom-in" className="relative z-10 flex items-center justify-center h-full px-5">
          <h1 className="text-center text-white text-4xl md:text-5xl font-bold leading-tight">
            Warehouse Security Services
          </h1>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-10">

            {/* Left Content */}
            <div className="lg:col-span-3">

              <p className="text-gray-600 leading-8 mb-14">
                Protecting your warehouse and inventory is essential for operational success. Having security guards in a warehouse or distribution center ensures comprehensive protection for both people and assets. Security Guardian provides more than just monitoring — our trained security professionals prevent incidents, maintain safety standards, and enhance operational efficiency. A warehouse holds valuable inventory, equipment, and logistics data, making it a prime target for theft or damage. Professional warehouse security guards ensure 24/7 vigilance, preventing losses and maintaining smooth operations. Through patrols, CCTV monitoring, access control, and rapid incident response, our guards safeguard every part of your supply chain. By ensuring personnel safety, regulating access, and securing goods from dispatch to storage, security guards contribute to a safe, compliant, and productive environment.
              </p>

              <h2 className="text-4xl font-bold text-center mb-16">
                Warehouse Security Guard{" "}
                <span className="text-red-500">Responsibilites</span>
              </h2>

              <div className="relative">

                {/* Center Line */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-red-500 h-full"></div>

                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div> </div>

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -left-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Theft Prevention                    </h3>

                    <p className="text-gray-600 leading-7">
                      Deterrence of inventory and equipment theft through vigilant monitoring and suspicious activity detection.
                    </p>
                  </div>

                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Access Control                    </h3>

                    <p className="text-gray-600 leading-7">
                      Strict management of entry points to ensure only authorized personnel access sensitive areas.
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
                      Vandalism Protection                    </h3>

                    <p className="text-gray-600 leading-7">
                      Active surveillance to prevent property damage and maintain operational integrity.
                    </p>
                  </div>

                </div>

                {/* Row 4 */}

                <div className="grid md:grid-cols-2 gap-12 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Conflict Resolution                    </h3>

                    <p className="text-gray-600 leading-7">
                      De-escalation of workplace disputes and enforcement of safety protocols.
                    </p>
                  </div>

                  <div></div>

                </div>

                {/* Row 5 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div></div>

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -left-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Equipment Monitoring                    </h3>

                    <p className="text-gray-600 leading-7">
                      Supervision of machinery usage to prevent accidents, misuse, or theft.
                    </p>
                  </div>

                </div>


                {/* Row 6 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      CCTV Surveillance
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Live monitoring of camera feeds with immediate response to security alerts.
                    </p>
                  </div>

                  <div></div>

                </div>

                {/* Row 7 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div></div>

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -left-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      24/7 Protection
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Round-the-clock security coverage during operational and non-operational hours.
                    </p>
                  </div>

                </div>

                {/* Row 8*/}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Operational Support                    </h3>

                    <p className="text-gray-600 leading-7">
                      Oversight of inventory movements and shipments to prevent errors or unauthorized removal.
                    </p>
                  </div>

                  <div></div>

                </div>

                {/* Row 9 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div></div>

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -left-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Incident Reporting                    </h3>

                    <p className="text-gray-600 leading-7">
                      Detailed documentation of security events for compliance and process improvement.
                    </p>
                  </div>

                </div>

                {/* Row 10*/}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Personnel Safety                    </h3>

                    <p className="text-gray-600 leading-7">
                      Emergency response coordination for medical situations, fires, or accidents.
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

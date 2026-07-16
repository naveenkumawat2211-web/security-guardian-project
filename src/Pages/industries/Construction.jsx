import React from 'react'
import Services from '../../components/Services'
import Quote from '../../components/Quote'
import constructiionBanner from '../../assets/insdustries/construction.jpg'
import { Link } from 'react-router-dom'



export default function Construction() {
  return (
    <>
      <section className="relative h-[520px] overflow-hidden">
        {/* Background Image */}
        <img
          src={constructiionBanner}
          alt="Apartment Security"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div data-aos="zoom-in" className="relative z-10 flex items-center justify-center h-full px-5">
          <h1 className="text-center text-white text-4xl md:text-5xl font-bold leading-tight">
            Construction Site  Security Services
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-10">

            {/* Left Content */}
            <div className="lg:col-span-3">

              <p className="text-gray-600 leading-8 mb-14">
                Security Guardian provides reliable and professional construction site security throughout New York. Construction projects often face risks such as theft, vandalism, and unauthorized access. Our trained guards safeguard your equipment, materials, and workforce—ensuring uninterrupted operations and compliance with safety standards.
              </p>

              <h2 className="text-4xl font-bold text-center mb-16">
                Why Are Security Guards Essential on {" "}
                <span className="text-red-500">Construction</span> Sites?
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
                      Prevention of Theft and Vandalism
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Construction sites often store high-value equipment, tools, and materials, making them vulnerable to theft and vandalism. Our trained security guards maintain a visible presence to deter such activities and ensure your site remains safe and secure.
                    </p>
                  </div>

                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Protection of Workers and Clients

                    </h3>

                    <p className="text-gray-600 leading-7">
                      We ensure that all personnel follow safety guidelines and respond immediately to emergencies. This proactive approach creates a safer work environment and minimizes risks of injuries or accidents.
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
                      Control of Access
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Our guards strictly manage access points, allowing only authorized personnel, deliveries, and visitors. This prevents intrusions, theft, and disruptions to ongoing work.
                    </p>
                  </div>

                </div>

                {/* Row 4 */}

                <div className="grid md:grid-cols-2 gap-12 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Monitoring Site Activities
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Security officers continuously monitor site operations, ensuring compliance with safety standards and reporting any suspicious behavior or safety violations promptly.
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
                      Emergency Response                    </h3>

                    <p className="text-gray-600 leading-7">
                      In emergencies such as fires, accidents, or medical incidents, our guards act swiftly—providing first aid, coordinating evacuation, and liaising with emergency services.
                    </p>
                  </div>

                </div>


                {/* Row 6 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Traffic Management
                    </h3>

                    <p className="text-gray-600 leading-7">
                      We ensure smooth movement of vehicles and heavy machinery around construction sites to reduce congestion and prevent accidents.
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
                      Regulation Compliance
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Our security guards help maintain compliance with safety regulations, preventing project delays or penalties due to non-compliance issues.
                    </p>
                  </div>

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

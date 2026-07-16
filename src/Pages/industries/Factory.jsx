import React from 'react'
import Services from '../../components/Services'
import Quote from '../../components/Quote'
import factoryBanner from '../../assets/insdustries/factory.jpg'
import { Link } from 'react-router-dom'



export default function Factory() {
  return (
    <>
      <section className="relative h-[520px] overflow-hidden">
        {/* Background Image */}
        <img
          src={factoryBanner}
          alt="Apartment Security"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div data-aos="zoom-in" className="relative z-10 flex items-center justify-center h-full px-5">
          <h1 className="text-center text-white text-4xl md:text-5xl font-bold leading-tight">
            Factory Security Services
          </h1>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-10">

            {/* Left Content */}
            <div className="lg:col-span-3">

              <p className="text-gray-600 leading-8 mb-14">
                Manufacturing plants, regardless of their size, are bustling environments where numerous people interact with equipment, materials, and machinery on a daily basis. Unfortunately, this dynamic atmosphere makes these facilities highly vulnerable to theft, vandalism, and other security risks. Manufacturing facilities often house valuable equipment and materials, making professional factory security guard services essential for protecting both assets and personnel. Another common issue in manufacturing plants is labor disputes. If not managed properly, these disputes can escalate, causing property damage or even physical altercations. Specialized security guards trained in handling such situations can effectively reduce these risks, maintaining a safer environment for both employees and management. While most modern manufacturing facilities have CCTV cameras installed, these systems can become ineffective without proper monitoring. A factory security guard can oversee the surveillance systems and ensure that all activities are recorded accurately and incidents are addressed immediately.
              </p>

              <h2 className="text-4xl font-bold text-center mb-16">
                Why Hire {" "}
                <span className="text-red-500">Factory </span>Security Guards?
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
                      Access Control & Monitoring
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Manufacturing plants often have high foot traffic, with various individuals (staff, service providers, visitors) and vehicles coming and going throughout the day. Managing these movements and ensuring that only authorized personnel gain access to restricted areas is a critical task. Trained security guards are essential for monitoring these access points and preventing unauthorized entry.
                    </p>
                  </div>

                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Deterrence to Theft & Vandalism
                    </h3>

                    <p className="text-gray-600 leading-7">
                      The visible presence of uniformed security guards significantly reduces the likelihood of theft and vandalism. Employees and outsiders alike are less likely to engage in unlawful activities when they see security guards patrolling the premises.
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
                      Handling Labor Disputes & Emergencies
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Security guards are trained to handle disputes professionally, ensuring that situations are diffused before they escalate into property damage or physical confrontations. Their expertise allows for swift action in emergencies, protecting both people and property.
                    </p>
                  </div>

                </div>

                {/* Row 4 */}

                <div className="grid md:grid-cols-2 gap-12 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Round-the-Clock Protection
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Manufacturing plants should be safeguarded 24/7, regardless of their hours of operation. Security guards provide constant monitoring, ensuring that the facility is secure even when it is vacant or after regular operating hours.
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
                      Constant Foot Patrolling
                    </h3>

                    <p className="text-gray-600 leading-7">
                      One of the key roles of factory security guards is to perform regular foot patrols throughout the facility. This helps identify potential risks before they become serious threats and ensures all areas of the facility are monitored properly.
                    </p>
                  </div>

                </div>


                {/* Row 6 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Quick Response to Alarms & Incidents
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Security guards are trained to respond quickly to any alarms or suspicious activity. By acting fast, they can minimize potential damage and prevent further incidents from occurring.
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
                      Escort Visitors & Protect Vehicles
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Guards are responsible for escorting visitors to and from the facility, ensuring only authorized individuals are on-site. They also protect vehicles by monitoring parking areas and securing the premises.
                    </p>
                  </div>

                </div>


                {/* Row 8*/}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Maintaining Daily Activity Logs
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Factory security guards maintain detailed logs documenting daily activities and incidents. These records help management identify discrepancies and provide valuable information for disputes or investigations.
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

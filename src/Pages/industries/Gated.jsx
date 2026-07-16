import React from 'react'
import Services from '../../components/Services'
import Quote from '../../components/Quote'
import gatedBanner from '../../assets/insdustries/gated.jpg'
import { Link } from 'react-router-dom'


export default function Gated() {
  return (
    <>
      <section className="relative h-[520px] overflow-hidden">
        {/* Background Image */}
        <img
          src={gatedBanner}
          alt="Apartment Security"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div data-aos="zoom-in" className="relative z-10 flex items-center justify-center h-full px-5">
          <h1 className="text-center text-white text-4xl md:text-5xl font-bold leading-tight">
            Gated Community Security Services
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-10">

            {/* Left Content */}
            <div className="lg:col-span-3">

              <p className="text-gray-600 leading-8 mb-14">
                It is a fact that Gated Neighborhoods and HOAs are residential areas that demand personal attention in the context of security. That is because those living in gated communities and HOAs consider safety and security top concerns. Those who move to gated communities do so because they like an added layer of security and privacy. Professional Gated Community and HOA security guard services meet this demand, significantly enhancing the value and appeal of these neighborhoods. For complete peace of mind, residents and associations often prefer to hire professional HOA security guard services that provide security and increase the property value and overall satisfaction of residents. Although other security measures are an absolute necessity for a gated community or an HOA, a professional security guard ensures real-time protection. Even the latest security measures like keycards and passcodes can be bypassed. Security alarms only trigger after an incident occurs — and response time matters. Having trained guards on-site ensures real-time security and immediate response to any situation. Potential criminals are deterred by the presence of uniformed guards, and threats from within the community are also managed effectively. Moreover, safety and privacy raise the overall value of properties, attracting more residents. With experienced HOA security guard services, communities benefit from trained guards who know how to respond to all potential threats, both internal and external.
              </p>

              <h2 className="text-4xl font-bold text-center mb-16">
                How Security Guards Protect{" "}
                <span className="text-red-500">Gated</span>Community & HOAs
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
                      Visible Deterrent to Crime
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Uniformed security guards actively patrolling gated communities significantly deter potential criminals. Their visible presence prevents crimes before they occur, making the area a less attractive target for burglars and vandals.
                    </p>
                  </div>

                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Protection of Privacy and Security
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Security guards maintain strict access control, verifying all entrants and ensuring only authorized individuals enter. This preserves residents' privacy and delivers the heightened security expected in gated communities.
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
                      Prevention of Theft and Vandalism
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Through regular patrols and surveillance, guards identify and intercept suspicious activity before it escalates. Their proactive presence safeguards homes, vehicles, and common areas from property crimes.
                    </p>
                  </div>

                </div>

                {/* Row 4 */}

                <div className="grid md:grid-cols-2 gap-12 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Quick Response to Emergencies
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Trained guards provide immediate response to security breaches, medical situations, or other crises. They stabilize situations and coordinate efficiently with police, fire, or medical services when needed.
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
                      Customizable Security Solutions
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Security services adapt to each community's needs - whether requiring armed/unarmed personnel, specific patrol routes, or access protocols. Professional security firms tailor protection to match resident preferences and HOA guidelines.
                    </p>
                  </div>

                </div>


                {/* Row 6 */}

                <div className="grid md:grid-cols-2 gap-12 mb-16 relative">

                  <div className="bg-white shadow-lg rounded-xl p-6 border relative">
                    <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                    <h3 className="text-xl font-bold mb-3">
                      Maintaining a Peaceful Environment
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Guards enforce community rules regarding noise, parking, and conduct. By mediating disputes and ensuring compliance, they preserve the neighborhood's tranquility and living standards.


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
                      Reduced Risk and Increased Confidence
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Professional security lowers crime risks while boosting resident peace of mind. This protective layer may also reduce homeowners' insurance premiums and liability claims over time.
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

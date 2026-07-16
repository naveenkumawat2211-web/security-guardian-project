import React from "react";
import { Link } from "react-router-dom";
import PatrolBanner from "../../assets/about/patrol.jpg";
import Industries from "../../components/Industries";
import Quote from "../../components/Quote";

export default function PatrolGaurd() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={PatrolBanner}
          alt="Armed Guard"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1
            data-aos="zoom-in"
            className="text-white text-5xl md:text-5xl font-bold"
          >
            Patrol Guard Security Services
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left Content */}
            <div
              data-aos="fade-right"
              className="lg:col-span-2 space-y-8"
            >
              <p className="text-gray-600 leading-8">
Our Courtesy Patrol Services provide a proactive and highly visible layer of protection for properties, events, and communities. Whether on foot or in vehicles, our trained patrol officers ensure ongoing monitoring, fast response, and positive community engagement.              </p>

              <div>
                <h3 className="text-2xl font-bold mb-3">
Residential Communities </h3>
                <p className="text-gray-600 leading-8">
Routine patrols around residential neighborhoods to deter unwanted activities and offer a sense of safety to residents.                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                 Commercial and Office Properties
                </h3>

                <p className="text-gray-600 leading-8">
                 Continuous patrolling ensures secure access, protects assets, and builds confidence for staff and visitors.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                 Events and Public Gatherings             </h3>

                <p className="text-gray-600 leading-8">
Providing reliable coverage at events with crowd management, emergency readiness, and guest support.                </p>
              </div>

              
            </div>

            {/* Sidebar */}
            <div
              data-aos="fade-left"
              className="lg:sticky lg:top-40 h-fit"
            >
              <div className="bg-gray-100 rounded-lg shadow-lg p-8">

                <h2 className="text-3xl font-bold mb-8">
                  Our Services
                </h2>

                <div className="space-y-5">

                  <Link
                    to="/services/armed-guard"
                    className="block text-sky-700 font-semibold hover:translate-x-2 transition"
                  >
                    Armed Guard
                  </Link>

                  <Link
                    to="/services/unarmed-guard"
                    className="block text-sky-700 font-semibold hover:translate-x-2 transition"
                  >
                    Unarmed Guard
                  </Link>

                  <Link
                    to="/services/mobile-patrol"
                    className="block text-sky-700 font-semibold hover:translate-x-2 transition"
                  >
                    Mobile Patrol
                  </Link>

                  <Link
                    to="/services/event-security"
                    className="block text-sky-700 font-semibold hover:translate-x-2 transition"
                  >
                    Event Security
                  </Link>



                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Industries Section */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-5xl font-bold">
        <span className="text-orange-500">Multiple Patrol</span>{" "}
        Services Across{" "}
        <span className="text-sky-700">Industries</span>
      </h2>

      <p className="text-gray-600 mt-5 max-w-4xl mx-auto leading-8">
        Security Guardian provides professional mobile patrol services
        to businesses, commercial properties, educational institutions,
        healthcare facilities, and hospitality sectors. Our patrol
        officers perform scheduled and random inspections to deter
        criminal activity, ensure safety, and respond quickly to
        incidents.
      </p>
    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div
        data-aos="fade-up"
        className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
      >
        <div className="bg-sky-700 text-white p-5">
          <h3 className="text-2xl font-bold text-center">
            Retail
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Theft Prevention</h4>
            <p className="text-gray-600 text-sm">
              Regular patrols reduce shoplifting and improve store
              security.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Customer Assistance</h4>
            <p className="text-gray-600 text-sm">
              Assist customers while maintaining a safe shopping
              environment.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Parking Lot Patrols</h4>
            <p className="text-gray-600 text-sm">
              Monitor parking areas and prevent suspicious activities.
            </p>
          </div>

        </div>
      </div>

      {/* Card 2 */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
      >
        <div className="bg-sky-700 text-white p-5">
          <h3 className="text-2xl font-bold text-center">
            Corporate Offices
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Access Supervision</h4>
            <p className="text-gray-600 text-sm">
              Monitor entry points and verify visitors regularly.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Professional Environment</h4>
            <p className="text-gray-600 text-sm">
              Maintain discipline and corporate security standards.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Vehicle Patrols</h4>
            <p className="text-gray-600 text-sm">
              Routine patrols around office buildings and parking
              facilities.
            </p>
          </div>

        </div>
      </div>

      {/* Card 3 */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
      >
        <div className="bg-sky-700 text-white p-5">
          <h3 className="text-2xl font-bold text-center">
            Healthcare Facilities
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Patient & Staff Safety</h4>
            <p className="text-gray-600 text-sm">
              Protect patients, staff members and visitors with routine
              monitoring.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Emergency Support</h4>
            <p className="text-gray-600 text-sm">
              Provide immediate response during emergencies and medical
              incidents.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Restricted Area Patrol</h4>
            <p className="text-gray-600 text-sm">
              Secure ICUs, pharmacies and sensitive hospital areas.
            </p>
          </div>

        </div>
      </div>

      {/* Card 4 */}

      <div
        data-aos="fade-up"
        className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
      >
        <div className="bg-sky-700 text-white p-5">
          <h3 className="text-2xl font-bold text-center">
            Hospitality & Hotels
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Guest Safety</h4>
            <p className="text-gray-600 text-sm">
              Patrol guest areas, entrances and parking lots to ensure
              safety.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Incident Management</h4>
            <p className="text-gray-600 text-sm">
              Respond quickly to suspicious activities and emergencies.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Night Patrols</h4>
            <p className="text-gray-600 text-sm">
              Maintain security throughout the property during nighttime.
            </p>
          </div>

        </div>
      </div>

      {/* Card 5 */}

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
      >
        <div className="bg-sky-700 text-white p-5">
          <h3 className="text-2xl font-bold text-center">
            Educational Institutions
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Campus Security</h4>
            <p className="text-gray-600 text-sm">
              Maintain a secure environment for students and staff.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Visitor Management</h4>
            <p className="text-gray-600 text-sm">
              Verify visitors and maintain controlled campus access.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Emergency Response</h4>
            <p className="text-gray-600 text-sm">
              Assist during evacuations and campus emergencies.
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

      
            <Industries />
            <Quote />
      </>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import UnarmedBanner from "../../assets/about/unarmed.jpg";
import Industries from "../../components/Industries";
import Quote from "../../components/Quote";

export default function UnarmedGaurd() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={UnarmedBanner}
          alt="Armed Guard"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1
            data-aos="zoom-in"
            className="text-white text-5xl md:text-5xl font-bold"
          >
            Unarmed Guard Security Services
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
                Our unarmed security guard services are designed to create a safe and welcoming environment while maintaining strong awareness and discipline. Whether you need site patrols, front-desk presence, or event safety, our trained personnel ensure peace of mind with a professional approach.
              </p>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Professional and Certified Team                </h3>

                <p className="text-gray-600 leading-8">
                  Our unarmed guards are thoroughly trained and licensed professionals who bring discipline, awareness, and responsibility to every site they protect.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Strong Focus on Customer Care
                </h3>

                <p className="text-gray-600 leading-8">
                  We understand that security staff often represent your brand. Our guards maintain a friendly, helpful attitude while ensuring safety at all times.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Active Surveillance and Patrolling                </h3>

                <p className="text-gray-600 leading-8">
                  Our personnel continuously observe surroundings, monitor access points, and identify potential risks before they escalate.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Clear Communication and Reporting
                </h3>

                <p className="text-gray-600 leading-8">
                  Guards are trained to document and communicate incidents quickly and precisely, ensuring transparency and accountability.
                </p>
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
        <span className="text-orange-500">Unarmed Guard</span>{" "}
        Services Across Different{" "}
        <span className="text-sky-700">Industries</span>
      </h2>

      <p className="text-gray-600 mt-5 max-w-4xl mx-auto leading-8">
        Security Guardian provides highly trained unarmed security
        professionals for businesses, residential communities,
        commercial properties, warehouses, educational institutions,
        and government facilities. Our officers ensure safety through
        vigilance, access control, customer assistance, and continuous
        monitoring.
      </p>
    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div
        data-aos="fade-up"
        className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
      >
        <div className="bg-sky-700 text-white p-5">
          <h3 className="text-2xl font-bold">
            Construction Sites
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Equipment Protection</h4>
            <p className="text-gray-600 text-sm">
              Monitor heavy machinery, tools and vehicles to prevent
              theft or damage.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Access Supervision</h4>
            <p className="text-gray-600 text-sm">
              Ensure only authorized workers and visitors enter
              designated areas.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Site Patrols</h4>
            <p className="text-gray-600 text-sm">
              Conduct regular patrols to maintain safety throughout the
              construction site.
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
          <h3 className="text-2xl font-bold">
            Warehouses
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">24/7 Monitoring</h4>
            <p className="text-gray-600 text-sm">
              Supervise warehouse operations around the clock.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Inventory Protection</h4>
            <p className="text-gray-600 text-sm">
              Secure inventory and loading docks from unauthorized
              access.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Access Control</h4>
            <p className="text-gray-600 text-sm">
              Verify employees, vendors and delivery personnel.
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
          <h3 className="text-2xl font-bold">
            Commercial Properties
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Visitor Guidance</h4>
            <p className="text-gray-600 text-sm">
              Welcome and assist visitors while maintaining security.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Routine Patrols</h4>
            <p className="text-gray-600 text-sm">
              Perform scheduled patrols to reduce security risks.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Reception Security</h4>
            <p className="text-gray-600 text-sm">
              Monitor entrances and maintain visitor records.
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
          <h3 className="text-2xl font-bold">
            Residential Complexes
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Community Security</h4>
            <p className="text-gray-600 text-sm">
              Maintain a safe and welcoming environment for residents.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Entry Screening</h4>
            <p className="text-gray-600 text-sm">
              Verify visitors before allowing access.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Parking Patrol</h4>
            <p className="text-gray-600 text-sm">
              Regularly inspect parking areas and common spaces.
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
          <h3 className="text-2xl font-bold">
            Government Buildings
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Sensitive Area Protection</h4>
            <p className="text-gray-600 text-sm">
              Secure restricted zones and public offices.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Professional Conduct</h4>
            <p className="text-gray-600 text-sm">
              Maintain discipline and follow security protocols.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Public Assistance</h4>
            <p className="text-gray-600 text-sm">
              Help visitors while ensuring a secure environment.
            </p>
          </div>

        </div>
      </div>

      {/* Card 6 */}

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
      >
        <div className="bg-sky-700 text-white p-5">
          <h3 className="text-2xl font-bold">
            Private Events
          </h3>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h4 className="font-bold">Crowd Management</h4>
            <p className="text-gray-600 text-sm">
              Ensure smooth entry, seating and crowd movement.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Emergency Readiness</h4>
            <p className="text-gray-600 text-sm">
              Respond quickly to emergencies and disturbances.
            </p>
          </div>

          <div>
            <h4 className="font-bold">Guest Assistance</h4>
            <p className="text-gray-600 text-sm">
              Provide professional assistance to guests and organizers.
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
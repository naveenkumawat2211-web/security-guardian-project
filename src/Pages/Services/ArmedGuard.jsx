import React from "react";
import { Link } from "react-router-dom";
import armedBanner from "../../assets/about/armed-banner.jpg"; 
import Industries from "../../components/Industries";
import Quote from "../../components/Quote";

export default function ArmedGuard() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={armedBanner}
          alt="Armed Guard"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <h1
            data-aos="zoom-in"
            className="text-white text-5xl md:text-5xl font-bold"
          >
            Armed Guard Security Services
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
                Provide a strong and reliable security presence with
                professional armed guard services. Our licensed and
                highly trained guards protect commercial properties,
                industrial sites, construction projects, residential
                communities, hospitals, educational institutions,
                financial organizations and special events with the
                highest level of professionalism.
              </p>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  High-Risk Protection
                </h3>

                <p className="text-gray-600 leading-8">
                  Suitable for businesses, banks, jewelry stores,
                  government facilities, private properties and events
                  requiring elevated security measures.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Emergency Response
                </h3>

                <p className="text-gray-600 leading-8">
                  Trained professionals capable of responding quickly
                  during emergencies to safeguard people, assets and
                  sensitive locations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Visible Deterrent
                </h3>

                <p className="text-gray-600 leading-8">
                  Armed security officers discourage criminal activity
                  and create a safer environment for employees,
                  customers and visitors.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Professional Monitoring
                </h3>

                <p className="text-gray-600 leading-8">
                  Regular patrols, access control, incident reporting
                  and continuous surveillance ensure complete
                  protection of your premises.
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

    <div className="grid lg:grid-cols-4 gap-10">

      {/* Left Content */}
      <div className="lg:col-span-3">

        <div
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-bold">
            <span className="text-orange-500">Armed Guard</span>{" "}
            Services Across Various{" "}
            <span className="text-sky-700">Industries</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-4xl mx-auto leading-8">
            Security Guardian delivers advanced armed security services
            designed for organizations and individuals who demand
            reliable, high-level protection. Our licensed professionals
            respond swiftly to emergencies and maintain a visible
            deterrent against potential threats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* Card */}

          <div
            data-aos="fade-up"
            className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            <div className="bg-sky-700 text-white p-5">
              <h3 className="text-2xl font-bold">
                Corporate & Office Buildings
              </h3>
            </div>

            <div className="p-5 space-y-4">

              <div>
                <h4 className="font-bold">Access Management</h4>
                <p className="text-gray-600 text-sm">
                  Monitor employees and visitors while maintaining
                  secure checkpoints.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Rapid Response</h4>
                <p className="text-gray-600 text-sm">
                  Immediate response to security incidents and threats.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Confidentiality</h4>
                <p className="text-gray-600 text-sm">
                  Professional conduct while protecting business assets.
                </p>
              </div>

            </div>
          </div>

          {/* Card */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            <div className="bg-sky-700 text-white p-5">
              <h3 className="text-2xl font-bold">
                Retail & Shopping Centers
              </h3>
            </div>

            <div className="p-5 space-y-4">

              <div>
                <h4 className="font-bold">Loss Prevention</h4>
                <p className="text-gray-600 text-sm">
                  Prevent theft and maintain a safe shopping experience.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Customer Assistance</h4>
                <p className="text-gray-600 text-sm">
                  Help customers during emergencies.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Surveillance</h4>
                <p className="text-gray-600 text-sm">
                  CCTV monitoring and patrol services.
                </p>
              </div>

            </div>
          </div>

          {/* Card */}

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            <div className="bg-sky-700 text-white p-5">
              <h3 className="text-2xl font-bold">
                Hospitals & Healthcare
              </h3>
            </div>

            <div className="p-5 space-y-4">

              <div>
                <h4 className="font-bold">Patient Protection</h4>
                <p className="text-gray-600 text-sm">
                  Secure hospital staff and visitors.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Restricted Zones</h4>
                <p className="text-gray-600 text-sm">
                  ICU and medication storage monitoring.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Emergency Support</h4>
                <p className="text-gray-600 text-sm">
                  Fast response during medical emergencies.
                </p>
              </div>

            </div>
          </div>

          {/* Card */}

          <div
            data-aos="fade-up"
            className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            <div className="bg-sky-700 text-white p-5">
              <h3 className="text-2xl font-bold">
                Schools & Universities
              </h3>
            </div>

            <div className="p-5 space-y-4">

              <div>
                <h4 className="font-bold">Campus Patrols</h4>
                <p className="text-gray-600 text-sm">
                  Daily monitoring of educational campuses.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Incident Response</h4>
                <p className="text-gray-600 text-sm">
                  Immediate action for student safety.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Traffic Control</h4>
                <p className="text-gray-600 text-sm">
                  Manage entry and exit during school hours.
                </p>
              </div>

            </div>
          </div>

          {/* Card */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            <div className="bg-sky-700 text-white p-5">
              <h3 className="text-2xl font-bold">
                Industrial & Manufacturing
              </h3>
            </div>

            <div className="p-5 space-y-4">

              <div>
                <h4 className="font-bold">Asset Protection</h4>
                <p className="text-gray-600 text-sm">
                  Protect machinery and equipment.
                </p>
              </div>

              <div>
                <h4 className="font-bold">24/7 Surveillance</h4>
                <p className="text-gray-600 text-sm">
                  Continuous monitoring and patrol.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Documentation</h4>
                <p className="text-gray-600 text-sm">
                  Maintain complete incident reports.
                </p>
              </div>

            </div>
          </div>

          {/* Card */}

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            <div className="bg-sky-700 text-white p-5">
              <h3 className="text-2xl font-bold">
                Events & Entertainment
              </h3>
            </div>

            <div className="p-5 space-y-4">

              <div>
                <h4 className="font-bold">Crowd Control</h4>
                <p className="text-gray-600 text-sm">
                  Maintain order during large events.
                </p>
              </div>

              <div>
                <h4 className="font-bold">VIP Protection</h4>
                <p className="text-gray-600 text-sm">
                  Security for celebrities and VIP guests.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Crisis Management</h4>
                <p className="text-gray-600 text-sm">
                  Immediate action during emergencies.
                </p>
              </div>

            </div>
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
import React from "react";
import { Link } from "react-router-dom";
import eventBanner from "../../assets/about/event.jpg";
import Quote from "../../components/Quote";
import Industries from "../../components/Industries";

export default function EventSecurity() {
  return (
    <>
    <section className="relative h-[520px] overflow-hidden">
  <img
    src={eventBanner}
    alt="Event Security"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 flex h-full items-center justify-center px-5">
    <h1
      data-aos="zoom-in"
      className="text-center text-4xl md:text-6xl font-bold text-white"
    >
      Event Security Services
    </h1>
  </div>
</section>


<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-4 gap-10">

      {/* Left Content */}

      <div className="lg:col-span-3">

        <p className="text-gray-600 leading-8 mb-10">
          Security Guardian provides professional event security
          services for corporate events, concerts, festivals,
          exhibitions, sports events, weddings, conferences and
          private gatherings. Our trained guards maintain order,
          control crowds and respond quickly to emergencies to
          ensure every event remains safe and successful.
        </p>

        <div className="space-y-10">

          <div>
            <h2 className="text-3xl font-bold mb-3">
              Crowd Management
            </h2>

            <p className="text-gray-600 leading-8">
              Our experienced officers manage crowds efficiently,
              prevent unauthorized access and ensure smooth movement
              of guests throughout the venue.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-3">
              Access Control
            </h2>

            <p className="text-gray-600 leading-8">
              We verify invitations, monitor entry gates, perform bag
              inspections and control restricted areas for complete
              security.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-3">
              VIP Protection
            </h2>

            <p className="text-gray-600 leading-8">
              Dedicated security officers provide discreet and
              professional protection for celebrities, executives,
              government officials and VIP guests.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-3">
              Emergency Response
            </h2>

            <p className="text-gray-600 leading-8">
              Our guards are trained to respond immediately to medical
              emergencies, fire incidents, disturbances and evacuation
              procedures.
            </p>
          </div>

        </div>

      </div>

      {/* Sticky Sidebar */}

      <div className="lg:col-span-1">

        <div className="sticky top-28 bg-gray-100 rounded-lg shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-8">
            Our Services
          </h2>

          <div className="space-y-5">

            <Link
              to="/services/armed-guard"
              className="block font-semibold text-sky-700 hover:translate-x-2 transition"
            >
              Armed Guard
            </Link>

            <Link
              to="/services/unarmed-guard"
              className="block font-semibold text-sky-700 hover:translate-x-2 transition"
            >
              Unarmed Guard
            </Link>

            <Link
              to="/services/mobile-patrol"
              className="block font-semibold text-sky-700 hover:translate-x-2 transition"
            >
              Mobile Patrol
            </Link>

            <Link
              to="/services/event-security"
              className="block font-semibold text-sky-700 hover:translate-x-2 transition"
            >
              Event Security
            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>


<section className="py-20 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-14">

<h2 className="text-5xl font-bold">
Event Security For Every Occasion
</h2>

<p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
Our security officers are trained to protect events of every size
while providing excellent customer service.
</p>

</div>

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

{[
{
title:"Corporate Events",
text:"Professional security for meetings, conferences and business events."
},
{
title:"Concerts & Festivals",
text:"Crowd management and emergency response for large public gatherings."
},
{
title:"Sports Events",
text:"Gate control, VIP security and audience safety."
},
{
title:"Wedding Security",
text:"Protect guests and ensure smooth celebrations."
},
{
title:"Private Parties",
text:"Entry verification and property protection."
},
{
title:"Exhibitions & Trade Shows",
text:"Secure booths, visitors and valuable equipment."
}
].map((item,index)=>(

<div
key={index}
className="bg-white rounded-lg shadow-lg p-7 hover:-translate-y-2 transition"
>

<h3 className="text-2xl font-bold mb-4 text-sky-700">
{item.title}
</h3>

<p className="text-gray-600 leading-7">
{item.text}
</p>

</div>

))}

</div>

</div>

</section>
    <Industries/>
    <Quote/>
    </>
  )
}

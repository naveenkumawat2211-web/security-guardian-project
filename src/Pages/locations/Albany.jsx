import React from 'react'
import Services from '../../components/Services'
import Quote from '../../components/Quote'
import albanyBanner from '../../assets/Locations/albany.jpg'
import { Link } from 'react-router-dom'


export default function Albany() {
    return (
        <>
            <section className="relative h-[520px] overflow-hidden">
                {/* Background Image */}
                <img
                    src={albanyBanner}
                    alt="Apartment Security"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/55"></div>

                {/* Content */}
                <div data-aos="zoom-in" className="relative z-10 flex items-center justify-center h-full px-5">
                    <h1 className="text-center text-white text-4xl md:text-5xl font-bold leading-tight">

                        Security Services in Albany County, New York          </h1>
                </div>
            </section>

            {/* Main Content */}

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-4 gap-10">

                        {/* Left Content */}

                        <div className="lg:col-span-3">

                            {/* Heading */}

                            <h2 className="text-3xl  text-center font-bold leading-tight mb-12">
                                Trusted Security Services for Homes and Businesses in{" "}
                                <span className="text-red-500">New York</span>
                                <br />
                                County
                            </h2>

                            {/* Intro */}

                            <p className="text-gray-600 leading-8 mb-12">
                                New York County requires high-level security solutions for busy
                                commercial areas and residential neighborhoods. Security Guardian
                                provides licensed armed and unarmed guards, mobile patrol, and
                                corporate security to meet these demands.
                            </p>

                            {/* Blue Banner */}

                            <div className="bg-sky-700 text-white rounded-lg p-8 mb-20">

                                <div className="grid md:grid-cols-2 items-center gap-8">

                                    <h2 className="text-2xl lg:text-3xl text-right font-bold font-oswald tracking-wider 
">
                                        Top Security Services
                                        <br />
                                        in New York
                                    </h2>

                                    <div className="border-l-4 border-white pl-8">
                                        <p className="pl-2">
                                            Ensure your safety and peace of mind with Security Guardian
                                            in New York County.
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* Timeline */}

                            <div className="relative">

                                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-red-500 h-full"></div>

                                {/* Row 1 */}

                                <div className="grid md:grid-cols-2 gap-12 mb-16">

                                    <div></div>

                                    <div className="bg-white shadow-lg rounded-xl border p-6 relative">

                                        <div className="hidden md:block absolute -left-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                                        <h3 className="text-xl font-bold mb-3">
                                            Highly Trained Officers
                                        </h3>

                                        <p className="text-gray-600  text-sm">
                                            Experts in risk assessment and crime prevention
                                        </p>

                                    </div>

                                </div>

                                {/* Row 2 */}

                                <div className="grid md:grid-cols-2 gap-12 mb-16">

                                    <div className="bg-white shadow-lg rounded-xl border p-6 relative">

                                        <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                                        <h3 className="text-xl font-bold mb-3">
                                            24/7 Mobile Patrol
                                        </h3>

                                        <p className="text-gray-600  text-sm">
                                            Round-the-clock security with rapid response
                                        </p>

                                    </div>

                                    <div></div>

                                </div>

                                {/* Row 3 */}

                                <div className="grid md:grid-cols-2 gap-12 mb-16">

                                    <div></div>

                                    <div className="bg-white shadow-lg rounded-xl border p-6 relative">

                                        <div className="hidden md:block absolute -left-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                                        <h3 className="text-xl font-bold mb-3">
                                            Custom Solutions
                                        </h3>

                                        <p className="text-gray-600  text-sm">
                                            Tailored security plans for your specific needs
                                        </p>

                                    </div>

                                </div>

                                {/* Row 4 */}

                                <div className="grid md:grid-cols-2 gap-12">

                                    <div className="bg-white shadow-lg rounded-xl border p-6 relative">

                                        <div className="hidden md:block absolute -right-[38px] top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>

                                        <h3 className="text-xl font-bold mb-3">
                                            Affordable Rates              </h3>

                                        <p className="text-gray-600  text-sm">
                                            Competitive pricing without compromising quality
                                        </p>

                                    </div>

                                    <div></div>

                                </div>

                            </div>

                        </div>

                        {/* Right Sidebar */}

                        <div className="lg:col-span-1">

                            <div className="sticky top-45 bg-gray-100 rounded-lg shadow-lg p-8">

                                <h2 className="text-3xl font-bold mb-8">
                                    Areas We Serve
                                </h2>

                                <div className="space-y-5">
                                     <Link to="/locations/new-york" className="block text-sky-700 font-semibold hover:translate-x-2 transition">
                                        New york
                                    </Link>

                                    <Link to="/locations/albany" className="block text-sky-700 font-semibold hover:translate-x-2 transition">
                                        Albany
                                    </Link>

                                    <Link to="/locations/bronx" className="block text-sky-700 font-semibold hover:translate-x-2 transition">
                                        Bronx
                                    </Link>

                                    <Link to="/locations/kings" className="block text-sky-700 font-semibold hover:translate-x-2 transition">
                                        Kings
                                    </Link>

                                    <Link to="/locations/queens" className="block text-sky-700 font-semibold hover:translate-x-2 transition">
                                        Queens
                                    </Link>

                                    <Link to="/locations/richmond" className="block text-sky-700 font-semibold hover:translate-x-2 transition">
                                        Richmond
                                    </Link>

                                    <Link to="/locations/westchester" className="block text-sky-700 font-semibold hover:translate-x-2 transition">
                                        Westchester
                                    </Link>

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

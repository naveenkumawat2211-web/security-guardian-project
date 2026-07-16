import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




export default function Quote() {
    const [formData, setFormData] = useState({
  fullName: "", 
  email: "",
  phone: "",
  industry: "",
  company: "",
  service: "",
  guards: "",
  address: "",
  city: "",
  zip: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.fullName ||
    !formData.email ||
    !formData.phone
  ) {
    alert("Please fill all required fields.");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    alert("Quote Request Submitted Successfully!");

    setLoading(false);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      industry: "",
      company: "",
      service: "",
      guards: "",
      address: "",
      city: "",
      zip: "",
      message: "",
    });
  }, 1500);
};
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Blue Background Shape */}
      <div className="absolute top-0 right-0 w-full lg:w-[38%] h-full bg-sky-500"></div>

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Hire Professional Security Guard
          </h2>

          <p className="text-gray-700 leading-9 text-lg">
            We are dedicated to providing professional, reliable, and trusted
            security solutions. With years of experience, our team of licensed
            and fully insured security guards ensures that your property and
            loved ones are always protected.
          </p>

          <p className="text-gray-700 leading-9 text-lg mt-5">
            We specialize in offering 24/7 security services tailored to meet
            the unique needs of each client, whether for commercial,
            residential, industrial, or personal security.
          </p>

          <p className="text-gray-700 leading-9 text-lg mt-5">
            Our mission is to deliver peace of mind through exceptional
            security services that prioritize safety, reliability, and
            professionalism.
          </p>
        </div>

        {/* Form */}
        <div
  // data-aos="zoom-in-left"
  className="bg-white rounded-xl shadow-2xl p-8 lg:p-10 relative z-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500"
>
  <h2 className="text-4xl font-bold mb-8">
    Request a <span className="text-sky-500">Quote</span>
  </h2>

  <form onSubmit={handleSubmit} className="space-y-5">

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name *"
        required
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email *"
        required
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      />

    </div>

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number *"
        required
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      />

      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        placeholder="Industry"
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      />

    </div>

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name"
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      >
        <option value="">Select Service</option>
        <option>Armed Guard</option>
        <option>Unarmed Guard</option>
        <option>Mobile Patrol</option>
        <option>Event Security</option>
      </select>

    </div>

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="number"
        name="guards"
        value={formData.guards}
        onChange={handleChange}
        placeholder="Number of Guards"
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      />

      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Service Location"
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      />

    </div>

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      />

      <input
        type="text"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        placeholder="Zip Code"
        className="border border-gray-300 rounded-md p-3 outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
      />

    </div>

    <textarea
      rows="5"
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Write your message..."
      className="w-full border border-gray-300 rounded-md p-3 resize-none outline-none hover:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
    />

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-sky-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-sky-600 hover:scale-[1.02] transition-all duration-300 disabled:bg-gray-400"
    >
      {loading ? "Request Submitting..." : "Submit"}
    </button>

  </form>
</div>

      </div>
    </section>
  );
}
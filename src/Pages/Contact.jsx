import React, { useState } from "react"; 
import contactImg from "../assets/sliderImages/contact.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    industry: "",
    organization: "",
    service: "",
    guards: "",
    location: "",
    city: "",
    zip: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid Email";

    if (!formData.phone.trim())
      newErrors.phone = "Phone Number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.service.trim())
      newErrors.service = "Select Service";

    if (!formData.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Form Submitted Successfully");

    console.log(formData);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      industry: "",
      organization: "",
      service: "",
      guards: "",
      location: "",
      city: "",
      zip: "",
      message: "",
    });
  };
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[450px] overflow-hidden">
        <img
          src={contactImg}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div
          data-aos="zoom-in"
          className="relative z-10 flex h-full items-center justify-center"
        >
          <h1 className="text-5xl font-bold text-white">
            Contact Security Guardian
          </h1>
        </div>
      </section>

      {/* Contact Cards */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div
              data-aos="fade-up"
              className="bg-white rounded-xl shadow-lg p-10 text-center hover:-translate-y-2 duration-300"
            >
              <FaPhoneAlt className="text-4xl text-blue-700 mx-auto mb-5" />

              <h3 className="text-3xl font-semibold mb-5">
                Phone
              </h3>

              <p className="text-gray-600">
                +91 7597386371
              </p>

              <p className="text-gray-600">
                +91 9413570402
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-xl shadow-lg p-10 text-center hover:-translate-y-2 duration-300"
            >
              <FaEnvelope className="text-4xl text-blue-700 mx-auto mb-5" />

              <h3 className="text-3xl font-semibold mb-5">
                Email
              </h3>

              <p className="text-gray-600">
                info@securityguardian.com
              </p>

              <p className="text-gray-600">
                support@securityguardian.com
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white rounded-xl shadow-lg p-10 text-center hover:-translate-y-2 duration-300"
            >
              <FaMapMarkerAlt className="text-4xl text-blue-700 mx-auto mb-5" />

              <h3 className="text-3xl font-semibold mb-5">
                Location
              </h3>

              <p className="text-gray-600">
                New York, United States
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Map + Form */}

      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Google Map */}

            <div data-aos="fade-right">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=New+York&output=embed"
                className="w-full h-[600px] rounded-xl shadow-lg border-0"
                loading="lazy"
              ></iframe>

            </div>

            {/* Form */}

            <div
              data-aos="fade-left"
              className="bg-white rounded-xl shadow-lg p-8"
            >

              <h2 className="text-4xl font-bold mb-8">
                Contact Us
              </h2>

           <form onSubmit={handleSubmit} className="space-y-5">
  <div className="grid md:grid-cols-2 gap-5">

    {/* Full Name */}
    <div>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name *"
        className="border p-3 rounded-lg w-full"
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
      )}
    </div>

    {/* Email */}
    <div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email *"
        className="border p-3 rounded-lg w-full"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </div>

    {/* Phone */}
    <div>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number *"
        className="border p-3 rounded-lg w-full"
      />
      {errors.phone && (
        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
      )}
    </div>

    {/* Industry */}
    <div>
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        placeholder="Industry"
        className="border p-3 rounded-lg w-full"
      />
    </div>

    {/* Organization */}
    <div>
      <input
        type="text"
        name="organization"
        value={formData.organization}
        onChange={handleChange}
        placeholder="Organization Name"
        className="border p-3 rounded-lg w-full"
      />
    </div>

    {/* Service */}
    <div>
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="border p-3 rounded-lg w-full"
      >
        <option value="">Select Service</option>
        <option value="Armed Guard">Armed Guard</option>
        <option value="Unarmed Guard">Unarmed Guard</option>
        <option value="Event Security">Event Security</option>
        <option value="Mobile Patrol">Mobile Patrol</option>
      </select>

      {errors.service && (
        <p className="text-red-500 text-sm mt-1">{errors.service}</p>
      )}
    </div>

    {/* Guards */}
    <div>
      <input
        type="number"
        name="guards"
        value={formData.guards}
        onChange={handleChange}
        placeholder="How Many Guards"
        className="border p-3 rounded-lg w-full"
      />
    </div>

    {/* Location */}
    <div>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Service Location"
        className="border p-3 rounded-lg w-full"
      />
    </div>

    {/* City */}
    <div>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="border p-3 rounded-lg w-full"
      />
    </div>

    {/* Zip */}
    <div>
      <input
        type="text"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        placeholder="Zip Code"
        className="border p-3 rounded-lg w-full"
      />
    </div>

  </div>

  {/* Message */}
  <div>
    <textarea
      rows={6}
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Write your message..."
      className="border p-3 rounded-lg w-full"
    />

    {errors.message && (
      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
    )}
  </div>

  <button
    type="submit"
    className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-lg font-semibold transition"
  >
    Submit
  </button>
</form>

            </div>

          </div>

        </div>
      </section>
    </>
 );
}
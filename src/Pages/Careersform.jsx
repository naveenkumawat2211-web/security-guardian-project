import { useState } from "react";

export default function JobApplicationForm() {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    guardCard: "yes",
    guardExpiry: "",
    drivingLicense: "yes",
    licenseExpiry: "",
    shortShift: "yes",
    emergency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const shifts = [
    "Day Shift",
    "Swing Shift",
    "Graveyard Shift",
    "Weekend",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg border p-8">

        <h2 className="text-3xl font-bold mb-2">
          Fill the Online Primary Application
        </h2>

        <p className="text-gray-500 mb-8">
          Please fill all required information below.
        </p>

        {/* Personal Details */}

        <div className="grid md:grid-cols-3 gap-5">

          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <input
            name="middleName"
            placeholder="Middle Name"
            value={form.middleName}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="border rounded-md p-3"
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            name="address"
            placeholder="Street Address"
            value={form.address}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <input
            name="apartment"
            placeholder="Apartment"
            value={form.apartment}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <input
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <input
            name="zip"
            placeholder="Zip Code"
            value={form.zip}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

          <input
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            className="border rounded-md p-3"
          />

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div>
            <h4 className="font-semibold mb-3">
              Do you have a Guard Card?
            </h4>

            <div className="flex gap-6 mb-4">
              <label>
                <input
                  type="radio"
                  name="guardCard"
                  value="yes"
                  checked={form.guardCard === "yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="guardCard"
                  value="no"
                  checked={form.guardCard === "no"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>

            <label className="block mb-2 font-medium">
              Expiry Date
            </label>

            <input
              type="date"
              name="guardExpiry"
              value={form.guardExpiry}
              onChange={handleChange}
              className="border rounded-md p-3 w-full"
            />
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Do you have a Driving License?
            </h4>

            <div className="flex gap-6 mb-4">
              <label>
                <input
                  type="radio"
                  name="drivingLicense"
                  value="yes"
                  checked={form.drivingLicense === "yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="drivingLicense"
                  value="no"
                  checked={form.drivingLicense === "no"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>

            <label className="block mb-2 font-medium">
              Expiry Date
            </label>

            <input
              type="date"
              name="licenseExpiry"
              value={form.licenseExpiry}
              onChange={handleChange}
              className="border rounded-md p-3 w-full"
            />
          </div>

        </div>

        {/* Questions */}

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div>
            <p className="font-semibold mb-3">
              Are you willing to work 6 hours shift or less?
            </p>

            <label className="mr-5">
              <input
                type="radio"
                name="shortShift"
                value="yes"
                checked={form.shortShift === "yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="shortShift"
                value="no"
                checked={form.shortShift === "no"}
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>

          <div>
            <p className="font-semibold mb-3">
              Will you accept emergency calls?
            </p>

            <label className="mr-5">
              <input
                type="radio"
                name="emergency"
                value="yes"
                checked={form.emergency === "yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="emergency"
                value="no"
                checked={form.emergency === "no"}
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>

        </div>

        {/* Checkboxes */}

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          <div>
            <h3 className="font-bold mb-4">Days Available</h3>

            <div className="grid grid-cols-2 gap-3">
              {days.map((day) => (
                <label key={day}>
                  <input type="checkbox" className="mr-2" />
                  {day}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Desired Shift</h3>

            <div className="space-y-2">
              {shifts.map((shift) => (
                <label key={shift} className="block">
                  <input type="checkbox" className="mr-2" />
                  {shift}
                </label>
              ))}
            </div>
          </div>

        </div>

        <button
          className="mt-10 w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-md text-lg font-semibold transition"
        >
          Submit Application
        </button>

      </div>
    </div>
  );
}
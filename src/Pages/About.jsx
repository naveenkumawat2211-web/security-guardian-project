import aboutBanner from "../assets/sliderImages/about.png";
import aboutImg from "../assets/about/security-about.jpg";

import {
  FaShieldAlt,
  FaUsers,
  FaUserShield,
  FaClipboardList,
  FaStar,
  FaLock,
  FaGlobe,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      {/* ================= Banner ================= */}

      <section className="relative h-[450px] overflow-hidden">

<img
src={aboutBanner}
className="absolute inset-0 w-full h-full object-cover scale-110 animate-[zoom_8s_linear_infinite_alternate]"
/>

<div className="absolute inset-0 bg-black/60"/>

<div
data-aos="zoom-in"
className="relative z-10 flex h-full justify-center items-center"
>

<h1 className="text-white text-6xl font-bold">
About Security Guardian
</h1>

</div>

</section>

      {/* ================= About ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <img
              src={aboutImg}
              alt=""
              className="rounded-xl shadow-xl h-[450px] w-full object-cover"
            />

            <div>

              <h2 className="text-5xl font-bold mb-8">
                About Security Guardian
              </h2>

              <p className="text-gray-600 text-lg leading-9">
                At Security Guardian, we are dedicated to providing
                professional, reliable and trusted security solutions.
                Our experienced team protects residential,
                commercial and industrial properties with
                exceptional service and professionalism.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-6">
                We deliver peace of mind through highly trained
                security officers and customized protection plans
                for every client.
              </p>

              <h3 className="text-3xl font-bold mt-10 mb-8">
                Why Choose Security Guardian?
              </h3>

              <div className="grid grid-cols-2 gap-y-7">

                <div className="flex gap-4 items-center">
                  <FaShieldAlt className="text-red-600 text-3xl" />
                  <span className="font-semibold">
                    10+ Years Experience
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <FaUsers className="text-red-600 text-3xl" />
                  <span className="font-semibold">
                    Trusted by Clients
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <FaUserShield className="text-red-600 text-3xl" />
                  <span className="font-semibold">
                    Highly Skilled Guards
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <FaClipboardList className="text-red-600 text-3xl" />
                  <span className="font-semibold">
                    Customized Plans
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <FaStar className="text-red-600 text-3xl" />
                  <span className="font-semibold">
                    Committed to Excellence
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <FaLock className="text-red-600 text-3xl" />
                  <span className="font-semibold">
                    Committed to Safety
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= Counter ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-10">

            <div>
              <h2 className="text-5xl font-bold">28</h2>
              <p className="text-gray-600 mt-2">
                Counties We Serve
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">200</h2>
              <p className="text-gray-600 mt-2">
                Awards
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">250</h2>
              <p className="text-gray-600 mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">300+</h2>
              <p className="text-gray-600 mt-2">
                Security Guards
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= Mission Vision Values ================= */}

      <section className="pb-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-10 text-center">

              <FaShieldAlt className="mx-auto text-5xl text-blue-500 mb-6"/>

              <h3 className="text-3xl font-bold mb-5">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-8">
                To deliver exceptional security solutions that exceed
                expectations by ensuring safety for individuals,
                businesses and communities.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-10 text-center">

              <FaGlobe className="mx-auto text-5xl text-blue-500 mb-6"/>

              <h3 className="text-3xl font-bold mb-5">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-8">
                To become a global leader in the security industry
                through innovation, professionalism and excellence.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-10 text-center">

              <FaStar className="mx-auto text-5xl text-blue-500 mb-6"/>

              <h3 className="text-3xl font-bold mb-5">
                Our Values
              </h3>

              <p className="text-gray-600 leading-8">
                Integrity, commitment and excellence guide everything
                we do while providing safe and reliable security
                services.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}
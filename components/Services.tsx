import { FaBasketball } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiSpeedometerFill } from "react-icons/pi";

import ServiceCard from "./cards/ServiceCard";

export default function Services() {
  return (
    <div className="space-y-4 my-10">
      <div
        className="flex items-center gap-4 justify-center"
        data-aos="fade-up"
      >
        <div className="border border-blue-900 w-14" />
        <h1 className="text-2xl text-center font-bold">SERVICES</h1>
        <div className="border border-blue-900 w-14" />
      </div>
      <p className="text-center" data-aos="fade-up">
        Akeshya will serve as your consultant and development partner to help
        you turn your idea into a reality.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8 mx-6 md:mx-10 py-5">
        <div data-aos="fade-up" data-aos-delay="200">
          <ServiceCard
            icon={() => (
              <FaBasketball
                size={30}
                className="text-white group-hover:text-blue-900"
              />
            )}
            title="Design"
            description="Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <ServiceCard
            icon={() => (
              <IoDocumentTextOutline
                size={30}
                className="text-white group-hover:text-blue-900"
              />
            )}
            title="Development"
            description="Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <ServiceCard
            icon={() => (
              <FaGlobeAfrica
                size={30}
                className="text-white group-hover:text-blue-900"
              />
            )}
            title="Marketing"
            description="A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <ServiceCard
            icon={() => (
              <PiSpeedometerFill
                size={30}
                className="text-white group-hover:text-blue-900"
              />
            )}
            title="Support"
            description="Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available."
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

import { FaRegSmile } from "react-icons/fa";
import { MdPhonelinkRing } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { BsGlobe } from "react-icons/bs";

import CountsSVG from "../public/images/counts-img.svg";

export default function Counts() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-20 justify-center">
      <Image
        src={CountsSVG}
        alt="Winner logo"
        className="h-96 w-96 lg:w-[40%]"
        data-aos="fade-right"
        data-aos-delay="150"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="flex gap-4">
          <FaRegSmile size={40} className="text-blue-900" />
          <div>
            <p className="font-bold text-x1">3835039</p>
            <p>
              Organic Reach <span className="text-gray-600">(Global)</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <MdPhonelinkRing size={40} className="text-blue-900" />
          <div>
            <p className="font-bold text-x1">85</p>
            <p>Campaigns</p>
          </div>
        </div>

        <div className="flex gap-4">
          <LuClock4 size={40} className="text-blue-900" />
          <div>
            <p className="font-bold text-x1">14081</p>
            <p>
              Watch Hours <span className="text-gray-600">(Asia)</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <BsGlobe size={40} className="text-blue-900" />
          <div>
            <p className="font-bold text-x1">17</p>
            <p>
              Excellent CTR % <span className="text-gray-600">(Asia)</span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

import Image from "next/image";

import { BsGlobe } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { MdPhonelinkRing } from "react-icons/md";

import CountsSVG from "@/public/images/counts-img.svg";

import CountFeature from "./features/CountFeature";

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

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        data-aos="fade-left"
        data-aos-delay="150"
      >
        <div className="flex gap-4">
          <FaRegSmile size={40} className="text-blue-900" />
          <div>
            <CountFeature
              targetValue={3835039}
              duration={2000}
              threshold={0.5}
              className={`text-[36px] text-black font-bold`}
              initialValue={10001}
            />
            <p>
              <b>Organic Reach </b>
              <span className="text-gray-600">(Global)</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <MdPhonelinkRing size={40} className="text-blue-900" />
          <div>
            <CountFeature
              targetValue={85}
              duration={1000}
              threshold={0.5}
              className={`text-[36px] text-black font-bold`}
              initialValue={85}
            />
            <p>
              <b>Campaigns</b>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <LuClock4 size={40} className="text-blue-900" />
          <div>
            <CountFeature
              targetValue={14081}
              duration={2000}
              threshold={0.5}
              className={`text-[36px] text-black font-bold`}
              initialValue={102}
            />
            <p>
              <b>Watch Hours </b>
              <span className="text-gray-600">(Asia)</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <BsGlobe size={40} className="text-blue-900" />
          <div>
            <CountFeature
              targetValue={17}
              duration={1000}
              threshold={0.5}
              className={`text-[36px] text-black font-bold`}
              initialValue={17}
            />
            <p>
              <b>Excellent CTR % </b>
              <span className="text-gray-600">(Asia)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

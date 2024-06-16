import { PiCalculatorFill } from "react-icons/pi";
import {
  MdOutlineDeveloperMode,
  MdOutlineLocationOn,
  MdLeaderboard,
} from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { RiSearchEyeLine, RiContactsBookLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa6";
import { GrTarget } from "react-icons/gr";

import FeatureCard from "./card/FeatureCard";

export default function Features() {
  return (
    <>
      <div className="space-y-4 my-10">
        <div className="flex items-center gap-4 justify-center">
          <div className="border border-blue-900 w-14" />
          <h1 className="text-2xl text-center font-bold">OUR CORE FEATURES</h1>
          <div className="border border-blue-900 w-14" />
        </div>
        <p className="text-center">
          Akeshya is a forward-thinking and intelligent design firm that is
          technically and creatively capable of transforming your brand into its
          best digital self. Our approach to design and development results in
          compelling, engaging branding and immersive digital experiences that
          provide a value for money.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5 mx-6 md:mx-10 lg:mx-16 py-10">
          <FeatureCard
            icon={() => (
              <PiCalculatorFill size={30} className="text-yellow-500" />
            )}
            title="Web design"
          />
          <FeatureCard
            icon={() => (
              <MdOutlineDeveloperMode size={30} className="text-blue-500" />
            )}
            title="Development"
          />
          <FeatureCard
            icon={() => <FaMale size={30} className="text-pink-500" />}
            title="Branding"
          />
          <FeatureCard
            icon={() => (
              <SiYoutubemusic size={30} className="text-fuchsia-500" />
            )}
            title="Media buying"
          />
          <FeatureCard
            icon={() => <RiSearchEyeLine size={30} className="text-sky-500" />}
            title="Search engine"
          />
          <FeatureCard
            icon={() => <SlCalender size={30} className="text-orange-500" />}
            title="Brand Strategy"
          />
          <FeatureCard
            icon={() => (
              <MdOutlineLocationOn size={30} className="text-yellow-300" />
            )}
            title="Local search marketing"
          />
          <FeatureCard
            icon={() => <MdLeaderboard size={30} className="text-violet-500" />}
            title="Lead Tracking & Management"
          />
          <FeatureCard
            icon={() => (
              <RiContactsBookLine size={30} className="text-yellow-900" />
            )}
            title="Contact management"
          />
          <FeatureCard
            icon={() => (
              <BsFillMusicPlayerFill size={30} className="text-pink-900" />
            )}
            title="Media management"
          />
          <FeatureCard
            icon={() => <FaCalendarDay size={30} className="text-amber-900" />}
            title="Social scheduling"
          />
          <FeatureCard
            icon={() => <GrTarget size={30} className="text-green-500" />}
            title="Ad retargeting"
          />
        </div>
      </div>
    </>
  );
}

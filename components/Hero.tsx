import Image from "next/image";

import officeImg from "@/public/images/hero-img.png";

import Button from "./features/Button";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center mx-4 lg:mx-20 mb-10 lg:px-56">
        <div className="lg:w-1/2 space-y-4">
          <h1
            className="font-semibold text-blue-900 text-2xl lg:text-5xl"
            data-aos="fade-up"
          >
            Grow your business with Akeshya
          </h1>

          <p className="lg:text-xl" data-aos="fade-up" data-aos-delay="400">
            We are team of talented website designers, developers & digital
            marketeers
          </p>

          <Button
            title=" Get Started"
            path=""
            dataAosDelay="600"
            dataAos="fade-up"
          />
        </div>

        <div className="lg:w-1/2 m-10" data-aos="fade-left">
          <Image
            src={officeImg}
            alt="Office Image"
            className="mx-auto animation"
          />
        </div>
      </div>
    </>
  );
}
